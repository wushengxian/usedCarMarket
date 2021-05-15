import request from '@/utils/request'

let tools = {
    jsonToParameter: function (data) {
        let params = new URLSearchParams()
        for (let obj in data) {
            if (isNaN(data[obj]) && !isNaN(Date.parse(data[obj]))) {
                params.append(obj, new Date(Date.parse(data[obj])))
            } else {
                params.append(obj, data[obj])
            }
        }
        return params
    },
    jsonToString: function (data) {
        let params = new URLSearchParams()
        for (let obj in data) {
            if (isNaN(data[obj]) && !isNaN(Date.parse(data[obj]))) {
                params.append(obj, new Date(Date.parse(data[obj])))
            } else {
                params.append(obj, data[obj])
            }
        }
        return params
    }
}

let ajax = {
    // post: function (url, data, fn) {
    //   request({
    //     url: url,
    //     method: 'post',
    //     data
    //   }).then((response) => {
    //     return fn(response)
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    // },
    //
    // get: function (url, data, fn) {
    //   // let p = tools.jsonToParameter(data);
    //   request({
    //     url: url,
    //     method: 'get',
    //     params: data
    //   }).then((response) => {
    //     return fn(response)
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    // },

    post: function (url, data, fn) {
    // const loading = Loading.service({ fullscreen: true });
        let params = new URLSearchParams()
        for (let obj in data) {
            params.append(obj, data[obj])
        }
        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: 'post',
                data: params
            })
                .then(response => {
                    // loading.close();
                    const result = response.data
                    if (response.code === -1) {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({ code: response.code, message: response.message })
                    } else {
                        resolve(result)
                    }
                })
                .catch(error => {
                    console.log(error)
                    if (error.message === 'Network Error') {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({ code: -1, msg: '网络错误' })
                    } else {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({ code: -1, msg: error.message })
                    }
                })
        })
    },

    get: function (url, data, fn) {
    // const loading = Loading.service({ fullscreen: true });
        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: 'get',
                params: data
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    // loading.close();
                    if (error.message === 'Network Error') {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({ code: -1, msg: '网络错误' })
                    } else {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({ code: -1, msg: error.message })
                    }
                })
        })
    }
}

export { ajax, tools }
