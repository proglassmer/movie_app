const suffixes = ['_REQUEST', '_SUCCESS', '_FAILURE']
const reduxTypes = [
	//login
	'LOGIN',
	'LOGOUT',

	// package
	'ADD_PACKAGE_COMPARE',
	'REMOVE_PACKAGE_COMPARE',
	'GET_PACKAGE_COMPARE',
]

let types = {}
reduxTypes.forEach((type) => {
	suffixes.forEach((suffix) => {
		types[type+suffix] = type+suffix
	})
})

export default types