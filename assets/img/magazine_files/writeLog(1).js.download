function setLogTarget(target) {
    // https://book.yunzhan365.com/serm  (user_id) /doyf  (item_id) /mobile/index.html
    // https://www.yunzhan365.com/check/yhvx/rkjw/mobile/index.html?from=singlemessage&isappinstalled=0  ==>忽略
    // https://www.yunzhan365.com/view/yhvx   (user_id) /rkjw  (item_id) /mobile/index.html?from=singlemessage&isappinstalled=0
    // https://worldmimi.sharedbook.cn/books/yxoz  (item_id) /mobile/index.html?maxwidthtosmallmode=0&maxheighttosmallmode=0
    // ***.worldmimi.sharedbook.cn/books/getuserinfo.js--->uLink
    // ***.yunzhan365.com/books/getuserinfo.js
    // ***.huaceshu.cn/books/getuserinfo.js
    // var userInfo ={"infinite_flow":0,"copyright":"","user_type":3,"user_ulink":"ezef"};
    if (window.location.href.match('file:')) return;
    var pathName;
    var startIndex = 1;
    var divideIndex1;
    var divideIndex2;
    var host = window.location.host;
    var pathName = window.location.pathname;
    target.item_type = "Book";

   if (host == 'online.fliphtml5.com' || host == 't.flipbuilder.com') {

        divideIndex1 = pathName.indexOf('/', 1);
        divideIndex2 = pathName.indexOf('/', divideIndex1 + 1);
        target.user_id = pathName.substring(startIndex, divideIndex1);
        target.item_id = pathName.substring(divideIndex1 + 1, divideIndex2);

        var _url = '//' + host + "/" + target.user_id + "/" + target.item_id
        limitedAccess(_url)

    } else  if (host.match('fliphtml5.com') || host.match('test.fliphtml5.com')) {

        if (host.match('fliphtml5.com/view')) return;
        startIndex = pathName.indexOf('/', 1) + 1;
        divideIndex1 = pathName.indexOf('/', startIndex);
        divideIndex2 = pathName.indexOf('/', divideIndex1 + 1);
        target.user_id = pathName.substring(startIndex, divideIndex1);
        target.item_id = pathName.substring(divideIndex1 + 1, divideIndex2);

        var _url = '//' + host + "/" + target.user_id + "/" + target.item_id
        limitedAccess(_url)

    } else {
        // https://book.yunzhan365.com/npep/hxla/bookinfo.js?_=1604646163852
        // https://bwf24.sharedbook.cn/books/hxla/bookinfo.js?_=1604646124547
        $.getScript('//' + host + "/books/getuserinfo.js", function (response, status) {
            if (status == 'success') {
                try {
                    if (userInfo) target.user_id = userInfo.user_ulink;
                    divideIndex1 = pathName.indexOf('/', 1);
                    divideIndex2 = pathName.indexOf('/', divideIndex1 + 1);
                    target.item_id = pathName.substring(divideIndex1 + 1, divideIndex2);
                    if (window.Logger.visit) window.Logger.visit();

                    var _url = '//' + host + "/books/" + target.item_id
                    limitedAccess(_url)
                } catch (err) {

                }
            } else {
                console.log(status);
            }
        });
    }
}

function limitedAccess(url) {
    // setTimeout(function () {
    //   $.getScript(url + "/bookinfo.js", function (response, status) {
    //     if (status == 'success') {
    //       slsLogger.limitedAccess()
    //     }
    //   })
    // }, 1000)
}





function setVisitParams(action) {
    action.screen_height = window.screen.height;
    action.screen_width = window.screen.width;

}

function onBookFlipPage(trigger_name, current_page, dest_page, stay_time) {
    if (current_page == dest_page) return;
    if (stay_time < 1000) return;

    stay_time = stay_time / 1000;
    if (stay_time > 3600) return;

    slsLogger.flipPage(trigger_name, current_page, dest_page, stay_time);
}

function onBookJumpLink(trigger_name, current_page, dest_url) {
    slsLogger.jumpLink(trigger_name, current_page, dest_url);
}

function onBookClickButton(current_page, button_name, button_caption) {
    slsLogger.clickButton(current_page, button_name, button_caption);
}


function onBookSearch(current_page, search_key, trigger_name) {
    if (search_key.trim() == '') return;
    slsLogger.search(current_page, search_key, trigger_name);
}

function onBookShare(current_page, dest_platform, shared_page) {
    slsLogger.share(current_page, dest_platform, shared_page);
}

function onBookPrint(current_page, printed_page, print_type) {
    slsLogger.print(current_page, printed_page, print_type);
}

function onBookPlayMedia(trigger_name, current_page, media_url, media_type, play_time) {
    play_time = play_time / 1000;

    if (isNaN(play_time)) return;
    if (play_time < 0) return;

    slsLogger.playMedia(trigger_name, current_page, media_url, media_type, play_time);
}

function onBookClickPageItem(current_page, item_name, left, top, width, height) {
    slsLogger.clickPageItem(item_name, current_page, left, top, width, height);
}

$(document).ready(function () {
    if (location.href.indexOf('file:') >= 0) return;

    BookEvent.bindEvent("flipPage", onBookFlipPage);
    BookEvent.bindEvent("jumpLink", onBookJumpLink);
    BookEvent.bindEvent("clickButton", onBookClickButton);
    BookEvent.bindEvent("search", onBookSearch);
    BookEvent.bindEvent("share", onBookShare);
    BookEvent.bindEvent("print", onBookPrint);
    BookEvent.bindEvent("playMedia", onBookPlayMedia);
    BookEvent.bindEvent("clickPageItem", onBookClickPageItem);
});


