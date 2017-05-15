/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/10.
 */

$(function(){
    /*入口函数*/
    /*轮播图图*/
    /*
    * 1.无缝轮播
    * 2.点对应改变
    * 3.手势切换
    * */

    /*获取需要操作的元素*/
    /*大容器*/
    var $banner = $('.sn_banner');
    var width = $banner.width();
    /*图片容器*/
    var $image = $banner.find('ul:first');
    /*点盒子*/
    var $point = $banner.find('ul:eq(1)');
    /*所有的点*/
    var $points = $point.find('li');

    /*动画方法*/
    var animateFuc = function(){
        $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            /*判断索引*/
            /*无缝滚动*/
            if(index >= 9){
                index = 1;
                /*瞬间*/
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*正常  index  1-8 */
            /*2.点对应改变*/
            $points.removeClass('now').eq(index-1).addClass('now');

        });
    }

    /*1.无缝轮播 */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*动画的转起来*/
        /*4个参数  需要改变动画的属性（对象） 动画执行的时间  动画执行的数据   动画执行完成回调  */
        animateFuc();
    },5000);


    /*3.手势切换*/

    /*上一张  右滑*/
    $image.on('swipeRight',function(){
        index --;
        /*动画的切换*/
        animateFuc();

    });
    /*下一张  左滑*/
    $image.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });

});
