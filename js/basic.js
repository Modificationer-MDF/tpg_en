function ld(el, percent) { // 控制亮度。
    el.style.transition = "filter 0.2s ease-in-out";
    el.style.filter = `brightness(${percent})`;
}

function xzsj() { // 现在时间。
    const t = new Date();
    const y = t.getFullYear();
    const m = t.getMonth() + 1;
    const d = t.getDate();
    const h = t.getHours();
    const mi = t.getMinutes();
    const s = t.getSeconds();
    const time = `${y}.${m}/${d} ${h}:${mi}:${s}`;
    return time;
}

function width(name) {
    const el = document.querySelector(name);
    el.style.width = window.innerWidth + "px";
}

function hqgd(str, cl, kind) { // 获取元素高度。
    let el1 = document.createElement(kind);
    el1.className = cl;
    el1.innerHTML = str;
    el1.style.position = "absolute";
    el1.style.transform = "translate(9999px, 9999px)";
    el1.style.visibility = "hidden";
    document.body.appendChild(el1);
    let ls_gd = el1.offsetHeight;
    document.body.removeChild(el1);
    return ls_gd + "px";
}

function hqkd(str, cl, kind) { // 获取元素宽度。
    let el2 = document.createElement(kind);
    el2.className = cl;
    el2.innerHTML = str;
    el2.style.position = "absolute";
    el2.style.transform = "translate(-9999px, -9999px)";
    el2.style.visibility = "hidden";
    document.body.appendChild(el2);
    let ls_kd = el2.offsetWidth;
    document.body.removeChild(el2);
    return ls_kd + "px";
}

function chara_sort(str) {
    let zh = 0; // 中文字符数。
    let en = 0; // 英文字符数。
    let ma = 0; // 标点符号数。（包括全角符号和半角符号）
    for (var i = 0; i <= str.length - 1; i++) {
        if (alphabets.includes(str[i])) {
            en++;
        } else if (marks.includes(str[i])) {
            ma++;
        } else {
            zh++;
        }
    }
    return [zh, en, ma];
}

function smarttime(str) {
    str = String(str);
    str = str.replace(/\s+/g, "");

    if (deftime === "Smart") {
        let [zh, en, ma] = chara_sort(str);
        let time = zh * 165 + en * 95 + ma * 50;
        return (time > 1250 ? time : 1250);
    } else {
        return deftime;
    }
}

function openctrl() {
    const ctrl = document.querySelector(".control-pad");
    ctrl.style.animation = `jr_ctrl 0.55s forwards ${easing}`;
    control_block = true;
    noti('"Options" has been opened and locked.');
}

function openinf() {
    const inf = document.querySelector(".information-table");
    inf.style.animation = `jr_inf 0.55s forwards ${easing}`;
    inf_block = true;
    noti('"Unread Messages" has been opened and locked.');
}

function closectrl() {
    const ctrl = document.querySelector(".control-pad");
    ctrl.style.animation = `cc_ctrl 0.55s forwards ${easing}`;
    control_block = false;
    noti('"Options" has been closed and unlocked.');
}

function closeinf() {
    const inf = document.querySelector(".information-table");
    inf.style.animation = `cc_inf 0.55s forwards ${easing}`;
    inf_block = false;
    noti('"Unread Messages" has been closed and unlocked.');
}

function fn0() {
    if (mode === "Preset" && f2 === false) fn1();
    else if (mode === "Play" && f1 === false) fn2();
}

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector(".head1"); // h1 标签。
    const h2 = document.querySelector(".head2"); // h2 标签。
    const div = document.querySelector(".top"); // 包含 h1 和 h2 的 div 标签。
    const head = document.querySelector(".head"); // The Play Games 版本标签。
    const f1 = document.querySelector(".fn1"); // “函数展示”。
    const f3 = document.querySelector(".fn3"); // "Version Lists"。

    h1.style.display = "block";
    h1.style.animation = "jr_head1 1.4s forwards cubic-bezier(0.33, 1, 0.68, 1)";
    h1.addEventListener("animationend", (e) => { // The Play Games
        if (e.animationName === "jr_head1") {
            h2.style.display = "block";
            h2.style.animation = "jr_head2 1.4s forwards cubic-bezier(0.33, 1, 0.68, 1)";
        }
    });
    h2.addEventListener("animationend", (e) => { // Let the game-playing easier.
        if (e.animationName === "jr_head2") {
            div.style.animation = "jr_top 0.55s forwards cubic-bezier(0.33, 1, 0.68, 1)";
            head.style.animation = "jr_head 0.55s forwards cubic-bezier(0.33, 1, 0.68, 1)";
        }
    });
    div.addEventListener("animationend", (e) => {
        if (e.animationName === "jr_top") {
            f1.style.animation = "jr1_fn1 0.55s forwards cubic-bezier(0.33, 1, 0.68, 1)"; // “函数展示” 进入动画。
            f3.style.animation = "jr1_fn3 0.55s forwards cubic-bezier(0.33, 1, 0.68, 1)"; // "Version Lists" 进入动画。
        }
    });

    const ctrl = document.querySelector(".control-pad");
    control();

    document.addEventListener("mousemove", function (event) {
        let width = ctrl.getBoundingClientRect().width;
        if (event.clientX <= 50 && event.clientY <= 50 && control_moved === false) { // 移动到左上角。
            ctrl.style.animation = `jr_ctrl 0.55s forwards ${easing}`;
            if (control_block === false) control_moved = true;
        } else if (event.clientX > width && control_moved === true) {
            ctrl.style.animation = `cc_ctrl 0.55s forwards ${easing}`;
            control_moved = false;
        }
    });

    const inf = document.querySelector(".information-table");
    inf_ui();

    document.addEventListener("mousemove", function (event) {
        let rect = inf.getBoundingClientRect().width; // 获取 inf 元素的宽度。

        if (event.clientX >= window.innerWidth - 50 && event.clientY <= 50 && inf_moved === false) { // 移动到右上角。
            inf.style.animation = `jr_inf 0.55s forwards ${easing}`;
            if (inf_block === false) inf_moved = true;
        } else if (event.clientX < window.innerWidth - rect && inf_moved === true) {
            inf.style.animation = `cc_inf 0.55s forwards ${easing}`;
            inf_moved = false;
        }
    });
});

function fn1() { // "Function Demos" “预设” 模式。
    f1 = true; // 打开了 “预设”。

    const div = document.querySelector(".fn1");
    const dakai = document.getElementById("1");
    const div1 = document.createElement("div");
    div1.className = "div1";
    div1.textContent = "Main Functions";
    const div2 = document.createElement("div");
    div2.className = "div2";
    div2.textContent = "Extra Functions";
    const div3 = document.createElement("div");
    div3.className = "div3";
    div3.textContent = "Debugging Area";

    const notibtn = document.createElement("button");
    notibtn.innerHTML = "noti";
    notibtn.className = "btn1";
    notibtn.onclick = () => {
        noti("Hello! Nice to meet you.");
    };
    const cgbtn = document.createElement("button");
    cgbtn.innerHTML = "cg";
    cgbtn.className = "btn2";
    cgbtn.onclick = () => {
        cg("When you see this window, it means that you've run this function successfully.");
    };
    const failbtn = document.createElement("button");
    failbtn.innerHTML = "fail";
    failbtn.className = "btn3";
    failbtn.onclick = () => {
        fail("There're errors sometimes, like NotAllowedError.");
    };
    const warnbtn = document.createElement("button");
    warnbtn.innerHTML = "warn";
    warnbtn.className = "btn4";
    warnbtn.onclick = () => {
        warn("You need to pay attention to this kind of message.");
    };
    const inpbtn = document.createElement("button");
    inpbtn.innerHTML = "inp";
    inpbtn.className = "btn5";
    inpbtn.onclick = async () => {
        let a = await inp("You can input something here.");
        noti(`Your input is: "${a}".`);
    };
    const synchrbtn = document.createElement("button");
    synchrbtn.innerHTML = "synchr";
    synchrbtn.className = "btn6";
    synchrbtn.onclick = async () => {
        await synchr("This function is still WIP.");
    };
    const xzbtn = document.createElement("button");
    xzbtn.innerHTML = "xz";
    xzbtn.className = "btn7";
    xzbtn.onclick = async () => {
        var res = await xz("How do you like these functions below?", 1, ["Excellent.", "Okay.", "Average.", "It need to be improved."]);
        res = res.join("");
        switch (res) {
            case "Excellent.":
                noti("Thanks a lot! You may try other functions!");
                break;
            case "Okay.":
                noti("Thank you for your feedback.");
                break;
            case "Average.":
                noti("We can do better.");
                break;
            case "It need to be improved.":
                var r = await xz("Need feedback?", 1, ["Yes.", "No."]);
                r = r.join("");
                if (r === "Yes.") {
                    await lj("Click the link below to leave your feedback.", "mailto://Feng_14@outlook.com");
                    break;
                } else {
                    noti("Okay, see you.");
                }
        }
    };
    const ljbtn = document.createElement("button");
    ljbtn.innerHTML = "lj";
    ljbtn.className = "btn8";
    ljbtn.onclick = async () => {
        await lj("View the information site of The Play Games!", "https://modificationer-mdf.github.io/tpg_info/");
    };
    const zdbtn = document.createElement("button");
    zdbtn.innerHTML = "zd";
    zdbtn.className = "btn9";
    zdbtn.onclick = async () => {
        await zd("Type your codes here.");
    };
    const timerbtn = document.createElement("button");
    timerbtn.innerHTML = "timer";
    timerbtn.className = "btn29";
    timerbtn.onclick = async () => {
        let b = await timer("5 seconds countdown.", 5000);
        if (b) {
            noti("Time's up.");
        }
    };
    const nullbtn = document.createElement("button");
    nullbtn.innerHTML = "Enter null value in functions.";
    nullbtn.className = "btn10";
    nullbtn.onclick = () => {
        wz(null);
    };
    const undefinedbtn = document.createElement("button");
    undefinedbtn.innerHTML = "Enter undefined value in functions.";
    undefinedbtn.className = "btn11";
    undefinedbtn.onclick = () => {
        wz(undefined);
    };
    const imp = document.createElement("button");
    imp.textContent = "wz";
    imp.className = "btn22";
    imp.onclick = () => {
        wz("Contents can be shown here! </br>(Acrylic materials used in background)");
    };

    const all = [
        notibtn,
        cgbtn,
        failbtn,
        warnbtn,
        inpbtn,
        synchrbtn,
        xzbtn,
        ljbtn,
        zdbtn,
        timerbtn,
        imp,
        nullbtn,
        undefinedbtn,
    ];

    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div1.style.opacity = "0";
    div2.style.opacity = "0";
    div3.style.opacity = "0";

    all.forEach(btn => {
        btn.type = "button";
        btn.style.display = "none";
        btn.style.color = "#ffffff";
        btn.style.opacity = "0";
        btn.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
    });

    if (div.children.length <= 1) {
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        all.forEach((btn, index) => {
            if (index >= 0 && index < 11) {
                div1.appendChild(btn);
            } else {
                div3.appendChild(btn);
            }
        });
    }

    div.style.animation = `jr2_fn1 0.55s forwards ${easing}`;
    dakai.textContent = "The contents below are preset.";
    dakai.style.transition = `all 0.55s ${easing}`;
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = hqkd("The contents below are preset.", "dakai", "button");

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "jr2_fn1") {
            div1.style.display = "block";
            div1.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
            div2.style.display = "block";
            div2.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
            div3.style.display = "block";
            div3.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.display = "block";
                    btn.style.opacity = "1";
                });
                div1.style.opacity = "1";
                div2.style.opacity = "1";
                div3.style.opacity = "1";
            }, 0);
        }
    });
}

function fn2() { // "Function Demos" “演示” 模式。
    f2 = true; // 打开了 “演示”。

    const div = document.querySelector(".fn1");
    const dakai = document.getElementById("1");
    dakai.style.transition = `all 0.55s ${easing}`;
    const container = document.createElement("div");
    container.id = "fn2_cont";
    container.transition = `all 0.55s ${easing}`;

    const notibtn = document.createElement("button");
    notibtn.style.marginTop = "15px";
    notibtn.innerHTML = "noti";
    notibtn.className = "btn1";
    notibtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Noti().");
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Noti().");
            noti(res, t);
        } else {
            noti(res, "Notification");
        }
    };
    const cgbtn = document.createElement("button");
    cgbtn.innerHTML = "cg";
    cgbtn.className = "btn2";
    cgbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Cg().");
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Cg().");
            cg(res, t);
        } else {
            cg(res, "Success");
        }
    };
    const failbtn = document.createElement("button");
    failbtn.innerHTML = "fail";
    failbtn.className = "btn3";
    failbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Fail().");
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Fail().");
            fail(res, t);
        }
        else {
            fail(res, "Failed");
        }
    };
    const warnbtn = document.createElement("button");
    warnbtn.innerHTML = "warn";
    warnbtn.className = "btn4";
    warnbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Warn().");
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Warn().");
            warn(res, t);
        }
        else {
            warn(res, "Warning");
        }
    };
    const xzbtn = document.createElement("button");
    xzbtn.innerHTML = "xz";
    xzbtn.className = "btn7";
    xzbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Xz().");
        let n = await inp("How many options in total?");
        n = Number(n);
        let ns = await inp("How many options can be selected at most?");
        ns = Number(ns);
        let array = new Array(n);
        for (let i = 0; i <= n - 1; i++) {
            array[i] = await inp(`Enter the option ${i + 1}.`);
        }
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Xz().");
            let ls_res = await xz(res, ns, array, t);
            noti(`You've chosen: "${ls_res.join(", ")}".`);
        } else {
            let ls_res = await xz(res, ns, array, "Multiple or Single Choice");
            noti(`You've chosen: "${ls_res.join(", ")}".`);
        }
    };
    const ljbtn = document.createElement("button");
    ljbtn.innerHTML = "lj";
    ljbtn.className = "btn8";
    ljbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Lj().");
        let url = await inp("Enter the URL you want to open.");
        if (titleset === "Custom") {
            let t = await inp("Enter the title of this Lj().");
            lj(res, url, t);
        }
        else {
            lj(res, url, "Link");
        }
    };
    const timerbtn = document.createElement("button");
    timerbtn.innerHTML = "timer";
    timerbtn.className = "btn29";
    timerbtn.onclick = async () => {
        let res = await inp("Enter the messages shown on this Timer().");
        let t = await inp("How long will the timer last? (unit: ms)");
        t = Number(t);
        if (titleset === "Custom") {
            let t1 = await inp("Enter the title of this Timer().");
            timer(res, t, t1);
        }
        else {
            timer(res, t, "Count");
        }
    };
    const wzbtn = document.createElement("button");
    wzbtn.innerHTML = "wz";
    wzbtn.className = "btn22";
    wzbtn.onclick = async () => {
        let res = await inp("Enter the contents shown on this Wz().");
        wz(res);
    };

    const all = [
        notibtn,
        cgbtn,
        failbtn,
        warnbtn,
        xzbtn,
        ljbtn,
        timerbtn,
        wzbtn,
    ];

    all.forEach(btn => {
        btn.style.display = "none";
    });

    div.appendChild(container);
    if (div.children.length <= 2) {
        all.forEach(btn => {
            container.appendChild(btn);
        });
    }

    div.style.animation = `jr2_fn2 0.55s forwards ${easing}`;
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = hqkd("Play functions here.", "dakai", "button");
    dakai.textContent = "Play functions here.";

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "jr2_fn2") {
            all.forEach(btn => {
                btn.style.display = "block";
                btn.style.color = "#ffffff";
                btn.style.opacity = "0";
                btn.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
            });
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.opacity = "1";
                });
            }, 0);
        }
    });
}

function opendiv_permission(div) {
    let ls_visibility = getComputedStyle(div).visibility;
    let ls_opacity = getComputedStyle(div).opacity;
    if (ls_visibility === "visible" || ls_opacity === "1") {
        return true;
    }
    else if (ls_visibility === "hidden" || ls_opacity === "0") {
        return false;
    } 
}

function closefn0() {
    const div = document.querySelector(".fn1");
    const dakai = document.getElementById("1");
    dakai.style.backgroundColor = "#ffe20099";
    dakai.innerHTML = "打开";
    dakai.style.width = "600px";

    if (f1 === true) { // 打开了 “预设”。
        const div1 = document.querySelector(".div1");
        const div2 = document.querySelector(".div2");
        const div3 = document.querySelector(".div3");

        div1.style.opacity = "0";
        div2.style.opacity = "0";
        div3.style.opacity = "0";

        div3.addEventListener("transitionend", () => {
            div.removeChild(div1);
            div.removeChild(div2);
            div.removeChild(div3);
            div.style.animation = `cc2_fn1 0.55s forwards ${easing}`;
        });
        f1 = false;
    }
    if (f2 === true) { // 打开了 “演示”。
        const container = document.getElementById("fn2_cont");
        container.style.transition = `all 0.55s ${easing}`;
        container.style.opacity = 0;
        container.addEventListener("transitionend", () => {
            div.removeChild(container);
            div.style.animation = `cc2_fn2 0.55s forwards ${easing}`;
        });
        f2 = false;
    }
}

function fn3() {
    f3 = true;
    warn("Please note that these files may be detected as malware.");

    const div = document.querySelector(".fn3");
    div.style.animation = `jr2_fn3 0.55s forwards ${easing}`;
    const dakai = document.getElementById("3");
    dakai.style.transition = `all 0.55s ${easing}`;
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = hqkd("Download all versions of The Play Games here.", "dakai", "button");
    dakai.textContent = "Download all versions of The Play Games here.";
    const container = document.createElement("div");
    container.id = "fn3_cont";

    const btn1 = document.createElement("button");
    btn1.className = "btn11";
    btn1.style.marginTop = "20px";
    btn1.type = "button";
    const a1 = document.createElement("a");
    a1.href = "projects/Version_Collecting_1.zip";
    a1.download = "Version_Collecting_1.zip";
    a1.textContent = "Download VC_Time 1 (Including The Play Games 0.1 ~ 0.6)";
    a1.onmouseover = () => {
        rz("Released on 2025.5/1.");
    };

    const btn2 = document.createElement("button");
    btn2.className = "btn12";
    btn2.type = "button";
    const a2 = document.createElement("a");
    a2.href = "projects/Version_0.7.zip";
    a2.download = "Version_0.7.zip";
    a2.textContent = "Download The Play Games 0.7";
    a2.onmouseover = () => {
        rz("Released on 2025.8/22.");
    };

    const btn3 = document.createElement("button");
    btn3.className = "btn13";
    btn3.type = "button";
    const a3 = document.createElement("a");
    a3.href = "projects/Version_0.8.zip";
    a3.download = "Version_0.8.zip";
    a3.textContent = "Download The Play Games 0.8";
    a3.onmouseover = () => {
        rz("Released on 2025.8/27.");
    };

    const all = [
        btn1,
        btn2,
        btn3,
        a1,
        a2,
        a3
    ];

    all.forEach(btn => {
        btn.style.display = "none";
    });
    div.appendChild(container);
    if (div.children.length <= 2) {
        all.forEach((btn, index) => {
            if (index >= 0 && index < 3) container.appendChild(btn);
            else if (index === 3) btn1.appendChild(btn);
            else if (index === 4) btn2.appendChild(btn);
            else if (index === 5) btn3.appendChild(btn);
        });
    }

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "jr2_fn3") {
            all.forEach(btn => {
                btn.style.display = "block";
                btn.color = "#ffffff";
                btn.style.opacity = "0";
                btn.style.transition = "opacity 0.55s cubic-bezier(0.33, 1, 0.68, 1)";
            });
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.opacity = "1";
                });
            }, 0);
        }
    });
}

function closefn3() {
    if (f3 === true) {
        const div = document.querySelector(".fn3");
        const dakai = document.getElementById("3");
        dakai.style.transition = `all 0.55s ${easing}`;
        dakai.style.backgroundColor = "#ffe20099";
        dakai.innerHTML = "Open";
        dakai.style.width = "600px";

        const container = document.getElementById("fn3_cont");
        container.style.transition = `all 0.55s ${easing}`;
        container.style.opacity = 0;
        container.addEventListener("transitionend", () => {
            div.removeChild(container);
            div.style.animation = `cc2_fn3 0.55s forwards ${easing}`;
        });
        f3 = false;
    } else {
        fail('"Function Demos" is still unopened.')
    }
}

function totop() { // 返回顶部。
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function hqzd(s) { // 获取栈顶元素。
    const t = s.pop();
    s.push(t);
    return t;
}

function control() { // 选项。
    const ctrl = document.querySelector(".control-pad");
    const title = document.createElement("p");
    title.innerHTML = "Options";
    title.className = "title";
    title.style.right = "25px";

    const ms = document.createElement("p");
    ms.innerHTML = "Demo mode";
    ms.className = "lcont";
    const ys = document.createElement("button");
    ys.type = "button";
    ys.innerHTML = "Preset";
    ys.className = "control1";
    ys.onclick = () => {
        if (mode === "Preset") warn("Demo mode is already Preset.");
        else {
            mode = "Preset";
            cg("Demo mode has been switched to Preset.");
        }
    };
    const js = document.createElement("button");
    js.type = "button";
    js.innerHTML = "Play";
    js.className = "control2";
    js.onclick = () => {
        if (mode === "Play") warn("Demo mode is already Play.");
        else {
            mode = "Play";
            cg("Demo mode has been switched to Play.");
        }
    };

    const ts = document.createElement("p");
    ts.innerHTML = "Window titles";
    ts.className = "lcont";
    const y = document.createElement("button");
    y.type = "button";
    y.innerHTML = "Default";
    y.className = "control3";
    y.onclick = () => {
        if (titleset === "Default") warn("You're using the default titles already.");
        else {
            titleset = "Default";
            cg("Window titles have been switched to Default.");
        }
    };
    const z = document.createElement("button");
    z.type = "button";
    z.innerHTML = "Custom";
    z.className = "control4";
    z.onclick = () => {
        if (titleset === "Custom") warn("You're using custom titles already.");
        else {
            titleset = "Custom";
            cg("Window titles have been switched to Custom.");
        }
    };

    const rightmenu = document.createElement("p");
    rightmenu.innerHTML = "Right-click menu settings";
    rightmenu.className = "lcont";
    const m1 = document.createElement("button");
    m1.type = "button";
    m1.innerHTML = "Follow the settings of the website";
    m1.className = "control9";
    m1.onclick = () => {
        if (rightset === "Follow the settings of the website") warn('The right-click menu is already "Follow the settings of the website."');
        else {
            rightset = "Follow the settings of the website";
            cg("Reseted the attributes of the right-click menu.");
        }
    };
    const m2 = document.createElement("button");
    m2.type = "button";
    m2.innerHTML = "Follow the settings of the website";
    m2.className = "control10";
    m2.onclick = () => {
        fail("This function is not available yet.");
    };

    const c_block = document.createElement("p");
    c_block.innerHTML = 'Set the status of "Options"';
    c_block.className = "lcont";
    const y1 = document.createElement("button");
    y1.type = "button";
    y1.innerHTML = "Lock";
    y1.className = "control5";
    y1.onclick = () => {
        if (control_block === true) warn('"Options" is already locked.');
        else {
            control_block = true;
            cg('"Options" has been locked.');
        }
    };
    const n1 = document.createElement("button");
    n1.type = "button";
    n1.innerHTML = "Unlock";
    n1.className = "control6";
    n1.onclick = () => {
        if (control_block === false) warn('"Options" is already unlocked.');
        else {
            control_block = false;
            cg('Options" has been unlocked.');
        }
    };

    const i_block = document.createElement("p");
    i_block.innerHTML = 'Set the status of "Unread Messages"';
    i_block.className = "lcont";
    const y2 = document.createElement("button");
    y2.type = "button";
    y2.innerHTML = "Lock";
    y2.className = "control7";
    y2.onclick = () => {
        if (inf_block === true) warn('"Unread Messages" is already locked.');
        else {
            inf_block = true;
            cg('"Unread Messages" has been locked.');
        }
    };
    const n2 = document.createElement("button");
    n2.type = "button";
    n2.innerHTML = "Unlock";
    n2.className = "control8";
    n2.onclick = () => {
        if (inf_block === false) warn('"Unread Messages" is already unlocked.');
        else {
            inf_block = false;
            cg('"Unread Messages" has been unlocked.');
        }
    };

    const eas = document.createElement("p");
    eas.innerHTML = "easing";
    eas.className = "lcont";
    const inp1 = document.createElement("input");
    inp1.type = "text";
    inp1.id = "easing";
    inp1.className = "inpbox";
    inp1.value = easing;
    let t1 = false;
    inp1.onclick = () => {
        if (t1 === false) {
            noti("The format of cubic-bezier() is cubic-bezier(x1, y1, x2, y2). x1 and x2 must be between 0 and 1, and y1 and y2 can be any value. There are other easing functions, such as ease, linear, ease-in, ease-out, ease-in-out, step, step-start, and step-end.")
            t1 = true;
        }
    };
    inp1.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            easing = inp1.value;
        }
    });

    const mrms = document.createElement("p");
    mrms.innerHTML = "deftime";
    mrms.className = "lcont";
    const inp2 = document.createElement("input");
    let t2 = false;
    inp2.type = "text";
    inp2.id = "deftime";
    inp2.value = deftime;
    inp2.className = "inpbox";
    inp2.onclick = () => {
        if (t2 === false) {
            noti("The value of deftime can not only be an integer greater than or equal to 1250, but also be Smart.");
            t2 = true;
        }
    };
    inp2.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (windows.length > 0) {
                warn(`You can't modify deftime while ${check()} ${check().length > 1 ? "are" : "is"} running.`)
            } else {
                if (!isNaN(Number(inp2.value))) deftime = Number(inp2.value);
                else deftime = inp2.value;
            }
        }
    });

    const defw = document.createElement("p");
    defw.innerHTML = "defwid";
    defw.className = "lcont";
    const inp3 = document.createElement("input");
    let t3 = false;
    inp3.type = "number";
    inp3.id = "defwid";
    inp3.value = defwid;
    inp3.className = "inpbox";
    inp3.onclick = () => {
        if (t3 === false) {
            warn("The value of defwid can only be a positive integer.");
            t3 = true;
        }
    };
    inp3.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            defwid = Number(inp3.value);
        }
    });

    const defh = document.createElement("p");
    defh.innerHTML = "defhei";
    defh.className = "lcont";
    const inp4 = document.createElement("input");
    let t4 = false;
    inp4.type = "number";
    inp4.id = "defhei";
    inp4.value = defhei;
    inp4.className = "inpbox";
    inp4.onclick = () => {
        if (t4 === false) {
            warn("The value of defhei can only be a positive integer.");
            t4 = true;
        }
    };
    inp4.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            defhei = Number(inp4.value);
        }
    });

    const jdt = document.createElement("div");
    jdt.style.left = "25px";
    jdt.style.height = "7px";
    jdt.style.width = "100%";
    jdt.style.backgroundColor = "#ffffff99";

    const all = [
        ms,
        ts,
        rightmenu,
        c_block,
        i_block,
        eas,
        mrms,
        defw,
        defh,
    ];

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = `${(i + 1) * 90}px`;
    }

    ctrl.appendChild(title);
    ctrl.appendChild(ms);
    ctrl.appendChild(ts);
    ctrl.appendChild(rightmenu);
    ctrl.appendChild(c_block);
    ctrl.appendChild(i_block);
    ctrl.appendChild(eas);
    ctrl.appendChild(mrms);
    ctrl.appendChild(defw);
    ctrl.appendChild(defh);
    title.appendChild(jdt);
    ms.appendChild(ys);
    ms.appendChild(js);
    ts.appendChild(y);
    ts.appendChild(z);
    rightmenu.appendChild(m1);
    rightmenu.appendChild(m2);
    c_block.appendChild(y1);
    c_block.appendChild(n1);
    i_block.appendChild(y2);
    i_block.appendChild(n2);
    eas.appendChild(inp1);
    mrms.appendChild(inp2);
    defw.appendChild(inp3);
    defh.appendChild(inp4);
}

function inf_ui() {
    const inf = document.querySelector(".information-table");
    const title = document.createElement("p");
    title.innerHTML = "Unread Messages";
    title.className = "title";
    title.style.right = "25px";
    title.style.textAlign = "right";

    const jdt = document.createElement("div");
    jdt.style.height = "7px";
    jdt.style.width = "100%";
    jdt.style.backgroundColor = "#ffffff99";

    const counts = document.createElement("div");
    counts.style.transition = `all 0.3s ${easing}`;
    counts.style.width = "100%";
    counts.id = "counts";
    counts.style.textAlign = "center";
    counts.style.position = "absolute";
    counts.style.top = "50%";
    counts.style.fontSize = "20px";
    counts.style.color = "#ffffff";

    const clear = document.createElement("button");
    clear.style.visibility = "hidden";
    clear.style.opacity = 0;
    clear.style.transition = `all 0.3s ${easing}`;
    clear.type = "button";
    clear.id = "clear-all";
    clear.innerHTML = "Clear unread messages.";
    clear.style.width = "15ch";
    clear.className = "inf1";
    clear.style.position = "absolute";
    clear.style.top = "90px";
    clear.style.left = "0%";
    clear.style.backgroundColor = "#00000099";
    clear.style.color = "#ffffff";

    const container = document.createElement("div");
    container.id = "inf_container";
    container.style.position = "relative";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.top = "180px";

    inf.appendChild(title);
    title.appendChild(jdt);
    inf.appendChild(counts);
    inf.appendChild(clear);
    inf.appendChild(container);
}

async function inf_cont() { // 更新未读信息。
    const inf = document.querySelector(".information-table");
    const counts = document.getElementById("counts");
    const clear = document.getElementById("clear-all");
    const container = document.getElementById("inf_container");
    let qj_count = noti_unv.length + cg_unv.length + fail_unv.length + warn_unv.length + synchr_unv.length;

    function 懒得起名(函数, 数组, 变量) {
        for (let i = 变量; i < 数组.length; i++) {
            const 元素 = document.createElement("div");
            元素.className = `${函数}c`;
            元素.id = `${函数}c-${i}`;
            元素.style.position = "position";
            元素.style.transition = `opacity 0.3s, transform 0.3s, top 0.3s, margin-bottom 0.3s ${easing}`;
            元素.style.opacity = 0;
            元素.style.transform = "translateY(100%)";
            const 元素_sq = document.createElement("div");
            元素_sq.className = `${函数}-square`;
            元素_sq.style.fontSize = "20px";
            元素_sq.style.textAlign = "center";
            const 元素_msg = document.createElement("div");
            元素_msg.className = "rcont";
            元素_msg.style.transition = `all 0.2s ${easing}`;
            元素_msg.style.marginTop = "25px";
            元素_msg.innerHTML = 数组[i];
            元素_sq.innerHTML = `${xzsj()} ${函数[0].toUpperCase() + 函数.slice(1)}()`;
            container.appendChild(元素);
            元素.appendChild(元素_sq);
            元素.appendChild(元素_msg);

            setTimeout(() => {
                元素.style.transform = "translateY(0)";
                元素.style.visibility = "visible";
                元素.style.opacity = 1;
            }, 14);
        }
    }

    if (noti_unv.length > ls_notiunv) {
        懒得起名("noti", noti_unv, ls_notiunv);
        ls_notiunv = noti_unv.length;
    } else if (noti_unv.length < ls_notiunv) {
        if (warned === false) {
            warn("Please don't modify noti_unv by other means. The website will be reflashed after 7 seconds.");
            warned = true;
            let a = await timer("7 second countdown.", 7000);
            if (a) location.reload();
        }
    }

    if (cg_unv.length > ls_cgunv) {
        懒得起名("cg", cg_unv, ls_cgunv);
        ls_cgunv = cg_unv.length;
    } else if (cg_unv.length < ls_cgunv) {
        if (warned === false) {
            warn("Please don't modify cg_unv by other means. The website will be reflashed after 7 seconds.");
            warned = true;
            let a = await timer("7 second countdown.", 7000);
            if (a) location.reload();
        }
    }

    if (fail_unv.length > ls_failunv) {
        懒得起名("fail", fail_unv, ls_failunv);
        ls_failunv = fail_unv.length;
    } else if (fail_unv.length < ls_failunv) {
        if (warned === false) {
            warn("Please don't modify fail_unv by other means. The website will be reflashed after 7 seconds.");
            warned = true;
            let a = await timer("7 second countdown.", 7000);
            if (a) location.reload();
        }
    }

    if (warn_unv.length > ls_warnunv) {
        懒得起名("warn", warn_unv, ls_warnunv);
        ls_warnunv = warn_unv.length;
    } else if (warn_unv.length < ls_warnunv) {
        if (warned === false) {
            warn("Please don't modify warn_unv by other means. The website will be reflashed after 7 seconds.");
            warned = true;
            let a = await timer("7 second countdown.", 7000);
            if (a) location.reload();
        }
    }

    if (synchr_unv.length > ls_synchrunv) {
        懒得起名("synchr", synchr_unv, ls_synchrunv);
        ls_synchrunv = synchr_unv.length;
    } else if (synchr_unv.length < ls_synchrunv) {
        if (warned === false) {
            warn("Please don't modify synchr_unv by other means. The website will be reflashed after 7 seconds.");
            warned = true;
            let a = await timer("7 second countdown.", 7000);
            if (a) location.reload();
        }
    }

    if (qj_count === 0) {
        counts.style.top = "50%";
        counts.innerHTML = "No unread messages.";

        clear.style.visibility = "hidden";
        clear.style.opacity = 0;
        clear.style.left = "0%";
    } else {
        counts.style.top = "140px";
        counts.innerHTML = `There're ${qj_count} unread messages now.`;

        clear.style.visibility = "visible";
        clear.style.opacity = 1;
        clear.style.left = "50%";

        clear.onclick = async () => {
            inf_block = true;

            let ls_str = "";
            let q = await xz("Clear which messages?", 5, ["Noti()", "Cg()", "Fail()", "Warn()", "Synchr()"]);
            if (q.includes("Noti()")) {
                if (noti_unv.length > 0) ls_str += "[id^='notic-'],";
                else rz("Noti_unv is empty.");
            } if (q.includes("Cg()")) {
                if (cg_unv.length > 0) ls_str += "[id^='cgc-'],";
                else rz("Cg_unv is empty.");
            } if (q.includes("Fail()")) {
                if (fail_unv.length > 0) ls_str += "[id^='failc-'],";
                else rz("Fail_unv is empty.");
            } if (q.includes("Warn()")) {
                if (warn_unv.length > 0) ls_str += "[id^='warnc-'],";
                else rz("Warn_unv is empty.");
            } if (q.includes("Synchr()")) {
                if (synchr_unv.length > 0) ls_str += "[id^='synchrc-'],";
                else rz("Synchr_unv is empty.");
            }
            if (ls_str === "") rz("You haven't selected any messages to clear yet.");
            else {
                ls_str = ls_str.slice(0, -1);
                const qj_elements = inf.querySelectorAll(ls_str);
                qj_elements.forEach((el, index) => {
                    el.style.opacity = 0;
                    el.style.transform = "translateX(300px)";
                    el.style.marginBottom = `-${el.offsetHeight}px`

                    el.addEventListener("transitionend", () => {
                        container.removeChild(el);
                    }, { once: true });

                    if (index === qj_elements.length - 1) {
                        setTimeout(() => {
                            if (q.includes("Noti()")) {
                                noti_unv = [];
                                ls_notiunv = 0;
                            } if (q.includes("Cg()")) {
                                cg_unv = [];
                                ls_cgunv = 0;
                            } if (q.includes("Fail()")) {
                                fail_unv = [];
                                ls_failunv = 0;
                            } if (q.includes("Warn()")) {
                                warn_unv = [];
                                ls_warnunv = 0;
                            } if (q.includes("Synchr()")) {
                                synchr_unv = [];
                                ls_synchrunv = 0;
                            }
                        }, 300);
                    }
                });
            }
        };
    }
}

function pos(p) {
    let total = 3 * window.innerHeight / 100;
    function fn(w) {
        w.forEach((window) => {
            const wh = window.offsetHeight;
            window.style.transition = `top 0.55s ${easing}`;
            window.style.top = `${total}px`;
            total += wh + 3;
        });
    }
    if (p) {
        fn(windows);
    } else {
        fn(rzwin);
    }
}

function create(window) { // 创建窗口。
    if (window.className !== "rz-window") {
        windows.push(window);
        pos(true);
    } else {
        rzwin.push(window);
        pos(false);
    }
}

function close(window) { // 关闭窗口。
    if (window.className !== "rz-window") {
        windows = windows.filter(win => win !== window);
        pos(true);
    } else {
        rzwin = rzwin.filter(win => win !== window);
        pos(false);
    }
}

function check() {
    let string = "";
    for (var i = 0; i <= windows.length - 1; i++) {
        if (windows[i].className === "noti-window") {
            if (!string.includes("Noti()、")) string += "Noti()、";
        } else if (windows[i].className === "cg-window") {
            if (!string.includes("Cg()、")) string += "Cg()、";
        } else if (windows[i].className === "fail-window") {
            if (!string.includes("fail()、")) string += "fail()、";
        } else if (windows[i].className === "warn-window") {
            if (!string.includes("Warn()、")) string += "Warn()、";
        } else if (windows[i].className === "inp-window") {
            if (!string.includes("Inp()、")) string += "Inp()、";
        } else if (windows[i].className === "synchr-window") {
            if (!string.includes("Synchr()、")) string += "Synchr()、";
        } else if (windows[i].className === "xz-window") {
            if (!string.includes("Xz()、")) string += "Xz()、";
        } else if (windows[i].className === "lj-window") {
            if (!string.includes("Lj()、")) string += "Lj()、";
        } else if (windows[i].className === "zd-window") {
            if (!string.includes("Zd()、")) string += "Zd()、";
        }
    }
    if (string[string.length - 1] === "、") string = string.slice(0, -1);
    return string;
}

async function fn7() { // 网站介绍。
    let j1 = false; // 移动至 “选项”。
    let j2 = false; // 移动至 "Unread Messages"。
    let j3 = false; // 调出 “右键菜单”。
    let ls_j2 = false;
    let ls_j3 = false;
    let w1 = false; // 完成 “选项” 介绍。
    let w2 = false; // 完成 "Unread Messages" 介绍。
    let w3 = false; // 完成 “右键菜单” 介绍。
    let w4 = false; // 完成所有介绍。
    let ls_w4 = false;

    const ctrl = document.querySelector(".control-pad");
    const inf = document.querySelector(".information-table");
    const rmenu = document.querySelector(".rightclick-menu");
    const main = document.getElementById("main");
    const ebox = document.getElementById("easing");
    const tbox = document.getElementById("deftime");
    const wbox = document.getElementById("defwid");
    const hbox = document.getElementById("defhei");

    await wz("Welcome to the official website of The Play Games! Let me introduce the website to you.");
    noti("Move your mouse to the upper left corner.");
    control_block = true;

    const i1 = setInterval(async () => {
        if (getComputedStyle(ctrl).animationName === "jr_ctrl" && j1 === false) {
            ld(main, "75%");
            j1 = true;
            await wz("As you see, here is the “Options” interface of the website. You can change various special parameters of the website from here.");
            let q1 = await xz("Need I show you how to change a variable?", 1, ["Yes.", "No."]);
            q1 = q1.join("");
            if (q1 === "Yes.") {
                await wz("You can just click the corresponding button to modify value of variables, and you can also modify them by typing in the values you want.");
                let q2 = await xz("Choose which variable to modify?", 1, ["easing", "deftime", "defwid", "defhei"]);
                q2 = q2.join("");
                noti("Please modify this variable by typing in the value you want.");
                switch (q2) {
                    case "easing":
                        ebox.focus();
                        ebox.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                w1 = true;
                                control_block = false;
                                control_moved = true;
                            }
                        });
                        break;
                    case "deftime":
                        tbox.focus();
                        tbox.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                w1 = true;
                                control_block = false;
                                control_moved = true;
                            }
                        });
                        break;
                    case "defwid":
                        wbox.focus();
                        wbox.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                w1 = true;
                                control_block = false;
                                control_moved = true;
                            }
                        });
                        break;
                    case "defhei":
                        hbox.focus();
                        hbox.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                w1 = true;
                                control_block = false;
                                control_moved = true;
                            }
                        });
                        break;
                }
            } else {
                await wz("Okay, let's move on.");
                control_block = false;
                control_moved = true;
                w1 = true;
            }
            clearInterval(i1);
            ld(main, "100%");
        }
    }, 250);

    const i2 = setInterval(async () => {
        if (w1 === true && ls_j2 === false) {
            ls_j2 = true;
            await wz('The following is the "Unread Messages" interface.');
            noti("Move your mouse to the upper right corner.");
            inf_block = true;
            const i3 = setInterval(async () => {
                if (getComputedStyle(inf).animationName === "jr_inf" && j2 === false) {
                    ld(main, "75%");
                    j2 = true;
                    await wz("At this interface, you can review the messages that aren't visible due to the size limit of the window.");
                    inf_block = false;
                    inf_moved = true;
                    w2 = true;
                    clearInterval(i3);
                }
            }, 250);
            clearInterval(i2);
            ld(main, "100%");
        }
    }, 250);

    const i4 = setInterval(async () => {
        if (w2 === true && ls_j3 === false) {
            ls_j3 = true;
            await wz('Then, let me show you the "Right-click Menu" which is updated recently.');
            noti("Please right-click your mouse. (Maybe you need to do it twice)");
            const i5 = setInterval(async () => {
                if (rmenu.style.opacity === "1" && j3 === false) {
                    ld(main, "75%");
                    j3 = true;
                    await wz("You can complete some common operations quickly via this right-click menu.");
                    noti("Note: Press F12 if you want to open the console.");
                    w3 = true;
                    clearInterval(i5);
                }
            }, 250);
            clearInterval(i4);
            ld(main, "100%");
        }
    }, 250);

    const i6 = setInterval(async () => {
        if (w1 === true && w2 === true && w3 === true && ls_w4 === false) {
            ls_w4 = true;
            await wz("Congratuations! You're familiar with the website now. Thank you for your cooperation for The Play Games!");
            clearInterval(i6);
        }
    }, 250);
}

function visible(e, fn_name) {
    const rect = e.getBoundingClientRect();
    const viewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if (viewport === false) {
        rz(`Notice that you have an unread ${fn_name}() message.`);
        switch (fn_name) {
            case "Noti":
                noti_unv.push(e.innerHTML);
                break;
            case "Cg":
                cg_unv.push(e.innerHTML);
                break;
            case "Fail":
                fail_unv.push(e.innerHTML);
                break;
            case "Warn":
                warn_unv.push(e.innerHTML);
                break;
            case "Synchr":
                synchr_unv.push(e.innerHTML);
                break;
        }
    }
}