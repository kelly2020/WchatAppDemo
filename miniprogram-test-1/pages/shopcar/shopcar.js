Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcarData:{
      // goods: [{ active: false, title:"3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子" ,price:85,left:0
      // },
      
      //   {
      //     active: false, title: "夏天了宝宝可以出门玩，但是需要注意防晒", price: 30, left: 0
      //   },
      // ],
      goods:[],
      id:0,
      animationData:{},
      

    }
  },
  //点击商品item 并修改列表中字段的值
  selectTap(event){
    var index = event.currentTarget.dataset.index;
    console.log("index=" + index)

    var list = this.data.shopcarData.goods;
      list[parseInt(index)].active = !list[parseInt(index)].active;

    if (list[parseInt(index)].active){
      list[parseInt(index)].price = 100;
    } else{
      list[parseInt(index)].price = 40;
    }
      // 修改goods集合中的数据然后从新赋值
      this.setData({
        shopcarData: {
          goods: list
        }
      })
  },

  touchS(e){
    console.log("start=" + JSON.stringify(e))
    this.setData({
      // 手指按下的坐标
      startX: e.touches[0].clientX
    });
  },
  touchmove(e){
    console.log("move=" + JSON.stringify(e))
    var index = e.currentTarget.dataset.index;

    var list = this.data.shopcarData.goods;
  //手指移动的坐标
    var moveX = e.touches[0].clientX;
    var disX = this.data.startX - moveX;

    var left = "";
    if (disX == 0 || disX < 0) { //如果移动距离小于等于0，container位置不变
        list[parseInt(index)].left = "margin-left:0rpx";
    } else if (disX > 0) { //移动距离大于0，container left值等于手指移动距离

      list[parseInt(index)].left = "margin-left:-" + 120 + "rpx";
     
    }

    this.setData({
      shopcarData: {
        goods: list
      }
    })

  },
/**
 *  /**
   * array.splice(index,howmany,item1,.....,itemX)
参数 Values
参数	描述
index	必需。规定从何处添加/删除元素。
该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
howmany	必需。规定应该删除多少元素。必须是数字，但可以是 "0"。
如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
item1, ..., itemX	可选。要添加到数组的新元素
   */
 
  delItem(e){
    //获取当前item的索引
    var index = e.currentTarget.dataset.index;
    //获取item数据
    var list = this.data.shopcarData.goods;
  //删除当前索引的数据 第二个参数是删除数据个数  list.splice(2,0,"hahha")是第二个位置添加一个haha值 
    list.splice(index,1);

    this.setData({
      shopcarData:{
        goods:list
      }
    })

  },
  goIndex(){
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 获取加入购物车保存的数据 页面初始化的时候进行显示
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key:"shopCarInfo",
      success(res){
        console.log("data===" + JSON.stringify(res.data))
        var list = that.data.shopcarData.goods;
        list.push(res.data);
        that.setData({
          shopcarData: {
            goods:list
          }
        })
      }
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
    console.log("lalalal")
    // 下拉刷新的时候添加新数据到集合
    var obj = { active: false, title: "3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子3-5岁宝宝的可爱袜子", price: 85, left: 0}
    var list = this.data.shopcarData.goods;
    // 集合末尾添加数据
    list.push(obj);

    this.setData({
      shopcarData:{
        goods:list
      }
    })

    
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