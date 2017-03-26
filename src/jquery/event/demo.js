/**
 * Created by handong on 2017/3/26.
 */
$(function () {
    $("span.next").click(function () {
        var $parent = $(this).parents("div.v_show");
        var $v_show = $parent.find("div.v_content_list");
        var $v_content = $parent.find("div.v_content");
    })
})