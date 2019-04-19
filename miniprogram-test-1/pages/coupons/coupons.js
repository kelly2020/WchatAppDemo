var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    tabs:["可领券","已领券","已失效"],
    activeIndex:0,
    quans:[{},{}],
    datas_quan:1,
    datas:0
  },
  /**
   * event={"type":"tap","timeStamp":205094,"target":{"id":"","offsetLeft":138,"offsetTop":0,"dataset":{}},"currentTarget":{"id":"1","offsetLeft":138,"offsetTop":0,"dataset":{}},"detail":{"x":230,"y":29},"touches":[{"identifier":0,"pageX":230,"pageY":29,"clientX":230,"clientY":29,"force":1}],"changedTouches":[{"identifier":0,"pageX":230,"pageY":29,"clientX":230,"clientY":29,"force":1}]}
   */
  tabClick(event){
    //给下面的线添加水平移动动画
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
    // offsetLeft 是距离左边的偏移量
    animation.translateX(event.currentTarget.offsetLeft).step()

    this.setData({
      //id是给item设置的id 值 
      activeIndex: event.currentTarget.id,
      animationData: animation.export()
    })
    console.log("event=" + JSON.stringify(event))
    console.log("id=" + event.currentTarget.id)
    console.log("offsetLeft=" + event.currentTarget.offsetLeft)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
})