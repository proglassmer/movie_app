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

class Index extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	_renderInterestContent() {
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
				<h1> <strong> หนังใหม่ล่าสุด </strong> </h1>
				<Slider {...slickListMovie}>
					{mock_movie.map((data,key) => (
						<MovieItem detail={data} key={key} />
					))}
        </Slider>
			</div>
		)
	}

	_renderNewContent() {
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
				<h1> <strong> หนังที่แนะนำ </strong> </h1>
				<Slider {...slickListMovie}>
					{mock_movie.map((data,key) => (
						<MovieItem detail={data} key={key} />
					))}
        </Slider>
				<Slider {...slickListMovie}>
					{mock_movie.map((data,key) => (
						<MovieItem detail={data} key={key} />
					))}
        </Slider>
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
			<div className="home-page" style={{minHeight: "500px"}} >
				<BannerSlider />
				<div className="my-5">
					<div className="row">
						<div className="col-12 col-md-12"> 
							<div className="content">
								{this._renderInterestContent()}
								
								{this._renderNewContent()}
							</div>
						</div>
						{/* <div className="col-12 col-md-3 border-l-white">  */}
							{/* <FilterBox /> */}
						{/* </div> */}
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