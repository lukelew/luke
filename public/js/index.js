var windowHeight = window.document.documentElement.clientHeight;
document.getElementById('stage1_intro').style.height = windowHeight + 'px';

var isSupportTouch = "ontouchend" in document ? true : false;
//桌面端添加作品事件

if(!isSupportTouch){
  var indexPic = {
      uniqueway_thumb: 'uniqueway-web.jpg',
      hemax_thumb: 'hemax-web.jpg',
      yidianer_thumb: 'yidianer-web.jpg',
      qr_thumb: 'qr-code.gif',
      patent_thumb: 'patent-web.jpg',
      zhiyi_thumb: 'zhiyi-web.jpg'
    }

  var toggleClass = function(e){
        if(e.hasClass('active')){
          e.removeClass('active')
        }
        else{
          e.addClass('active');
        }
      };

  $('#works_box').on('click','.pic_link',function(){
    var curId = $(this).closest('figure').attr('id');
    var curPic = new Image();
    curPic.src = '/images/' + indexPic[curId];

    toggleClass($('#loader'));
    curPic.onload = function(){
      var picH = curPic.height;
      if(picH >= 600){
        $('#pop_box').css({'height':'600px','margin':'-300px 0 0 -400px'});
      }
      else if(picH < 600){
        $('#pop_box').css({'height': picH +'px','margin': '-'+ picH/2 +'px 0 0 -400px'});        
      }
      
      $('#loader').removeClass('active');
      $('#big_pic').attr('src','/images/' + indexPic[curId]);
      toggleClass($('#pop_box'));
      toggleClass($('#overlay'));
    }
    

    
  });

  $('#overlay').on('click',function(){
    toggleClass($('#pop_box'));
    toggleClass($('#overlay'));
  });

  $(window).on('scroll', function() {
    var h = $(document).height();
    //显示回到顶部按钮
    if( $(document).scrollTop() > 300 ){
      $('#back_top').addClass('active')
    };
    if( $(document).scrollTop() <= 100 ){
      $('#back_top').removeClass('active')
    };
  });
  $('#back_top').on('click',function(){
    $('body').animate({'scrollTop':0},500);
  });
}
else{
  console.log('mobile')
}


var pre_load_img = {
        loading_pic: function (url, callback) {
            var testimg = new Image();
            testimg.src = url;
            testimg.onload = function () {
                callback.call(testimg);
            };
        },
        init: function (imgarr, callback) {
            var load_txt_dom = document.getElementById("load_txt");
            console.log(load_txt_dom)
            var pp_num = 0;
            var img_sum = imgarr.length;
            for (var i = 0; i < img_sum; i++) {
                pre_load_img.loading_pic(imgarr[i], function (testimg) {
                    pp_num++;
                    var percent = parseInt((pp_num / img_sum) * 100) + "%";

                    if (pp_num == img_sum) {
                        if (callback != null) {
                            callback();
                        }
                    }

                })
            }
        }
    }

    function add() {
        // console.log("所有图片资源加载完成");
        setTimeout(function () {
            loaded();
        }, 1000)
    }

    function loaded(){
      $('#loading').hide();
      $('#stage1_intro h2').addClass('active');
      $('.avatar').addClass('active');
      $('.intro').addClass('active');
    }

    var pic_arr = [
      '../images/avatar.png',
      '../images/avatar@2x.png',
    ];


    pre_load_img.init(pic_arr, add); //预加载
