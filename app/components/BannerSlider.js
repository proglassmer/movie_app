import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText } from 'reactstrap'
import Slider from "react-slick";

// routes
import { Router, Link } from '../routes'

// component

// i18n
import { withTranslation } from '../../i18n'
import Storage from '../../lib/Storage'

class BannerSlider extends React.Component {
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
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
		return (
			<div className="banner-slider">
        <div> <img src="/images/example/slider/banner3.jpg" className="img-fluid" /> </div>
        <div className="shadow-background"></div>
        {/* <Slider {...settings}>
          <div> <img src="/images/example/slider/banner1.jpg" className="img-fluid" /> </div>
          <div> <img src="/images/example/slider/banner2.jpg" className="img-fluid" /> </div>
          <div> <img src="/images/example/slider/banner3.jpg" className="img-fluid" /> </div>
          <div> <img src="/images/example/slider/banner4.jpg" className="img-fluid" /> </div>
          <div> <img src="/images/example/slider/banner5.jpg" className="img-fluid" /> </div>
        </Slider> */}
			</div>
		)
	}
}
export default withTranslation(['common'])(BannerSlider)