import React from 'react'
// routes
import { Link } from '../routes'

// i18n
import { i18n, withTranslation } from '../../i18n'
import Storage from '../../lib/Storage'
import { qualityMovie } from './../constant'

class MovieItem extends React.Component {
	static async getInitialProps({ query, store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
  }

	render() {
		const { t, detail } = this.props
		return (
			<Link route='movie' params={{title: detail.title}}>
				<div className="movie-item">
					<div className="picture-movie">
						<div class="video-play-button"></div>
						<img src={detail.img_url} className="img-fluid" />
					</div>
					<div className="detail-movie">
						<h3> { detail.title }</h3>
						<div class="d-flex align-items-center">
							<div className={"tag-movie tag-"+detail.quality }> {qualityMovie[detail.quality]} </div>
							<p className="my-0 ml-2"> { detail.year } </p>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}
export default withTranslation(['common'])(MovieItem)