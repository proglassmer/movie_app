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

// routes
import { Router, Link } from '../routes'

// component
import DefaultModal from './modal/DefaultModal'

// i18n
import { i18n, withTranslation } from '../../i18n'
import Storage from '../../lib/Storage'

class MovieItem extends React.Component {
	static async getInitialProps({ store }) {
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
			<div className="movie-item">
				<div className="picture-movie">
					<img src={detail.img_url} className="img-fluid" />
				</div>
				<div className="detail-movie">
					<h3> { detail.title }</h3>
					<p> { detail.year } </p>
				</div>
			</div>
		)
	}
}
export default withTranslation(['common'])(MovieItem)