import React from 'react'
import { withTranslation } from '../i18n'

//component
import FilterBox from './../app/components/FilterBox'

class Movie extends React.Component {
	static async getInitialProps({ query, store }) {
	  return { query , namespacesRequired: ['common'] }
  }
  
	constructor(props) {
    super(props)
    // console.log(this.props.query.title)
  }

  _renderHeader() {
    return (
      <div className="movie-header">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="frame">
              <img src="/images/example/movie/movie1.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="about-movie">
              <h1> {this.props.query.title} </h1>
              <p> John Wick 3: Parabellum ในภาคใหม่นี้ John Wick ต้องถูกคนทั้งโลกตามล่าด้วยค่าหัว $14 ล้านเหรียญ เนื่องจากเขาได้แหกกฎกลาง โดยการฆ่าคนในพื้นที่โรงแรมของ Continental และยิ่งคนที่เขาฆ่าคือสมาชิกระดับสูง เขาจึงต้องสู้และฆ่ากับศัตรูรอบด้านเพื่อหาทางหลบหนีออกจากเมืองนิวยอร์ก </p>
            </div>
            <div className="action-movie">
              <button type="button" className="play"> เล่น </button>
              <div className="movie-tag-detail">
                <div className="tag-detail"> HD </div>
                <div className="tag-detail"> 2017 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <div className="movie-page">
        {this._renderHeader()}
        <div className="mt-5 mx-4">
					<div className="row">
						<div className="col-12 col-md-9"> 
							<div className="content">
								asdasd
							</div>
						</div>
						<div className="col-12 col-md-3 border-l-white"> 
							<FilterBox />
						</div>
					</div>
				</div>
      </div>
    )
  }

}

export default withTranslation('common')(Movie)