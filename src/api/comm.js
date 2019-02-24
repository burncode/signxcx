/* eslint-disable padded-blocks */
import base from './base'

/**
 * 权限服务类
 */
export default class comm extends base {

  static async getUser(id) {
    const url = `${this.baseUrl}/api/user/${id}`
    return await this.get(url)
  }

  // 获取今天签到用户
  static async GetAllProject() {
    const url = `${this.baseUrl}/project`
    return await this.get(url)
  }

  // 获取今天签到用户
  static async GetTodaySignUsers(page) {
    const url = `${this.baseUrl}/gettodaysignusers`
    return await this.get(url, {page: page})
  }

  static async GetAppConfig() {
    const url = `${this.baseUrl}/api/getappconfig`
    return await this.get(url)
  }

  // 获得签到配置
  static async GetSignConfig() {
    const url = `${this.baseUrl}/api/getsignconfig`
    return await this.get(url)
  }
}
