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

class Header extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		
		this.state = {
			isToggleModal: false,
			modalType: "",
			isSettingDropdown: false,
			isOpenMenu: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.openModal = this.openModal.bind(this)
		this.switchModal = this.switchModal.bind(this)
		this.toggleSettingUser = this.toggleSettingUser.bind(this)
		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
  }

	openMenu() {
		this.setState({
			isOpenMenu: !this.state.isOpenMenu,
    })
	}

	closeMenu() {
		this.setState({
			isOpenMenu: false,
    })
	}

	toggleModal() {
		this.setState({
			isToggleModal: !this.state.isToggleModal,
    })
	}

	switchModal(type) {
		this.setState({
			isToggleModal: false,
    }, () => {
			this.setState({
				isToggleModal: true,
				modalType: type
			})
		})
	}

	openModal(event) {
		const type = event.currentTarget.dataset.type;
		this.setState({
			isToggleModal: true,
			modalType: type
		})
	}

	toggleSettingUser() {
		this.setState({
			isSettingDropdown: !this.state.isSettingDropdown,
    })
	}

	clickLinkMenu(menu) {
		Router.pushRoute(menu)
	}

	logoutOnClick() {
		Storage.removeCookie("_token")
	}

	_renderAvatarUser() {
		return (
			<Dropdown className="setting-dropdowm" isOpen={this.state.isSettingDropdown} toggle={this.toggleSettingUser}>
				<DropdownToggle>
					<div className="avatar-icon"></div>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={() => this.clickLinkMenu('setting_profile')}> ข้อมูลส่วนตัว </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('setting_insurance')}> กรมธรรม์ </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('root')}> ออร์เดอร์ </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('root')}> ตั้งค่า </DropdownItem>
					<DropdownItem onClick={this.logoutOnClick}> ออกจากระบบ </DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	render() {
    const _token = Storage.getCookie('_token')
    const mock_auth = true
		const { t, i18n } = this.props
		const { isOpenMenu } = this.state
		return (
			<div className="header">
				<nav>
					<div className="logo">
						<p> MOVIE WEB APP </p>
					</div>
					<ul className="menu">
						<li>
							<Link route="root">
								<a> หน้าแรก </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> การ์ตูน </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> หนังฝรั่ง </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> หนังไทย </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> หนังจีน </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> หนังญี่ปุ่น </a>
							</Link>
						</li>
						<li>
							<Link route="root">
								<a> หนังเกาหลี </a>
							</Link>
						</li>
					</ul>
					<div className="search-box">
						<input type="text" class="textbox" placeholder="Search" />
						<input title="Search" value="" type="submit" class="button"/>
					</div>
				</nav>
			</div>
		)
	}
}
export default withTranslation(['common'])(Header)