import http from '../util/http'

// 登录
export function userLogin(username, password) {
  let url= `/api/auth/jwt/token`
  let data = {
    username,
    password
  };
  return http.post(url,data)
}


//获取用户信息
export function userinfo(token) {
  return http({
      url: '/api/admin/user/front/info',
      method: 'GET',
      params: {
        token
      },
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
  })
}