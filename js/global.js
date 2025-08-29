let mode = "Preset";
let titleset = "Default";
let rightset = "Follow the settings of the website";
let easing = "cubic-bezier(0.17, 0.9, 0.4, 0.99)";
let deftime = "Smart";
let defwid = 1024;
let defhei = 768;
let f1 = false; // “预设” 开关。
let f2 = false; // “演示” 开关。
let f3 = false; // "Version Lists" 开关。
let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let marks = `\n\t\r!@#$%^&*()_+-=[]{}|;':\\"',./<>?1234567890！？。“”《》、；‘’【】·~·。，、：；“”‘’《》（）…￥—` + "`";
let control_block = false; // 锁定 “选项”。
let inf_block = false; // 锁定 "Unread Messages"。
let control_moved = false; // “选项”。
let inf_moved = false; // "Unread Messages"。
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
let ls_notiunv = 0;
let ls_cgunv = 0;
let ls_failunv = 0;
let ls_warnunv = 0;
let ls_synchrunv = 0;
let warned = false;

function noun_s(num, noun) {
    sp1 = ["ch", "sh", "s", "x", "o"];
    sp2 = ["a", "e", "i", "o", "u"];
    sp3 = {
        "child": "children",
        "foot": "feet",
        "wife": "wives",
        "man": "men",
        "tooth": "teeth",
        "goose": "geese",
        "elf": "elves",
        "loaf": "loaves",
        "person": "people",
        "mouse": "mice",
        "leaf": "leaves",
        "life": "lives",
        "woman": "women",
        "knife": "knives",
        "sheep": "sheep",
        "deer": "deer",
        "ox": "oxen",
        "louse": "lice",
        "die": "dice",
        "cactus": "cacti",
        "fungus": "fungi",
        "nucleus": "nuclei",
        "syllabus": "syllabi",
        "crisis": "crises",
        "wolf": "wolves",
        "aircraft": "aircraft",
        "species": "species",
        "series": "series",
        "radius": "radii",
    };
    noun = String(noun);
    if (num % 1 === 0 && parseInt(num) === 1) return `${num} ${noun}`;
    else if (!isNaN(parseFloat(num))) {
        if (sp3.hasOwnProperty(noun)) return `${num} ${sp3[noun]}`;
        else if (sp1.some(e => noun.endsWith(e))) {
            switch (noun) {
                case "stomach":
                    return `${num} ${noun}s`;
                case "photo":
                    return `${num} ${noun}s`;
                default:
                    return `${num} ${noun}es`;
            }
        } else if (noun.endsWith("y")) {
            if (sp2.some(e => noun[noun.length - 2] === e)) {
                return `${num} ${noun}s`;
            } else {
                noun = noun.slice(0, -1);
                noun += "ies";
                return `${num} ${noun}`;
            }
        } else {
            return `${num} ${noun}s`;
        }
    } else {
        fail(`Unexpected value of num: ${num}.`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var start = performance.now();
    var font1 = new FontFace("basic", 'url("fonts/Basic Modification Regular.woff2")');
    var font2 = new FontFace("lan", 'url("fonts/Lanubu Light.woff2")');
    var font3 = new FontFace("arno", 'url("fonts/Arno Pro Regular.woff2")');
    font1.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`It took ${noun_s(((end - start) / 1000).toFixed(3), "second")} to load the font: Basic Modification Regular.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Font load error.");
                break;
            default:
                fail(`An unknown error occurred. (${error})`);
                break;
        }
    });
    font2.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`It took ${noun_s(((end - start) / 1000).toFixed(3), "second")} to load the font: Lanubu Light.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Font load error.");
                break;
            default:
                fail(`An unknown error occurred. (${error})`);
                break;
        }
    });
    font3.load().then(function (f) {
        var end = performance.now();
        document.fonts.add(f);
        cg(`It took ${noun_s(((end - start) / 1000).toFixed(3), "second")} to load the font: Arno Pro Regular.`);
    }).catch(function (error) {
        switch (error.name) {
            case "NetworkError":
                fail("Network error.");
                break;
            case "FontLoadError":
                fail("Font load error.");
                break;
            default:
                fail(`An unknown error occurred. (${error})`);
                break;
        }
    });

    const ctrl = document.querySelector(".control-pad");
    ctrl.style.animationName = "cc_ctrl";
    const inf = document.querySelector(".information-table");
    inf.style.animationName = "cc_inf";
    const main = document.getElementById("main");
    const menu = document.querySelector(".rightclick-menu");

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
            easing = "cubic-bezier(0.17, 0.9, 0.4, 0.99)";
            fail("Unexpected value of easing. It has been reset to cubic-bezier(0.17, 0.9, 0.4, 0.99).");
        } if (!isdefhei) {
            defhei = 768;
            fail("Unexpected value of defhei. It has been reset to 768.");
        } if (!isdefwid) {
            defwid = 1024;
            fail("Unexpected value of defwid. It has been reset to 1024.");
        } if (!isdeftime) {
            deftime = "Smart";
            fail("Unexpected value of deftime. It has been reset to Smart.");
        }
        width(".top");
        inf_cont();

        if (windows.length > 0 || rzwin.length > 0 || wzwin.length > 0) {
            if (isdimmed === false) ld(main, "75%");
        } else {
            ld(main, "100%");
            isdimmed = false;
        }

        if (rightset === "Follow the settings of the website") {
            document.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                menu.style.visibility = "visible";
                menu.style.transition = `opacity 0.3s, top 0.3s, left 0.3s ${easing}`;
                menu.style.opacity = "1";
                menu.style.left = `${e.pageX}px`;
                menu.style.top = `${e.pageY}px`;
            }, { once: true });

            document.addEventListener("click", function (e) {
                const menu = document.querySelector(".rightclick-menu");
                menu.style.opacity = "0";
                menu.addEventListener("transitionend", () => {
                    menu.style.visibility = "hidden";
                }, { once: true });
            }, { once: true });
        }
    }, 400);
    document.addEventListener("keydown", (event) => {
        if (event.altKey) noti('Move the mouse to the upper left corner to open "Options"; move it to the upper right corner to view "Unread Messages".')
    });
});