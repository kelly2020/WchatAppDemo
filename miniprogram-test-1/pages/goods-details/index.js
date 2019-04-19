Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    goods:
      { pics: [{src: "/images/goods_1.png"}, {src: "/images/goods_2.png"}],
      media: [{ video: "" }, {video: ""}],
      contents:[
        { detail: "平台优惠多多" }, { detail:"可以通过砍价和团购的方式邀请更多人参与"}
      ],
      title:"1-3岁宝宝袜子",
      share_obj: { share_state: 1,share_jifen:5,share_xianjin:10},
      pirce:90,
      buy:18,
      comment:12},
      videoSrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    pageid:1,
    // 1 是砍价 2 是团购 3是普通
    kanjia_state:1,
    // 1 图片 2 视频 3 文字
    goods_type:3,
    buyNumber: 0,
    buyNumMin: 1,
    buyNumMax: 0,
    isShowPopup:true

    
  },
  bindchange(event){
    this.setData({
      current: event.detail.current
    })
  },
  showPopup(){
    this.setData({
      isShowPopup: false
    })
  },
  closePopup(){
    this.setData({
      isShowPopup:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pageid: options.pageid,
      kanjia_state: options.kanjia_state,
      goods_type: options.goods_type
    })
  },
  joinCart(){
    var goods={};
    goods.active=false;
    goods.title = "3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子";
    goods.price = 85;
    goods.left = 0;

    // 写入本地存储
    wx.setStorage({
      key: 'shopCarInfo',
      data: goods
    })
    wx.showToast({
      title: '加入购物车成功',
    })
    this.closePopup();
  },
  // 打开购物车页面
  openShopCart(){
      wx.reLaunch({
        url: '../shopcar/shopcar',
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
    return{
      title: '分享有赏',
      path: '/pages/goods-details/index?id=123'
    }
    
  }
})