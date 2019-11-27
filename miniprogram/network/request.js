function getHomeData() {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'requestHomeData'
    }).then(resolve).catch(reject)
  });
}


module.exports = {
  getHomeData
}