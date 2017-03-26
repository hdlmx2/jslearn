/**
 * Created by handong on 2017/3/26.
 */
$(function () {
    $("span.next").click(function () {
        var $parent = $(this).parents("div.v_show");
        var $v_show = $parent.find("div.v_content_list");
        var $v_content = $parent.find("div.v_content");
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);

        if (!$v_show.is(":animated")) {
            $v_show.animate({left: "0px"}, "normal");
        } else {
            $v_show.animate({left: "-=" + v_width}, "normal");
        }
    })
})