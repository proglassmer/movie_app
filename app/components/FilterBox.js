import React from 'react'

// i18n
import { withTranslation } from '../../i18n'

// routes
import { Link } from '../routes'

class FilterBox extends React.Component {
	
	render() {
		const { error } = this.props
		const mock_list_category = [
			{
				name: 'NETFLIX',
				amount: 201
			},
			{
				name: 'TV ซีรี่ย์',
				amount: 401
			},
			{
				name: 'ครอบครัว',
				amount: 19
			},
			{
				name: 'จิตนิมิตแนววิทยาศาสตร์',
				amount: 3
			},
			{
				name: 'ดนตรี',
				amount: 12
			},
			{
				name: 'นิยายวิทยาศาสตร์',
				amount: 2
			},
			{
				name: 'บู๊',
				amount: 40
			},
			{
				name: 'ผจญภัย',
				amount: 18
			},
			{
				name: 'ประวัติศาสตร์',
				amount: 12
			},
			{
				name: 'ภาพยนตร์โทรทัศน์',
				amount: 30
			},
			{
				name: 'ลึกลับ',
				amount: 16
			},
			{
				name: 'สงคราม',
				amount: 80
			},
			{
				name: 'สารคดี',
				amount: 3
			},
			{
				name: 'สารคดี',
				amount: 3
			},
			{
				name: 'สารคดี',
				amount: 3
			},
			{
				name: 'สารคดี',
				amount: 3
			},
			{
				name: 'สารคดี',
				amount: 3
			}
		]
		console.log(mock_list_category)
		return (
			<div className="filter-box">
				<div className="category-type-box">
					<ul>
						<li> 
							<span> หมวดหมู่ </span> 
							<ul>
								{
									mock_list_category.map((data,key) => (
										<li key={key}> {data.name} </li>
									))
								}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default withTranslation(['common'])(FilterBox)