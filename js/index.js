/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/10.
 */

$(function(){
    /*��ں���*/
    /*�ֲ�ͼͼ*/
    /*
    * 1.�޷��ֲ�
    * 2.���Ӧ�ı�
    * 3.�����л�
    * */

    /*��ȡ��Ҫ������Ԫ��*/
    /*������*/
    var $banner = $('.sn_banner');
    var width = $banner.width();
    /*ͼƬ����*/
    var $image = $banner.find('ul:first');
    /*�����*/
    var $point = $banner.find('ul:eq(1)');
    /*���еĵ�*/
    var $points = $point.find('li');

    /*��������*/
    var animateFuc = function(){
        $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            /*�ж�����*/
            /*�޷����*/
            if(index >= 9){
                index = 1;
                /*˲��*/
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*����  index  1-8 */
            /*2.���Ӧ�ı�*/
            $points.removeClass('now').eq(index-1).addClass('now');

        });
    }

    /*1.�޷��ֲ� */
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        /*������ת����*/
        /*4������  ��Ҫ�ı䶯�������ԣ����� ����ִ�е�ʱ��  ����ִ�е�����   ����ִ����ɻص�  */
        animateFuc();
    },5000);


    /*3.�����л�*/

    /*��һ��  �һ�*/
    $image.on('swipeRight',function(){
        index --;
        /*�������л�*/
        animateFuc();

    });
    /*��һ��  ��*/
    $image.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });

});
