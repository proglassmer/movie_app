import Cookies from 'js-cookie'

export default class Storage {
	static setCookie(name, value) {
		return Cookies.set(name, value);
	}

	static getCookie(name) {
		return Cookies.get(name)
	}

	static removeCookie(name) {
		return Cookies.remove(name);
	}

	// static setCookieJSON(name, value) {
	// 	return Cookies.set(name, JSON.stringify(value));
	// }

	// static getCookieJSON(name) {
	// 	let data = null
	// 	if(process.browser) {
	// 		data = Cookies.get(name)
	// 	} else {
	// 		data = this.cookies ? this.cookies[name] : null
	// 	}
	// 	if(data) {
	// 		data = JSON.parse(data)
	// 	}
	// 	return data
	// }

	// static deleteCookie(name) {
	// 	return Cookies.remove(name)
	// }

	static setLocal(name, value) {
		localStorage.setItem(name, JSON.stringify(value))
	}

	static getLocal(name) {
		let data = localStorage.getItem(name)
		if(data != 'undefined') {
			return JSON.parse(data)	
		} else {
			return {}
		}
	}

	static deleteLocal(name) {
		localStorage.removeItem(name)
  }
  
  static setSession(name, value) {
		sessionStorage.setItem(name, JSON.stringify(value))
	}

	static getSession(name) {
		let data = sessionStorage.getItem(name)
		if(data != 'undefined') {
			return JSON.parse(data)	
		} else {
			return {}
		}
	}

	static deleteSession(name) {
		sessionStorage.removeItem(name)
	}
}