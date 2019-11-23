// pages/hypnosis/hypnosis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    score:82,
    counter:0,
    title: '哈哈哈',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleSwitchShow() {
    this.setData({
      isShow : !this.data.isShow
    })
  },
  handleTap() {
    console.log('handleTap')
  },

  handleTouchStart() {
    console.log('handleTouchStart')

  },
  handleTouchMove() {
    console.log('handleTouchMove')

  },
  handleIncrement() {
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleTabClick(event) {
    console.log(event.detail.title)
  }
})