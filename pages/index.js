import React from 'react'
import compose from 'recompose/compose'
// redux
import { connect } from 'react-redux'
// i18n
import { withTranslation } from '../i18n'

import BannerSlider from './../app/components/BannerSlider'
import FilterBox from './../app/components/FilterBox'

class Index extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		const { t } = this.props
		return (
			<div className="home-page" style={{minHeight: "500px"}} >
				<BannerSlider />
				<div className="my-3">
					<div className="row">
						<div className="col-12 col-md-9"> list </div>
						<div className="col-12 col-md-3"> 
							<FilterBox />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  }
}
export default compose(withTranslation('common'), connect(mapStateToProps, {}))(Index)