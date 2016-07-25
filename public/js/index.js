var windowHeight = window.document.documentElement.clientHeight;
document.getElementById('stage1_intro').style.height = windowHeight + 'px';

var isSupportTouch = "ontouchend" in document ? true : false;
//桌面端添加作品事件

if(!isSupportTouch){
  
  var single = document.getElementsByClassName('single_work');
}
else{
  console.log('mobile')
}

var app = angular.module('luke',[]);
app.controller('works',function($scope){
  $scope.indexPic = {
    uniqueway_thumb: 'uniqueway-web.jpg',
    hemax_thumb: 'hemax-web.jpg',
    yidianer_thumb: 'yidianer-web.jpg',
    patent_thumb: 'patent-web.jpg',
    zhiyi_thumb: 'zhiyi-web.jpg'
  }

  $scope.toggleClass = function(e){
    var myClassList = e.classList;
    if(myClassList.contains('active')){
      myClassList.remove('active')
    }
    else{
      myClassList.add('active');
    }
  };


  $scope.showBox = function(){
    var popBox = document.getElementById('pop_box');
    var overlay = document.getElementById('overlay');

    $scope.toggleClass(popBox);
    $scope.toggleClass(overlay);
  }

  $scope.insertPic = function(e){
    $scope.replacePic = $scope.indexPic[e];
  }
})
