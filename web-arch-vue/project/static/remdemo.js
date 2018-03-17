(function (win,$) {
    'use strict';
    let Options = function () {
        this.VERSION = "2.8.0";
        this.timer = null;
        this.clicktime = 0;
    }
    // 初始化
    Options.prototype.initialize = function () {
        console.log(cookieUtil)
      // if (navigator.cookieEnabled){
      //   console.log("浏览器允许使用Cookie");
      //   }else{
      //   console.log("浏览器禁用Cookie");
      // }
    }
    // 轮播
    // 自动轮播
    Options.prototype.automatic = function () {
        let that = this;
        let count = $(".banner>.banner-box>img").length;
        $(".banner>.banner-box").css({"width": count * 19.2 + "rem"});
        this.timer = setInterval(function () {
            $(".banner>.banner-box").css({"margin-left": "-19.2rem", "transition": "margin-left linear 1s"})
            setTimeout(function () {
                $(".banner>.banner-box>img").eq(0).appendTo(".banner>.banner-box")
                $(".banner>.banner-box").css({"margin-left": "0px", "transition": "margin-left ease 0s"})
            }, 1100)
            that.clicktime = Date.parse(new Date());
        }, 2900)
    }
    Options.prototype.againAutomatic = function () {
        let that = this;
        setInterval(function () {
            if (Date.parse(new Date()) - that.clicktime > 4000) {
                that.automatic();
            }
        }, 4000)
    }
    // 点击向上一张轮播
    Options.prototype.pre = function () {
        let that = this;
        $(document).on("click", ".pre", function () {
            let pretime = Date.parse(new Date());
            let time = pretime - that.clicktime;
            if (time >= 1000) {
                that.clicktime = pretime;
                clearInterval(that.timer)
                that.timer = null;
                $(".banner>.banner-box").css({"margin-left": "-19.2rem", "transition": "margin-left linear 1s"})
                setTimeout(function () {
                    $(".banner>.banner-box>img").eq(0).appendTo(".banner>.banner-box")
                    $(".banner>.banner-box").css({"margin-left": "0px", "transition": "margin-left ease 0s"})
                }, 1000)
            }
        })
    }
    //点击向下一张轮播
    Options.prototype.next = function () {
        let that = this;
        $(document).on("click", ".next", function () {
            let pretime = Date.parse(new Date());
            let time = pretime - that.clicktime;
            if (time >= 1000) {
                that.clicktime = pretime;
                clearInterval(that.timer);
                that.timer = null;
                $(".banner>.banner-box>img").last().prependTo(".banner>.banner-box")
                $(".banner>.banner-box").css({"margin-left": "-19.2rem", "transition": "margin-left linear 0s"})
                setTimeout(function () {
                    $(".banner>.banner-box").css({"margin-left": "0px", "transition": "margin-left linear 1s"})
                }, 0)
            }
        })
    }
    //下拉菜单
    Options.prototype.setMenu = function () {
        win.onresize = function(){
          // console.log(111)
        }
    }
    Options.prototype.dropdownMenu = function () {
        let that=this;
        $(".dropdown").click(function () {
            let menuheight = $(".dropdown-menu-nav").css("height").replace("px", "");
                let winheight = $("html").css("height").replace("px", "") - $("header").css("height").replace("px", "");
                if (menuheight > 0) {
                    $(".dropdown-menu-nav").addClass("open");
                    $(".open").css({
                        "height": "0",
                        "transition": "height linear 0.5s"
                    })
                } else {
                    $(".dropdown-menu-nav").addClass("open");
                    $(".open").css({
                        "height": winheight + "px",
                        "transition": "height linear 0.5s"
                    })
                }
        })
    }
    Options.prototype.init = function () {
        this.dropdownMenu();
        this.setMenu();
        this.initialize();
        this.automatic();
        this.againAutomatic();
        this.pre();
        this.next();
    }
    $.Options = new Options();
    $.Options.Constructor = Options;

})(window,window.jQuery)
$(function () {
    'use strict';
    $.Options.init();
});
