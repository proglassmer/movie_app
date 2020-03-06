import React from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import Slider from "react-slick";
// i18n
import { withTranslation } from '../i18n'
import { slickListMovie } from './../app/constant'

import BannerSlider from './../app/components/BannerSlider'
import FilterBox from './../app/components/FilterBox'
import MovieItem from './../app/components//MovieItem'

class Categoty extends React.Component {
	static async getInitialProps({ store, query }) {
	  return { query, namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	_renderContent() {
    const { query } = this.props
    console.log(query)
		const mock_movie = [
			{
				title: 'DOLITTLE (2020) ด็อกเตอร์ ดูลิตเติ้ล',
				img_url: '/images/example/movie/movie1.jpg',
				year: '2019',
				quality: 'zoom'
			},
			{
				title: 'UNDERWATER (2020) มฤตยูใต้สมุทร',
				img_url: '/images/example/movie/movie3.jpg',
				year: '2019',
				quality: 'hd'
			},
			{
				title: 'BAD BOYS FOR LIFE (2020) คู่หูตลอดกาล ขวางทางนรก',
				img_url: '/images/example/movie/movie2.jpg',
				year: '2019',
				quality: 'zoom'
			},
			{
				title: 'รักเสมือนThe App (2019)',
				img_url: '/images/example/movie/movie3.jpg',
				year: '2019',
				quality: 'zoom'
			},
			{
				title: 'จอห์น มูเลนีย์ แอนด์ เดอะ แซค ลันช์ บันช์John Mulaney And the Sack Lunch Bunch (2019)',
				img_url: '/images/example/movie/movie1.jpg',
				year: '2019',
				quality: 'hd'
			},
			{
				title: 'Captain Marvel กัปตันมาร์เวล',
				img_url: '/images/example/movie/movie2.jpg',
				year: '2019',
				quality: 'zoom'
			},
			{
				title: 'รักเสมือนThe App (2019)',
				img_url: '/images/example/movie/movie3.jpg',
				year: '2019',
				quality: 'zoom'
			},
			{
				title: 'จอห์น มูเลนีย์ แอนด์ เดอะ แซค ลันช์ บันช์John Mulaney And the Sack Lunch Bunch (2019)',
				img_url: '/images/example/movie/movie1.jpg',
				year: '2019',
				quality: 'hd'
			},
			{
				title: 'Captain Marvel กัปตันมาร์เวล',
				img_url: '/images/example/movie/movie2.jpg',
				year: '2019',
				quality: 'zoom'
			}
		]
		return (
			<div className="list-slider">
				<h1> <strong> {query.category} </strong> </h1>
				<Slider {...slickListMovie}>
					{mock_movie.map((data,key) => (
						<MovieItem detail={data} key={key} />
					))}
        </Slider>
			</div>
		)
	}


	render() {
		const { t } = this.props
		return (
			<div className="category-page" style={{minHeight: "500px"}} >
				{/* <BannerSlider /> */}
				<div className="my-5">
					<div className="row">
						<div className="col-12 col-md-12"> 
							<div className="content">
								{this._renderContent()}
							</div>
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
export default compose(withTranslation('common'), connect(mapStateToProps, {}))(Categoty)