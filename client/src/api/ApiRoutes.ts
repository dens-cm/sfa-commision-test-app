const isProd = import.meta.env.VITE_PRODUCTION === 'true'
const url = isProd ? import.meta.env.VITE_PROD_URL : import.meta.env.VITE_DEV_URL

const routes = {
  login: `${url}/auth/login`,
  register: `${url}/auth/register`,
  refresh: `${url}/auth/refresh`,
  logout: `${url}/auth/logout`,
  accountstatus: `${url}/account/status`
}

export default { routes, url }