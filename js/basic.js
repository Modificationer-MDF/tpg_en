function fn0() {
    if (mode === "Play" && f1 === false) fn1();
    else if (mode === "Preset" && f2 === false) fn2();
}

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector(".head1"); // h1 标签。
    const h2 = document.querySelector(".head2"); // h2 标签。
    const div = document.querySelector(".top"); // 包含 h1 和 h2 的 div 标签。
    const head = document.querySelector(".head"); // The Play Games 版本标签。
    const f1 = document.querySelector(".head3"); // 功能按钮组。
    const f3 = document.querySelector(".head4"); // 功能按钮组。

    h1.style.display = "block";
    h1.style.animation = "jr_head1 1.4s forwards cubic-bezier(0.33, 1, 0.68, 1)";
    h1.addEventListener("animationend", (e) => {
        if (e.animationName === "jr_head1") {
            h2.style.display = "block";
            h2.style.animation = "jr_head2 1.4s forwards cubic-bezier(0.33, 1, 0.68, 1)";
        }
    });
    h2.addEventListener("animationend", (e) => {
        if (e.animationName === "jr_head2") {
            div.style.animation = "jr_top 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
            head.style.animation = "jr_0head 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
        }
    });
    div.addEventListener("animationend", (e) => {
        if (e.animationName === "jr_top") {
            f1.style.animation = "jr1_head3 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
            f3.style.animation = "jr1_head5 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
        }
    });

    const ctrl = document.querySelector(".control-pad");
    control();

    document.addEventListener("mousemove", function (event) {
        let width = ctrl.getBoundingClientRect().width;
        if (event.clientX <= 50 && event.clientY <= 50 && control_moved === false) { // 移动到左上角。
            ctrl.style.animation = `jr_ctrl 550ms forwards ${easing}`;
            if (control_block === false) control_moved = true;
        } else if (event.clientX > width && control_moved === true) {
            ctrl.style.animation = `cc_ctrl 550ms forwards ${easing}`;
            control_moved = false;
        }
    });

    const inf = document.querySelector(".information-table");
    inf_ui();

    document.addEventListener("mousemove", function (event) {
        let rect = inf.getBoundingClientRect().width; // 获取 inf 元素的宽度。

        if (event.clientX >= window.innerWidth - 50 && event.clientY <= 50 && inf_moved === false) { // 移动到右上角。
            inf.style.animation = `jr_inf 550ms forwards ${easing}`;
            if (inf_block === false) inf_moved = true;
        } else if (event.clientX < window.innerWidth - rect && inf_moved === true) {
            inf.style.animation = `cc_inf 550ms forwards ${easing}`;
            inf_moved = false;
        }
    });
});

function fn1() {
    f1 = !f1;

    const div = document.querySelector(".head3");
    const dakai = document.getElementById("1");
    dakai.style.transition = `all 550ms ${easing}`;
    const notibtn = document.createElement("button");
    notibtn.style.marginTop = "15px";
    notibtn.innerHTML = "noti";
    notibtn.className = "btn1";
    notibtn.onclick = async () => {
        let res = await inp("输入你想显示在 Noti() 上的信息。", "Input here.");
        if (titleset === "Custom") {
            let t = await inp("请输入 Noti() 上的标题。", "Input here.");
            noti(res, t);
        } else {
            noti(res, "Notification");
        }
    };
    const cgbtn = document.createElement("button");
    cgbtn.innerHTML = "cg";
    cgbtn.className = "btn2";
    cgbtn.onclick = async () => {
        let res = await inp("输入你想显示在 Cg() 上的信息。", "Input here.");
        if (titleset === "Custom") {
            let t = await inp("请输入 Cg() 上的标题。", "Input here.");
            cg(res, t);
        } else {
            cg(res, "Success");
        }
    };
    const failbtn = document.createElement("button");
    failbtn.innerHTML = "fail";
    failbtn.className = "btn3";
    failbtn.onclick = async () => {
        let res = await inp("输入你想显示在 fail() 上的信息。", "Input here.");
        if (titleset === "Custom") {
            let t = await inp("请输入 fail() 上的标题。", "Input here.");
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
        let res = await inp("输入你想显示在 Warn() 上的信息。", "Input here.");
        if (titleset === "Custom") {
            let t = await inp("请输入 Warn() 上的标题。", "Input here.");
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
        let res = await inp("输入你想显示在 Xz() 上的信息。", "Input here.");
        let n = await inp("请输入 Xz() 上选项的数量。", "Input here.");
        n = Number(n);
        let array = new Array(n);
        for (let i = 0; i <= n - 1; i++) {
            array[i] = await inp(`请输入 Xz() 上第 ${i + 1} 个选项。`, "Input here.");
        }
        if (titleset === "Custom") {
            let t = await inp("请输入 Xz() 上的标题。", "Input here.");
            xz(res, n, array, t);
        }
        else {
            xz(res, n, array, "Select");
        }
    };
    const ljbtn = document.createElement("button");
    ljbtn.innerHTML = "lj";
    ljbtn.className = "btn8";
    ljbtn.onclick = async () => {
        let res = await inp("输入你想显示在 Lj() 上的信息。", "Input here.");
        let url = await inp("请输入你要链接的地址。", "Input here.");
        if (titleset === "Custom") {
            let t = await inp("请输入 Lj() 上的标题。", "Input here.");
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
        let res = await inp("输入你想显示在 Timer() 上的信息。", "Input here.");
        let t = await inp("请输入 Timer() 上的计时时间。（单位：毫秒）", "Input here.");
        t = Number(t);
        if (titleset === "Custom") {
            let t1 = await inp("请输入 Timer() 上的标题。", "Input here.");
            timer(res, t, t1);
        }
        else {
            timer(res, t, "Timer");
        }
    };
    const wzbtn = document.createElement("button");
    wzbtn.innerHTML = "wz";
    wzbtn.className = "btn22";
    wzbtn.onclick = async () => {
        let res = await inp("输入你想显示在 Wz() 上的信息。", "Input here.");
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

    if (div.children.length <= 1) {
        all.forEach(btn => {
            div.appendChild(btn);
        });
    }

    div.style.animation = "cc1_head4 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = "auto";
    dakai.textContent = "You can play the functions there.";

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "cc1_head4") {
            all.forEach(btn => {
                btn.style.display = "block";
                btn.style.color = "#ffffff";
                btn.style.opacity = "0";
                btn.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            });
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.opacity = "1";
                });
            }, 0);
        }
    });
}

function fn2() {
    f2 = !f2;

    const div = document.querySelector(".head3");
    const div1 = document.createElement("div");
    div1.className = "div1";
    div1.textContent = "Main functions";
    const div2 = document.createElement("div");
    div2.className = "div2";
    div2.textContent = "Extra functions";
    const div3 = document.createElement("div");
    div3.className = "div3";
    div3.textContent = "Debug functions";
    const dakai = document.getElementById("1");

    const notibtn = document.createElement("button");
    notibtn.innerHTML = "noti";
    notibtn.className = "btn1";
    notibtn.onclick = () => {
        noti("Hello, welcome to The Play Games!");
    };
    const cgbtn = document.createElement("button");
    cgbtn.innerHTML = "cg";
    cgbtn.className = "btn2";
    cgbtn.onclick = () => {
        cg("When you see this message, it means you have successfully run this function in the main function area.");
    };
    const failbtn = document.createElement("button");
    failbtn.innerHTML = "fail";
    failbtn.className = "btn3";
    failbtn.onclick = () => {
        fail("However, it's error sometimes, like NotAllowedError.");
    };
    const warnbtn = document.createElement("button");
    warnbtn.innerHTML = "warn";
    warnbtn.className = "btn4";
    warnbtn.onclick = () => {
        warn("When you see this message, you need pay attention to it.");
    };
    const inpbtn = document.createElement("button");
    inpbtn.innerHTML = "inp";
    inpbtn.className = "btn5";
    inpbtn.onclick = async () => {
        let a = await inp("你可以在此输入！");
        noti(`You have entered "${a}".`);
    };
    const synchrbtn = document.createElement("button");
    synchrbtn.innerHTML = "synchr";
    synchrbtn.className = "btn6";
    synchrbtn.onclick = async () => {
        await synchr("This function is still work-in-progress.");
    };
    const xzbtn = document.createElement("button");
    xzbtn.innerHTML = "xz";
    xzbtn.className = "btn7";
    xzbtn.onclick = async () => {
        var res = await xz("How do you like the functions above?", 4, ["Fabulous.", "Not bad.", "Average.", "You can do it better."]);
        switch (res) {
            case "Fabulous.":
                noti("Thanks a lot! You can try other functions.");
                break;
            case "Not bad.":
                noti("Thank you for your rating.");
                break;
            case "Average.":
                noti("We can do better");
                break;
            case "You can do it better.":
                var r = await xz("Would you like to give us some advice?", 2, ["Yes.", "No."]);
                if (r === "Yes.") {
                    await lj("Click the link below to feedback.", "mailto://Feng_14@outlook.com");
                    break;
                } else {
                    noti("OK, goodbye.");
                }
        }
    };
    const ljbtn = document.createElement("button");
    ljbtn.innerHTML = "lj";
    ljbtn.className = "btn8";
    ljbtn.onclick = async () => {
        await lj("View the information page of The Play Games via clicking the link below.", "https://modificationer-mdf.github.io/tpg_info/");
    };
    const zdbtn = document.createElement("button");
    zdbtn.innerHTML = "zd";
    zdbtn.className = "btn9";
    zdbtn.onclick = async () => {
        await zd("Input codes here.");
    };
    const timerbtn = document.createElement("button");
    timerbtn.innerHTML = "timer";
    timerbtn.className = "btn29";
    timerbtn.onclick = async () => {
        let b = await timer("A 5-second countdown.", 5000);
        if (b) {
            noti("Time's up.");
        }
    };
    const nullbtn = document.createElement("button");
    nullbtn.innerHTML = "Input null in the functions above.";
    nullbtn.className = "btn10";
    nullbtn.onclick = () => {
        wz(null);
    };
    const undefinedbtn = document.createElement("button");
    undefinedbtn.innerHTML = "Input undefined in the functions above.";
    undefinedbtn.className = "btn11";
    undefinedbtn.onclick = () => {
        wz(undefined);
    };
    const imp = document.createElement("button");
    imp.textContent = "wz";
    imp.className = "btn22";
    imp.onclick = () => {
        wz("Contents are able to be displayed here!<br/>(Background used acrylic materials.)");
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
    all.forEach(btn => {
        btn.type = "button";
        btn.style.display = "none";
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

    div.style.animation = "cc1_head3 550ms forwards cubic-bezier(0.33, 1, 0.68, 1)";
    dakai.textContent = "The content below is preset.";
    dakai.style.transition = "all 550ms cubic-bezier(0.33, 1, 0.68, 1)";
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = "auto";

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "cc1_head3") {
            all.forEach(btn => {
                btn.style.display = "block";
                btn.style.color = "#ffffff";
                btn.style.opacity = "0";
                btn.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            });
            div1.style.display = "block";
            div1.style.opacity = "0";
            div1.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            div2.style.display = "block";
            div2.style.opacity = "0";
            div2.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            div3.style.display = "block";
            div3.style.opacity = "0";
            div3.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.opacity = "1";
                });
                div1.style.opacity = "1";
                div2.style.opacity = "1";
                div3.style.opacity = "1";
            }, 0);
        }
    });
}

function fn3() {
    warn("These files may be classified as malware, please pay attention to them.");

    const div = document.querySelector(".head4");
    div.style.animation = `cc1_head5 550ms forwards ${easing}`;
    const dakai = document.getElementById("3");
    dakai.style.transition = `all 550ms ${easing}`;
    dakai.style.backgroundColor = "#001dff99";
    dakai.style.width = "auto";
    dakai.textContent = "Download all versions of The Play Games here.";

    const btn1 = document.createElement("button");
    btn1.className = "btn11";
    btn1.style.marginTop = "20px";
    btn1.type = "button";
    const a1 = document.createElement("a");
    a1.href = "projects/Version_Collecting_1.zip";
    a1.download = "Version_Collecting_1.zip";
    a1.textContent = "Download VC_Time 1 (Including The Play Games 0.1 ~ 0.6)";
    a1.onmouseover = () => {
        rz("Released on 2024.5/1.");
    };

    const btn2 = document.createElement("button");
    btn2.className = "btn12";
    btn2.type = "button";
    const a2 = document.createElement("a");
    a2.href = "projects/Version_0.7.zip";
    a2.download = "Version_0.7.zip";
    a2.textContent = "Download The Play Games 0.7";
    a2.onmouseover = () => {
        rz("Released on 2024.8/22.");
    };

    const btn3 = document.createElement("button");
    btn3.className = "btn13";
    btn3.type = "button";
    const a3 = document.createElement("a");
    a3.href = "projects/Version_0.8.zip";
    a3.download = "Version_0.8.zip";
    a3.textContent = "Download The Play Games 0.8";
    a3.onmouseover = () => {
        rz("Released on 2024.8/27.");
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
    if (div.children.length <= 1) {
        all.forEach((btn, index) => {
            if (index >= 0 && index < 3) div.appendChild(btn);
            else if (index === 3) btn1.appendChild(btn);
            else if (index === 4) btn2.appendChild(btn);
            else if (index === 5) btn3.appendChild(btn);
        });
    }

    div.addEventListener("animationend", (e) => {
        if (e.animationName === "cc1_head5") {
            all.forEach(btn => {
                btn.style.display = "block";
                btn.color = "#ffffff";
                btn.style.opacity = "0";
                btn.style.transition = "opacity 550ms cubic-bezier(0.33, 1, 0.68, 1)";
            });
            setTimeout(() => {
                all.forEach(btn => {
                    btn.style.opacity = "1";
                });
            }, 0);
        }
    });
}

function totop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function zhan(s) {
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
    ms.innerHTML = "Mode";
    ms.className = "lcont";
    const ys = document.createElement("button");
    ys.type = "button";
    ys.innerHTML = "Preset";
    ys.className = "control1";
    ys.onclick = () => {
        if (mode === "Preset") warn("Mode is already Preset.");
        else {
            mode = "Preset";
            cg("Mode has been switched to Preset.");
        }
    };
    const js = document.createElement("button");
    js.type = "button";
    js.innerHTML = "Play";
    js.className = "control2";
    js.onclick = () => {
        if (mode === "Play") warn("Mode is already Play.");
        else {
            mode = "Play";
            cg("Mode has been switched to Play.");
        }
    };

    const ts = document.createElement("p");
    ts.innerHTML = "Title";
    ts.className = "lcont";
    const y = document.createElement("button");
    y.type = "button";
    y.innerHTML = "Default";
    y.className = "control3";
    y.onclick = () => {
        if (titleset === "Default") warn("Title is already Default.");
        else {
            titleset = "Default";
            cg("Title has been switched to Default.");
        }
    };
    const z = document.createElement("button");
    z.type = "button";
    z.innerHTML = "Custom";
    z.className = "control4";
    z.onclick = () => {
        if (titleset === "Custom") warn("Title is already Custom.");
        else {
            titleset = "Custom";
            cg("Title has been switched to Custom.");
        }
    };

    const c_block = document.createElement("p");
    c_block.innerHTML = `"Options" Status`;
    c_block.className = "lcont";
    const y1 = document.createElement("button");
    y1.type = "button";
    y1.innerHTML = "Lock";
    y1.className = "control5";
    y1.onclick = () => {
        if (control_block === true) warn(`"Options" has been locked.`);
        else {
            control_block = true;
            cg(`"Options" has been locked.`);
        }
    };
    const n1 = document.createElement("button");
    n1.type = "button";
    n1.innerHTML = "Unlock";
    n1.className = "control6";
    n1.onclick = () => {
        if (control_block === false) warn(`"Options" has been unlocked.`);
        else {
            control_block = false;
            cg(`"Options" has been unlocked.`);
        }
    };

    const i_block = document.createElement("p");
    i_block.innerHTML = `"Unread Messages" Status`;
    i_block.className = "lcont";
    const y2 = document.createElement("button");
    y2.type = "button";
    y2.innerHTML = "Lock";
    y2.className = "control7";
    y2.onclick = () => {
        if (inf_block === true) warn(`"Unread Messages" has been locked.`);
        else {
            inf_block = true;
            cg(`"Unread Messages" has been locked.`);
        }
    };
    const n2 = document.createElement("button");
    n2.type = "button";
    n2.innerHTML = "Unlock";
    n2.className = "control8";
    n2.onclick = () => {
        if (inf_block === false) warn(`"Unread Messages" has been unlocked.`);
        else {
            inf_block = false;
            cg(`"Unread Messages" has been unlocked.`);
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
            noti("The mode of cubic-bezier() is cubic-bezier(x1, y1, x2, y2). x1 and x2 must be between 0 and 1, and y1 and y2 can be any value. Other easing functions include ease, linear, ease-in, ease-out, ease-in-out, step, step-start, and step-end.");
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
            noti("Deftime can either be an integer greater than or equal to 1250, or Smart.");
            t2 = true;
        }
    };
    inp2.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (windows.length > 0) {
                warn(`Cannot set deftime while ${check()} is running.`)
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
            warn("Defwid can only be a positive integer.");
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
            warn("Defhei can only be a positive integer.");
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

    const notic = document.createElement("div");
    notic.innerHTML = "Noti()";
    notic.className = "rcont";
    notic.id = "notic";
    const noti_msg = document.createElement("p");
    noti_msg.className = "rtxt";
    noti_msg.id = "noti_msg";
    const noti_read = document.createElement("button");
    noti_read.type = "button";
    noti_read.innerHTML = "Clear.";
    noti_read.className = "inf1";
    noti_read.onclick = () => {
        noti_unv = [];
        rz("The unread messages of Noti() have been cleared.");
    };

    const cgc = document.createElement("div");
    cgc.innerHTML = "Cg()";
    cgc.className = "rcont";
    cgc.id = "cgc";
    const cg_msg = document.createElement("p");
    cg_msg.className = "rtxt";
    cg_msg.id = "cg_msg";
    const cg_read = document.createElement("button");
    cg_read.type = "button";
    cg_read.innerHTML = "Clear.";
    cg_read.className = "inf2";
    cg_read.onclick = () => {
        cg_unv = [];
        rz("The unread messages of Cg() have been cleared.");
    };

    const failc = document.createElement("div");
    failc.innerHTML = "Fail()";
    failc.className = "rcont";
    failc.id = "failc";
    const fail_msg = document.createElement("p");
    fail_msg.className = "rtxt";
    fail_msg.id = "fail_msg";
    const fail_read = document.createElement("button");
    fail_read.type = "button";
    fail_read.innerHTML = "Clear.";
    fail_read.className = "inf3";
    fail_read.onclick = () => {
        fail_unv = [];
        rz("The unread messages of Fail() have been cleared.");
    };

    const warnc = document.createElement("div");
    warnc.innerHTML = "Warn()";
    warnc.className = "rcont";
    warnc.id = "warnc";
    const warn_msg = document.createElement("p");
    warn_msg.className = "rtxt";
    warn_msg.id = "warn_msg";
    const warn_read = document.createElement("button");
    warn_read.type = "button";
    warn_read.innerHTML = "Clear.";
    warn_read.className = "inf4";
    warn_read.onclick = () => {
        warn_unv = [];
        rz("The unread messages of Warn() have been cleared.");
    };

    const synchrc = document.createElement("div");
    synchrc.innerHTML = "Synchr()";
    synchrc.className = "rcont";
    synchrc.id = "synchrc";
    const synchr_msg = document.createElement("p");
    synchr_msg.className = "rtxt";
    synchr_msg.id = "synchr_msg";
    const synchr_read = document.createElement("button");
    synchr_read.type = "button";
    synchr_read.innerHTML = "Clear.";
    synchr_read.className = "inf5";
    synchr_read.onclick = () => {
        synchr_unv = [];
        rz("The unread messages of Synchr() have been cleared.");
    };

    const all = [
        notic,
        cgc,
        failc,
        warnc,
        synchrc,
    ];

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = `calc(${i * 3}vh + 90px)`;
    }

    inf.appendChild(title);
    title.appendChild(jdt);
    inf.appendChild(notic);
    inf.appendChild(cgc);
    inf.appendChild(failc);
    inf.appendChild(warnc);
    inf.appendChild(synchrc);
    notic.appendChild(noti_msg);
    notic.appendChild(noti_read);
    cgc.appendChild(cg_msg);
    cgc.appendChild(cg_read);
    failc.appendChild(fail_msg);
    failc.appendChild(fail_read);
    warnc.appendChild(warn_msg);
    warnc.appendChild(warn_read);
    synchrc.appendChild(synchr_msg);
    synchrc.appendChild(synchr_read);
}

function inf_cont() { // 更新未读信息。
    let noti_height = 0;
    let cg_height = 0;
    let fail_height = 0;
    let warn_height = 0;
    let synchr_height = 0;

    const notic = document.getElementById("notic");
    const noti_msg = notic.querySelector(".rtxt");
    let h1 = parseInt(getComputedStyle(noti_msg).lineHeight);
    noti_msg.innerHTML = (noti_unv.length === 0 ? "Empty." : noti_unv.join("<br />"));
    let l1 = Math.ceil((noti_msg.getBoundingClientRect().width * noti_msg.getBoundingClientRect().height) / (parseFloat(getComputedStyle(noti_msg).maxWidth) * h1));
    noti_height = l1 * h1;

    notic.style.height = `calc(${noti_height > 0 ? noti_height - h1 : 0}px + 135px)`;

    const cgc = document.getElementById("cgc");
    const cg_msg = cgc.querySelector(".rtxt");
    cg_msg.innerHTML = (cg_unv.length === 0 ? "Empty." : cg_unv.join("<br />"));
    let h2 = parseInt(getComputedStyle(cg_msg).lineHeight);
    let l2 = Math.ceil((cg_msg.getBoundingClientRect().width * cg_msg.getBoundingClientRect().height) / (parseFloat(getComputedStyle(noti_msg).maxWidth) * h2));
    cg_height = l2 * h2;
    cgc.style.height = `calc(${cg_height > 0 ? cg_height - h2 : 0}px + 135px)`;

    const failc = document.getElementById("failc");
    const fail_msg = failc.querySelector(".rtxt");
    fail_msg.innerHTML = (fail_unv.length === 0 ? "Empty." : fail_unv.join("<br />"));
    let h3 = parseInt(getComputedStyle(fail_msg).lineHeight);
    let l3 = Math.ceil((fail_msg.getBoundingClientRect().width * fail_msg.getBoundingClientRect().height) / (parseFloat(getComputedStyle(noti_msg).maxWidth) * h3));
    fail_height = l3 * h3;
    failc.style.height = `calc(${fail_height > 0 ? fail_height - h3 : 0}px + 135px)`;

    const warnc = document.getElementById("warnc");
    const warn_msg = warnc.querySelector(".rtxt");
    warn_msg.innerHTML = (warn_unv.length === 0 ? "Empty." : warn_unv.join("<br />"));
    let h4 = parseInt(getComputedStyle(warn_msg).lineHeight);
    let l4 = Math.ceil((warn_msg.getBoundingClientRect().width * warn_msg.getBoundingClientRect().height) / (parseFloat(getComputedStyle(noti_msg).maxWidth) * h4));
    warn_height = l4 * h4;
    warnc.style.height = `calc(${warn_height > 0 ? warn_height - h4 : 0}px + 135px)`;

    const synchrc = document.getElementById("synchrc");
    const synchr_msg = synchrc.querySelector(".rtxt");
    synchr_msg.innerHTML = (synchr_unv.length === 0 ? "Empty." : synchr_unv.join("<br />"));
    let h5 = parseInt(getComputedStyle(synchr_msg).lineHeight);
    let l5 = Math.ceil((synchr_msg.getBoundingClientRect().width * synchr_msg.getBoundingClientRect().height) / (parseFloat(getComputedStyle(noti_msg).maxWidth) * h5));
    synchr_height = l5 * h5;
    synchrc.style.height = `calc(${synchr_height > 0 ? synchr_height - h5 : 0}px + 135px)`;
}

function pos(p) {
    let total = 3 * window.innerHeight / 100;
    function fn(w) {
        w.forEach((window) => {
            const wh = window.offsetHeight;
            window.style.transition = `top 550ms ${easing}`;
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

function create(window) {
    if (window.className !== "rz-window") {
        windows.push(window);
        pos(true);
    } else {
        rzwin.push(window);
        pos(false);
    }
}

function close(window) {
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

function smarttime(str) {
    str = String(str);
    str = str.replace(/\s+/g, "");
    let zh = 0; // 中文字符数。
    let en = 0; // 英文字符数。
    let ma = 0; // 标点符号数。（包括全角符号和半角符号）
    if (deftime === "Smart") {
        for (var i = 0; i <= str.length - 1; i++) {
            if (alphabets.includes(str[i])) {
                en++;
            } else if (marks.includes(str[i])) {
                ma++;
            } else {
                zh++;
            }
        }
        let time = zh * 165 + en * 95 + ma * 50;
        return (time > 1250 ? time : 1250);
    } else {
        return deftime;
    }
}

async function fn7() { // 网站介绍。
    let j1 = false; // 移动至 “选项”。
    let j2 = false;
    let j3 = false; // 移动至 “未读信息”。
    let w1 = false; // 完成 “选项” 介绍。
    let w2 = false; // 完成 “未读信息” 介绍。
    let w3 = false; // 完成所有介绍。

    const ctrl = document.querySelector(".control-pad");
    const inf = document.querySelector(".information-table");
    const ebox = document.getElementById("easing");
    const tbox = document.getElementById("deftime");
    const wbox = document.getElementById("defwid");
    const hbox = document.getElementById("defhei");

    await wz("Welcome to The Play Games official website! Now it's time to familiarize yourself with it.");
    noti("Move your mouse to the upper left corner.");
    control_block = true;

    const i1 = setInterval(async () => {
        if (getComputedStyle(ctrl).animationName === "jr_ctrl" && j1 === false) {
            j1 = true;
            await wz(`As you see, it's "Options" here. You can modify any special parameters of the website here.`);
            let q1 = await xz("Need I show you how to modify?", 2, ["Yes.", "No."]);
            if (q1 === "Yes.") {
                await wz("You can click the buttons or input the values directly to modify the variables.");
                let q2 = await xz("Choose which variable you want to modify:", 4, ["easing", "deftime", "defwid", "defhei"]);
                noti("Please modify this variable.");
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
                await wz("OK, let's back to the topic.");
                control_block = false;
                control_moved = true;
                w1 = true;
            }
            clearInterval(i1);
        }
    }, 250);

    const i2 = setInterval(async () => {
        if (w1 === true && j2 === false) {
            j2 = true;
            await wz(`The following is the "Unread Messages".`);
            noti("Move your mouse to the upper right corner.");
            inf_block = true;
            const i3 = setInterval(async () => {
                if (getComputedStyle(inf).animationName === "jr_inf" && j3 === false) {
                    j3 = true;
                    await wz(`At "Unread Messages", you can see all the messages that you haven't read yet.`);
                    inf_block = false;
                    inf_moved = true;
                    w2 = true;
                    clearInterval(i3);
                }
            }, 250);
            clearInterval(i2);
        }
    }, 250);

    const i3 = setInterval(async () => {
        if (w2 === true && w3 === false) {
            w3 = true;
            await wz("Congratulations! You have finished the tour. Thank you for your cooperation for The Play Games.");
            control_block = false;
            control_moved = true;
            clearInterval(i3);
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
        rz(`Heads up! You have an unread ${fn_name}() message.`);
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
            case "Inp":
                inp_unv.push(e.innerHTML);
                break;
            case "Synchr":
                synchr_unv.push(e.innerHTML);
                break;
            case "Xz":
                xz_unv.push(e.innerHTML);
                break;
            case "Lj":
                lj_unv.push(e.innerHTML);
                break;
            case "Zd":
                zd_unv.push(e.innerHTML);
                break;
            case "Timer":
                timer_unv.push(e.innerHTML);
                break;
        }
    }
}