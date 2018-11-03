import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onRoute() {
    var page = getCurrentPages();
    console.log('mixin onRoute', wepy, page[0].route, page[0].options)
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
