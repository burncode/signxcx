import wepy from 'wepy'

// HTTP工具类
export default class http {
  static async request (method, url, data) {
    // 如果没有签名，先获取签名再发出请求
    if (!wepy.$instance.globalData.token) {
      const {code} = await wepy.login()
      // localhost:8009
      const {data} = await wepy.request({ url: 'https://signapi.readfollow.com/gettoken', data: { code: code } })
      wepy.$instance.globalData.token = data.token
    }

    const param = {
      url: url,
      method: method,
      data: data
    }

    const res = await wepy.request(param)

    if (this.isSuccess(res)) {
      return res.data
    } else {
      throw this.requestException(res)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode !== 200) {
      return false
    }
    return true
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  static get (url, data) {
    return this.request('GET', url, data)
  }

  static put (url, data) {
    return this.request('PUT', url, data)
  }

  static post (url, data) {
    return this.request('POST', url, data)
  }

  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
