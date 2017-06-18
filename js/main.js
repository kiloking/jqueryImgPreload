var imgs = [
  'http://img.zcool.cn/community/focus/864b5941f1980000019e40078b9f.jpg@800w',
  'http://img.zcool.cn/community/focus/da205941f21d0000019e40f60ed7.jpg@800w',
  'http://img.zcool.cn/community/focus/8d645941f1fe0000019e403ce3bd.jpg@800w',
  'http://img.zcool.cn/community/focus/3f0a5941f1160000019e40313514.jpg@800w',
  'http://img.zcool.cn/community/focus/3dbc5943c25d00000151d8ef49bb.jpg@800w',
  'http://img.zcool.cn/community/focus/dab55943c1f900000151d856c2e7.jpg@800w',
  
];

var index = 0,
    len = imgs.length;
    count = 0,
    $progress = $('.progress');

$.each(imgs, function(i,src) {
  var imgObj = new Image();
  
  $(imgObj).on('load error',function(){
    $progress.html(Math.round((count + 1) / len * 100) + '%' );
    
    if (count >= len - 1) {
      $('.loading').hide();
      document.title = '1/' + len ;
    }
    
    count++;
  });
    imgObj.src = src;
});


$('.btn').on('click' , function(){
    if ('prev' === $(this).data('control') ) {
      index = Math.max(0, --index);
    } else {
      index = Math.min(len - 1 , ++index);
      
    }
    document.title = (index + 1) + '/' + len;
    $('#img').attr('src' , imgs[index]);
});