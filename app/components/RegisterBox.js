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

class RegisterBox extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
  }

	render() {
    const _token = Storage.getCookie('_token')
    const mock_auth = true
		const { t, i18n } = this.props
		const { isOpenMenu } = this.state
		return (
			<div className="RegisterBox">
			</div>
		)
	}
}
export default withTranslation(['common'])(RegisterBox)