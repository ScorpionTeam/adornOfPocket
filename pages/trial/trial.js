// pages/trial/trial.js
var netWork = require('../../common/requestTool/request.js')
Page(Object.assign({}, netWork, {

  /**
   * 页面的初始数据
   */
  data: {
    tourGoodInfo: [],
    imgUrl: getApp().globalData.baseImgUrl,
    useUrl: 'mall/wx/free/findFreeList',
    lastPage: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.showLoading({
      title: '加载中',
    })
    let params = {}
    params.pageSize = 10
    params.pageNo = 1
    netWork.GET({
      url: that.data.useUrl,
      params: params,
      success: res => {
        wx.hideLoading()
        console.log(res)
        let arr = res.data.list
        if (arr) {
          that.setData({
            tourGoodInfo: arr
          })
        }
      },
      fail: err => {
        console.log(err)
        wx.hideLoading()
      }
    })
  },
  buyAction(e) {
    let goodId = e.currentTarget.id
    console.log("点击购买商品! id=" + goodId)
    wx.navigateTo({
      url: '/pages/good/good?goodId=' + goodId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}))