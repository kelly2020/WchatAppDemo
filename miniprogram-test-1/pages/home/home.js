Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed:false,
    clearShowed:true,
    inputValue:"",
    noticeList:[
      { title: "商城开张，优惠多多，请点击进行查看 内容特别多的时候在哪情况",
       detail:"商城"},
      { title: "定制自己的小程序", detail: "商城"},
      { title: "更多咨询请查看", detail: "商城"}
    ],
    goods:[
      {name:"全部"},
      { name: "裤装"},
      { name: "特价装"},
      { name: "上衣"},
      { name: "裙装"},
      { name: "外套"}
    ],
    banners:[
      {src:"/images/banner1.png"},
      { src: "/images/banner2.png"},
      { src: "/images/banner3.png"}
    ],
    swiperCurrent:0,
    recommends:[
      {src:"/images/goods_1.png",goods_title:"api工厂一年会员",price:198,old_price:200},
      { src: "/images/goods_2.png", goods_title: "wifi 热敏打印机专门提供打印功能", price: 200, old_price: 400}
    ],
    kanjiaDatas:[
      { src: "/images/goods_1.png", title: "api工厂一年vip 会员可以去体验周末去", desc:"享受vip 尊享服务 更加快速的使用高速通道然后，再次进入水吗事件肯呢个会受打击了发",
      price:30,ori_pirce:40},
      { src: "/images/goods_2.png", title: "1-3岁儿童米娜袜子", desc: "优惠的购物体验快来加入吧", price: 50, ori_pirce: 90}
    ],
    tuanDatas:[
      {
        src: "/images/banner3.png", title: "10-11岁儿童的袜子djfafkdafkdlsjfkldsjfklsajfklsjafkldjfkdajfkdfklafkdlafkldjkfldskalfdslfjkl", desc: "尼多熊袜子适合冬天",
        price: 80, ori_pirce: 120
      },
      {
        src: "/images/banner2.png", title: "夏凉被和凉席", desc: "适合宝宝的夏季必备品",
        price: 120, ori_pirce: 300
      }
    ],
    goods_list:[
      {
        src: "/images/banner1.png", title: "夏凉被和凉席宝宝夏天可以睡个安稳觉",
        price: 120, ori_pirce: 300
      },
      {
        src: "/images/banner2.png", title: "夏凉被和凉席",
        price: 120, ori_pirce: 500
      },
      {
        src: "/images/banner2.png", title: "夏凉被和凉席",
        price: 120, ori_pirce: 60
      },
      {
        src: "/images/banner3.png", title: "夏凉被和凉席",
        price: 120, ori_pirce: 100
      },
      {
        src: "/images/banner2.png", title: "夏凉被和凉席",
        price: 120, ori_pirce: 200
      }, {
        src: "/images/banner1.png", title: "夏凉被和凉席",
        price: 120, ori_pirce: 300
      }
    ],
    activeIndex:0
    
  },
  // 商品详情团购
  goodsDetailTuan(){
    wx.navigateTo({
      url: '../goods-details/index?pageid=2&kanjia_state=2&goods_type=1',
    })

  },
  //商品砍价
  goodsDetailKan(){
    wx.navigateTo({
      url: '../goods-details/index?pageid=1&kanjia_state=1&goods_type=2',
    })
  },
  // 商品详情列表
  goodsDetailList(){
    wx.navigateTo({
      url: '../goods-details/index?pageid=3&kanjia_state=3&goods_type=3',
    })
  },
  // 点击每个tab的时候获取当前被点击tab的id 值
  clicktab(event){
    this.setData({
      activeIndex: event.currentTarget.id
    })
  },

  // 搜索输入事件
  bindInput(event){
    this.setData({
      inputValue: event.detail.value
    })
  },
 
  searchClick(){
    this.setData({
      inputShowed: true

    })
  },
  cancelInput(){
    this.setData({
      inputShowed: false

    })
  },
  clearInput(){
    this.setData({
      inputValue: ""

    })
  },
 
  bannerChange(event){
    console.log("current=" + event.detail.current)
    this.setData({
      swiperCurrent: event.detail.current
    })
  },

  clickTap(event){
    wx.navigateTo({
      url: '../coupons/coupons',
    })
  },
  /**
   * 生命周期函数--监听页面加载 options 携带上个页面的参数
   */
  onLoad: function (options) {
    // console.log("name=" + options.name)
    // console.log("age=" + options.age)
    // console.log("sex=" + options.sex)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '天使童装',
    })
    
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