const routes = module.exports = require('next-routes')()
 
routes
  .add('root', '/', 'index')
  .add('login', '/login', 'login')
  .add('movie', '/movie/:title', 'movie')
  .add('category', '/:category', 'category')


