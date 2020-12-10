function lrFun(type) {
    var oBg = $('<div class="bMask"></div>').appendTo($("body")),
        dialogEle = $('<div class="dialogWrap" style="position: absolute;"><div class="dialog-ele"><h4 class="d-s-head pr"><a href="javascript:void(0)" title="关闭" class="dClose icon16 pa">&nbsp;</a><span id="d-s-head-tab" class="d-s-head-tab"><a href="javascript:void(0)" class="current">登录</a><a href="javascript:void(0)" class="current">注册</a><a href="javascript:void(0)" title="关闭" class="dClose icon16 pa">&nbsp;</a><span id="d-s-head-tab" class="d-s-head-tab"><a href="javascript:void(0)" class="current">登录</a></span></h4><div class="of"><div id="lrEleWrap" class="mt10 mb20 ml20"></div></div></div></div>').appendTo($("body")),
        rlEle = [
            '<div id="d-s-head-cont" class="lrWrap">' +
            '<section class="dis e-login-ele">' +
            '<div class="mt10">' +
            '<p class="e-l-jy"></p>' +
            '</div>' +
            '<div>' +
            '<ol class="e-login-options">' +
            '<li>' +
            '<input id="u-email" type="text" placeholder="请输入学号"  name="" value="" onkeyup="$(this).next().html(\'\');">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '<li>' +
            '<input id="u-password" type="password" placeholder="请输入密码"  name="" value="" onkeyup="$(this).next().html(\'\');">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '</ol>' +
            /* '<section class="hLh30 of pl10"><span class="fr"><a href="/uc/register" class="c-master fsize12">没有账号？去注册→</a></span>'+*/
            '<section class="hLh30 of pl10">' +
            '<span class="fl"><label class="hand c-999 vam"></label></span></section>' +
            '<section class="mt20 tac">' +
            '<a href="javascript:void(0)" title="登 录" class="e-login-btn" onclick="dialogLogin(' + type + ')">登 录</a>' +
            '</section>' +
            '</div>' +
            '</section>' +
            '<section class="undis e-login-ele">' +
            '<div class="mt10">' +
            '<p class="e-l-jy"></p>' +
            '</div>' +
            '<div>' +
            '<ol class="e-login-options">' +
            '<li>' +
            '<input id="u-email-reg" type="text" placeholder="请输入登录邮箱"  name="" value="" onkeyup="$(this).next().html(\'\');">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '<li>' +
            '<input id="u-mobile-reg" type="text" placeholder="请输入用户手机号"  name="" value="" onkeyup="$(this).next().html(\'\');" maxlength="11">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '<li>' +
            '<input id="u-password-reg" type="password" placeholder="请输入密码"  name="" value="" onkeyup="$(this).next().html(\'\');">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '<li>' +
            '<input id="u-passwordre-reg" type="password" placeholder="请再输入一次密码"  name="" value="" onkeyup="$(this).next().html(\'\');">' +
            '<p class="lr-tip-wrap"></p>' +
            '</li>' +
            '<li>' +
            '<input id="u-randomcode-reg" class="fl" style="width: 100px;" type="text" placeholder="请输入验证码"  name="" value="" onkeyup="$(this).next().next().next().html(\'\');" maxlength="4">' +
            '<a href="javascript:void(0)" title="" class="vam ml10 disIb fl"><img onclick="this.src=\'/ran/random?random=\'+Math.random()" alt="验证码，点击图片更换" src="/ran/random" width="86" height="40"></a>' +
            '<span class="c-999 fl ml10">看不清<br><a href="javascript:void(0)" class="js-verify-refresh c-green" onclick="$(this).parent().prev().find(\'img\').click()">换一张</a></span>' +
            '<p class="lr-tip-wrap"><span class="c-red"></p>' +
            '<p class="clear"></p>' +
            '</li>' +
            '</ol>' +
            '<section class="mt20 tac">' +
            '<a href="javascript: void(0)" onclick="dialogRegister()" title="注 册" class="e-login-btn">注 册</a>' +
            '</section>' +
            '</div>' +
            '</section>' +
            '</div>'
        ];
    $("#lrEleWrap").html(rlEle[0]);
    placeholderFun(); //placeholder兼容IE方法
    var dTop = (parseInt(document.documentElement.clientHeight, 10) / 2) + (parseInt(document.documentElement.scrollTop || document.body.scrollTop, 10)),
        dH = dialogEle.height(),
        dW = dialogEle.width(),
        dHead = $(".dialog-ele>h4");
    dialogEle.css({
        "top": (dTop - (dH / 2)),
        "margin-left": -(dW / 2)
    });
    dHead.css({
        "width": (dW - "12")
    }); //ie7下兼容性;
    cardChange("#d-s-head-tab>a", "#d-s-head-cont>section", "current", function () {
        var dH = dialogEle.height();
        dialogEle.css({
            "top": (dTop - (dH / 2)),
            "margin-left": -(dW / 2)
        });
    });
    $(".dClose").bind("click", function () {
        dialogEle.remove();
        oBg.remove();
    });
    if (type == 2) {
        $("#d-s-head-tab").find("a:eq(1)").click();
    }
}