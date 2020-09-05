
//获取应用实例
const app = getApp()
Page({

  data:{
 
  // text:"这是一个页面"
 
  imageSrc:'../../pages/img/ditu.jpg',
 
  imageSrc2:'../../pages/img/lq.jpg'
  ,

  imageSrc3:'../../pages/img/lq.jpg'
  },
  markers: [{
    iconPath: "../../img/marker_red.png",
    id: 0,
    latitude: 40.002607,
    longitude: 116.487847,
    width: 35,
    height: 45
  }],

  go2detail: function(param){
    wx.navigateTo({
 
      url: '/pages/lq/lq',
 
      })
  },
 })