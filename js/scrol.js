$(function () {
    var $menu = $("#menu");
    $line = $("#line"),
    $indicator = true,
    $active = $menu.find(".active"),
    default_pos = $active.offset().left - $menu.offset().left,
    default_width = $active.outerWidth();

    $line.css({left: default_pos,width: default_width});    

    $("#menu li").hover(function () {
        if (this===$active.get(0)) return;
        var self = $(this);                
        var diff = self.offset().left - $menu.offset().left;
        $line.stop().animate({
            width: self.outerWidth(),
            left: diff
        }, 400);
    }, function () {
        if (this===$active.get(0)) return;
        $line.stop().animate({
            width: default_width,
            left: default_pos
        },400);
    });

});