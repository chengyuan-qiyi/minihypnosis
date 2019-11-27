// miniprogram/pages/home/home.js
import request from '../../network/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleHomeData() {
    request.getHomeData().then(res=>{
      console.log(res)

    }).catch(err=>{
      console.log(err)
    })
  }

})