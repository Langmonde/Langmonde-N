wx.config({
   　　debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
   　　appId: data.configMap.appId, // 必填，公众号的唯一标识
  　　 timestamp: data.configMap.timestamp, // 必填，生成签名的时间戳
   　　nonceStr: data.configMap.nonceStr, // 必填，生成签名的随机串
  　　 signature: data.configMap.signature,// 必填，签名，见附录1
     　jsApiList: [
         "onMenuShareTimeline",//分享朋友圈接口
         "onMenuShareAppMessage"//分享给朋友接口
     　] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
　　});
　　wx.ready(function(){
　　　　var audio = document.getElementById("audioPlay");
　　　　audio.play()
　　})