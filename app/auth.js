import Storage from '../lib/Storage'

export default class Auth {
	static getHeaders(auth = false) {
		const token = Storage.getCookieJSON('token')
		let headers = {}
		if(auth && token) {
			headers = {
				headers: {
					authorization: 'Bearer '+token.access_token
				}
			}
		}
		return headers
	}
}