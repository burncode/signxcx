/* eslint-disable padded-blocks */
import base from './base'
import wepy from 'wepy'

/**
 * 权限服务类
 */
export default class comm extends base {

  static async getUser(id) {
    const url = `${this.baseUrl}/api/user/${id}`
    return await this.get(url)
  }

  static async GetTodaySignUsers() {
    const url = `${this.baseUrl}/gettodaysignusers`
    return await this.get(url)
  }

  static async GetAppConfig() {
    const url = `${this.baseUrl}/api/getappconfig`
    return await this.get(url)
  }
}
