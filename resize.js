$(document).ready(function() {
   var x = $('#menu').width();console.log(typeof x);
    var y = $(window).width();
    var z= $('.graph').width();
    var q= $('#titleBox').width();
    $('#test').text('menubar '+x.toString() + 'window width ' +y+'graph: '+z +'titleBox ' + q);
    console.log("jquery is working")
    if (x<=832) {
        $('#menu').css('overflow-x','scroll');
//        $('#menu').css('overflow-y','hidden');
        $('li').css('margin','2px -2px');
        $('li').css('padding','4px');
        $('li').css('height','18px');
        $('li').css('top','-7px');
        $('li').css('border-radius','0px');
        $('ul').css('border-radius','3px 3px 3px 3px');
        $('ul').css('height','20px');
    }else {
            $('li').css('margin','0');
            $('#menu').css('overflow-x','visible')
            $('ul').css('height','20px');
        }
    $(window).on('resize', function() {
        var x = $('#menu').width();console.log(typeof x);
         var y = $(window).width();
        var z= $('.graph').width();
        var q= $('#titleBox').width();
        $('#test').text('menubar '+x.toString() + 'window width ' +y+'graph: '+z +'titleBox ' + q);
        $('#test').text(x.toString());
        if (x<=832) {
            $('#test').text('menubar '+x.toString() + 'window width ' +y+'graph: '+z +'titleBox ' + q);
//            $('#menu').css('overflow-x','hidden');
            $('li').css('margin','2px -2px');
            $('li').css('padding','4px');
            $('li').css('height','18px');
            $('li').css('top','-7px');
            $('li').css('border-radius','0px');
            $("li:nth-child(1)").css('border-radius','5px 0px 0px 0px');
            $("li:nth-child(9)").css('border-radius','0px 5px 0px 0px');
            $('ul').css('border-radius','3px');
            $('ul').css('height','20px');
            $('#menu').css('overflow-x','scroll');
            $('#menu').css('overflow-y','hidden');
        } else {
            $('#test').text('menubar '+x.toString() + 'window width ' +y+'graph: '+z +'titleBox ' + q);
            $('li').css('margin','0');
            $('#menu').css('overflow-x','visible');
            $('ul').css('height','20px');
            $('li').css('border-radius','3px');
        }
    })
});