import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
    baseURL: process.env.API_ROOT // api的base_url
    // timeout: 10000 // 请求超时时间
    // transformRequest: data => qs.stringify(data) //
})
// request拦截器
request.interceptors.request.use(
    e => {
        e.params = e.params || {}
        e.headers = e.headers || {}
        // set 默认值
        return e
    },
    error => ({ status: 0, msg: error.message })
)

request.interceptors.response.use(
    response => {
    // console.log('response拦截器11111111111')
    // console.log(response)
        const resp = response.data
        if (response.status === 200) {
            if (resp.code === 0 && resp.msg === 'unLogin') {
                window.location.href = '/'
            } else if (resp.code !== 0) {
                Message({
                    showClose: true,
                    message: resp.message,
                    type: 'error',
                    duration: 2000
                })
                return Promise.reject(resp.message)
            } else {
                return resp
            }
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
            case 400:
                error.message = '请求错误(400)'
                break
            case 401:
                error.message = '未授权，请重新登录(401)'
                break
            case 403:
                error.message = '拒绝访问(403)'
                break
            case 404:
                error.message = '请求出错(404)'
                break
            case 408:
                error.message = '请求超时(408)'
                break
            case 500:
                error.message = '服务器错误(500)'
                break
            case 501:
                error.message = '服务未实现(501)'
                break
            case 502:
                error.message = '网络错误(502)'
                break
            case 503:
                error.message = '服务不可用(503)'
                break
            case 504:
                error.message = '网络超时(504)'
                break
            case 505:
                error.message = 'HTTP版本不受支持(505)'
                break
            default:
                error.message = `连接出错(${error.response.status})!`
            }
        } else {
            error.message = '连接服务器失败!'
        }
        Message({
            showClose: true,
            message: error.message,
            type: 'error',
            duration: 2000
        })
        return Promise.reject(error)
    }
)

export default request
