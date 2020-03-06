import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
			isOpenMenu: false,
			size_screen: '',
			isHeaderDark: false,
			isOpenToggleCategory: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.openModal = this.openModal.bind(this)
		this.switchModal = this.switchModal.bind(this)
		this.toggleSettingUser = this.toggleSettingUser.bind(this)
		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
		this.toggleCategory = this.toggleCategory.bind(this)
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.updateHeaderDark.bind(this));
		// window.addEventListener("resize", this.resize.bind(this));
		// this.resize();
		this.updateHeaderDark();
	}

	updateHeaderDark() {
		if(window.scrollY > 150) {
			this.setState({
				isHeaderDark: true
			})
		} else {
			this.setState({
				isHeaderDark: false
			})
		}
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.updateHeaderDark);
	}

	// resize() {
	// 	this.setState({
	// 		size_screen: window.innerWidth
	// 	})
	// 		// this.setState({hideNav: window.innerWidth <= 760});
	// }

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

	toggleCategory() {
		this.setState({
			isOpenToggleCategory: !this.state.isOpenToggleCategory
		})
	}

	render() {
    const _token = Storage.getCookie('_token')
    const mock_auth = true
		const { t, i18n } = this.props
		const { isOpenMenu, isHeaderDark, isOpenToggleCategory } = this.state
		const path = Router.router && Router.router.pathname
		return (
			<div className={"header " + ((path == "/") ? 'for-home ' : 'for-other ') + ((isHeaderDark) ? 'header-dark' : '')}>
				<nav>
					<div className="logo">
						{/* <p> MOVIE WEB APP </p> */}
					</div>
					<ul className="menu">
						<li className="menu-category">
							<Dropdown isOpen={isOpenToggleCategory} toggle={this.toggleCategory}>
								<DropdownToggle caret>
									หมวดหมู่
								</DropdownToggle>
								<DropdownMenu>
									<div className="row">
										<div className="col-12 col-sm-4">
											<Link route="category" params={{category: 'action'}}> หนังแอคชั่น </Link>
											<Link route="category" params={{category: 'adventure'}}> ผจญภัย </Link>
											<Link route="category" params={{category: 'animation'}}> แอนนิเมชั่น </Link>
											<Link route="category" params={{category: 'horror'}}> หนังสยองขวัญ </Link>
											<Link route="category" params={{category: 'romantic'}}> โรแมนติก </Link>
											<Link route="category" params={{category: 'thriller'}}> ระทึกขวัญ </Link>
										</div>
										<div className="col-12 col-sm-4">
											<Link route="category" params={{category: 'Biography'}}> ชีวิตจริง </Link>
											<Link route="category" params={{category: 'crime'}}> อาชญากรรม </Link>
											<Link route="category" params={{category: 'documentary'}}> สารคดี </Link>
											<Link route="category" params={{category: 'musical'}}> เพลงดนตรี </Link>
											<Link route="category" params={{category: 'sci-fi'}}> วิทยาศาสตร์ </Link>
											<Link route="category" params={{category: 'war'}}> สงคราม </Link>
										</div>
										<div className="col-12 col-sm-4">
											<Link route="category" params={{category: 'drama'}}> หนังดราม่า </Link>
											<Link route="category" params={{category: 'family'}}> ครอบครัว </Link>
											<Link route="category" params={{category: 'fantasy'}}> แฟนตาซี </Link>
											<Link route="category" params={{category: 'mystery'}}> ลึกลับซ่อนเงื่อน </Link>
											<Link route="category" params={{category: 'sport'}}> กีฬา </Link>
											<Link route="category" params={{category: 'western'}}> คาวบอย </Link>
										</div>
									</div>
								</DropdownMenu>
							</Dropdown>
						</li>
						<li>
							<Link route="root">
								<a> หน้าแรก </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'cartoon'}}>
								<a> การ์ตูน </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'หนังฝรั่ง'}}>
								<a> หนังฝรั่ง </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'หนังไทย'}}>
								<a> หนังไทย </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'หนังจีน'}}>
								<a> หนังจีน </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'หนังญี่ปุ่น'}}>
								<a> หนังญี่ปุ่น </a>
							</Link>
						</li>
						<li>
							<Link route="category" params={{category: 'หนังเกาหลี'}}>
								<a> หนังเกาหลี </a>
							</Link>
						</li>
					</ul>
					<div className="search-box">
						<input type="text" className="textbox" placeholder="Search" />
						<input title="Search" value="" type="submit" className="button"/>
					</div>
				</nav>
			</div>
		)
	}
}
export default withTranslation(['common'])(Header)