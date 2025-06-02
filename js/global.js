let mode = "Preset";
let titleset = "Default";
let easing = "cubic-bezier(0.83, 0, 0.17, 1)";
let deftime = "Smart";
let defwid = 1024;
let defhei = 768;
let f1 = false;
let f2 = false;
let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let marks = `\n\t\r!@#$%^&*()_+-=[]{}|;':\\"',./<>?1234567890！？。“”《》、；‘’【】·~·。，、：；“”‘’《》（）…￥—` + "`";
let control_block = false; // 锁定 “选项”。
let inf_block = false; // 锁定 “未读信息”。
let control_moved = false; // “选项”。
let inf_moved = false; // “未读信息”。
let isdimmed = false;
let windows = []; // 十函数数组。
let rzwin = []; // rz() 数组。
let wzwin = []; // wz() 数组。
let noti_unv = [];
let cg_unv = [];
let fail_unv = [];
let warn_unv = [];
let synchr_unv = [];
let timer_unv = [];
let ls_notiunv = [];
let ls_cgunv = [];
let ls_failunv = [];
let ls_warnunv = [];
let ls_synchrunv = [];

document.addEventListener("DOMContentLoaded", function () {
    var start = performance.now();
    var font1 = new FontFace("basic", 'url("fonts/Basic Modification Regular.woff2")');
    var font2 = new FontFace("lan", 'url("fonts/Lanubu Light.woff2")');
    var font3 = new FontFace("arno", 'url("fonts/Arno Pro Regular.woff2")');
    font1.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`Successfully loaded font: Basic Modification Regular. Time taken: ${((end - start) / 1000).toFixed(3)} seconds.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Failed to load font.");
                break;
            default:
                fail(`Unknown error. (${error})`);
                break;
        }
    });
    font2.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`Successfully loaded font: Lanubu Light. Time taken: ${((end - start) / 1000).toFixed(3)} seconds.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Failed to load font.");
                break;
            default:
                fail(`Unknown error. (${error})`);
                break;
        }
    });
    font3.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`Successfully loaded font: Arno Pro Regular. Time taken: ${((end - start) / 1000).toFixed(3)} seconds.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Failed to load font.");
                break;
            default:
                fail(`Unknown error. (${error})`);
                break;
        }
    });

    const ctrl = document.querySelector(".control-pad");
    ctrl.style.animationName = "cc_ctrl";
    const inf = document.querySelector(".information-table");
    inf.style.animationName = "cc_inf";
    const main = document.getElementById("main");
    main.style.transition = "filter 0.2s ease-in-out";
    function width(name) {
        const el = document.querySelector(name);
        el.style.width = window.innerWidth + "px";
    }

    setInterval(() => {
        let arr = easing.match(/\d+(\.\d+)?/g);
        arr = (arr === null || arr === undefined ? [] : arr.map(Number));
        let iseasing = (easing.startsWith("cubic-bezier(") && easing.endsWith(")")
            && (easing.match(/,/g) || []).length === 3 && arr.length === 4
            && (arr[0] >= 0 && arr[0] <= 1 && arr[2] >= 0 && arr[2] <= 1))
            || (easing === "ease" || easing === "linear" || easing === "ease-in"
            || easing === "ease-out" || easing === "ease-in-out" || easing === "step-start" || easing === "step-end"
            || easing === "step" || easing === "");
        let isdefhei = (defhei > 300 && defhei % 1 === 0);
        let isdefwid = (defwid > 300 && defwid % 1 === 0);
        let isdeftime = (deftime >= 1250 || deftime === "Smart");

        if (!iseasing) {
            easing = "cubic-bezier(0.83, 0, 0.17, 1)";
            fail("The value of easing is not valid, it has been reset to cubic-bezier(0.83, 0, 0.17, 1).");
        } if (!isdefhei) {
            defhei = 768;
            fail("The value of defhei is not valid, it has been reset to 768.");
        } if (!isdefwid) {
            defwid = 1024;
            fail("The value of defwid is not valid, it has been reset to 1024.");
        } if (!isdeftime) {
            deftime = "Smart";
            fail("The value of deftime is not valid, it has been reset to Smart.");
        }
        width(".top");
        inf_cont();

        if (windows.length > 0 || rzwin.length > 0 || wzwin.length > 0) {
            if (isdimmed === false) {
                main.style.filter = "brightness(60%)";
            }
        } else {
            main.style.filter = "brightness(100%)";
            isdimmed = false;
        }
    }, 400);
    document.addEventListener("keydown", (event) => {
        if (event.altKey) noti("Move the mouse to the upper left corner to open the options; move to the upper right corner to check unread messages.")
    });
});