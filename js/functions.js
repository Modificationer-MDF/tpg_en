// rz 函数。

function rz(string, time) {
    if (string == null) {
        warn("nul.");
        return;
    } else if (string == undefined) {
        warn("undefined.");
        return;
    }
    if (time == null || time == undefined) time = smarttime(string);

    const window = document.createElement("div");
    window.className = "rz-window";
    window.style.opacity = 0;
    const content = document.createElement("div");
    content.className = "rz-content";
    content.innerHTML = string;

    const l = Math.ceil(string.length / 14);
    const lh = parseInt(content.style.lineHeight);
    content.style.height = `${l * lh}px`;

    create(window);
    document.body.appendChild(window);
    window.appendChild(content);

    requestAnimationFrame(() => {
        window.style.animation = `jr_rz 550ms forwards ${easing}`;
    });

    setTimeout(() => {
        window.style.animation = `cc_rz 550ms forwards ${easing}`;
        setTimeout(() => {
            if (document.body.contains(window)) document.body.removeChild(window);
            close(window);
        }, 550);
    }, time);
}

// noti 函数。

function noti(string, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Noti(), the string parameter cannot be null or undefined.";
    }
    string = String(string);
    let s_replaced = string.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Notification";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Notification";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Noti(), the string parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "noti-window";
    const square = document.createElement("div");
    square.className = "noti-square";
    const icon = document.createElement("img");
    icon.src = "images/Notification.png";
    icon.style.opacity = 0;
    icon.style.transistion = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const bar = document.createElement("div");
    bar.className = "noti-progressbar";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(bar);

    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        icon.style.opacity = 1;
        txt.style.opacity = 1;
    });

    visible(content, "Noti");

    const l1 = Math.ceil(string.length / 14);
    const lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    let pro = 0;
    const interval = setInterval(() => {
        pro += 10 / (smarttime(string) / 100);
        bar.style.width = `${pro}%`;
        if (pro >= 100) {
            clearInterval(interval);
        }
    }, 10);

    setTimeout(() => {
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        icon.style.opacity = 0;
        txt.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows);
            }, 550);    
        });
    }, smarttime(string));
}

// cg 函数。

function cg(string, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Cg(), the string parameter cannot be null or undefined.";
    }
    string = String(string);
    let s_replaced = string.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Success";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Success";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Cg(), the string parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "cg-window";
    const square = document.createElement("div");
    square.className = "cg-square";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const icon = document.createElement("img");
    icon.src = "images/Suc.png";
    icon.style.opacity = 0;
    icon.style.transistion = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const bar = document.createElement("div");
    bar.className = "cg-progressbar";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(bar);

    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        txt.style.opacity = 1;
        icon.style.opacity = 1;
    });

    const l1 = Math.ceil(string.length / 14);
    var lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    let pro = 0;
    const interval = setInterval(() => {
        pro += 10 / (smarttime(string) / 100);
        bar.style.width = `${pro}%`;
        if (pro >= 100) {
            clearInterval(interval);
        }
    }, 10);

    visible(content, "Cg");

    setTimeout(() => {
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        txt.style.opacity = 0;
        icon.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows)
            }, 550);
        });
    }, smarttime(string));
}

// fail 函数。

function fail(string, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Fail(), the string parameter cannot be null or undefined.";
    }
    string = String(string);
    let s_replaced = string.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Failed";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Failed";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Fail(), the string parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "fail-window";
    const square = document.createElement("div");
    square.className = "fail-square";
    const icon = document.createElement("img");
    icon.className = "fail-icon";
    icon.style.opacity = 0;
    icon.style.transistion = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const bar = document.createElement("div");
    bar.className = "fail-progressbar";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(bar);

    icon.src = "images/Err.png";
    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        icon.style.opacity = 1;
        txt.style.opacity = 1;
    });

    const l1 = Math.ceil(string.length / 14);
    var lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    let pro = 0;
    const interval = setInterval(() => {
        pro += 10 / (smarttime(string) / 100);
        bar.style.width = `${pro}%`;
        if (pro >= 100) {
            clearInterval(interval);
        }
    }, 10);

    visible(content, "Fail")

    setTimeout(() => {
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        icon.style.opacity = 0;
        txt.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows)
            }, 550);
        });
    }, smarttime(string));
}

// warn 函数。

function warn(string, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Warn(), the string parameter cannot be null or undefined.";
    }
    string = String(string);
    let s_replaced = string.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Warning";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Warning";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Warn(), the string parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "warn-window";
    const square = document.createElement("div");
    square.className = "warn-square";
    const icon = document.createElement("img");
    icon.className = "warn-icon";
    icon.style.opacity = 0;
    icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const bar = document.createElement("div");
    bar.className = "warn-progressbar";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(bar);

    icon.src = "images/Exc.png";
    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        icon.style.opacity = 1;
        txt.style.opacity = 1;
    });

    const l1 = Math.ceil(string.length / 14);
    var lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    let pro = 0;
    const interval = setInterval(() => {
        pro += 10 / (smarttime(string) / 100);
        bar.style.width = `${pro}%`;
        if (pro >= 100) {
            clearInterval(interval);
        }
    }, 10);

    visible(content, "Warn");

    setTimeout(() => {
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        icon.style.opacity = 0;
        txt.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows)
            }, 550);
        });
    }, smarttime(string));
}

// inp 函数。

async function inp(string, title) {
    return new Promise((resolve) => {
        if (string == null || string == undefined) {
            fail("You can't input null or undefined!");
            return "In Inp(), the string parameter cannot be null or undefined.";
        }
        string = String(string);
        let s_replaced = string.replace(/\s+/g, "");
        if (title == null || title == undefined) title = "Input";
        else {
            title = String(title);
            let t_replaced = title.replace(/\s+/g, "");
            if (t_replaced === "") title = "Input";
        }
        if (s_replaced === "") {
            warn("You can't input an empty string.");
            return "In Inp(), the string parameter cannot be an empty string.";
        }

        const window = document.createElement("div");
        window.className = "inp-window";
        const square = document.createElement("div");
        square.className = "inp-square";
        const icon = document.createElement("img");
        icon.className = "inp-icon";
        icon.style.opacity = 0;
        icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const txt = document.createElement("div");
        txt.className = "fn-title";
        txt.style.opacity = 0;
        txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const content = document.createElement("div");
        content.className = "fn-content";
        content.style.opacity = 0;
        content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const box = document.createElement("textarea");
        box.type = "text";
        box.className = "inp-box";
        box.style.opacity = 0;
        box.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        box.style.resize = "none";
        box.focus();

        visible(content, "Inp");

        create(window);
        document.body.appendChild(window);
        window.appendChild(square);
        square.appendChild(icon);
        square.appendChild(txt);
        window.appendChild(content);
        window.appendChild(box);
        
        icon.src = "images/Inp.png";
        window.style.animation = `jr_fn 550ms forwards ${easing}`;
        content.innerHTML = string;
        txt.innerHTML = title;

        window.addEventListener("animationend", () => {
            content.style.transform = "translateY(0%)";
            content.style.opacity = 1;
            box.style.opacity = 1;
            icon.style.opacity = 1;
            txt.style.opacity = 1;
        });

        const l1 = Math.ceil(string.length / 14);
        var lh1 = parseInt(content.style.lineHeight);
        content.style.height = `${l1 * lh1}px`;

        const l2 = Math.ceil(title.length / 14);
        content.style.marginTop = `${20 * (l2 + 1)}px`;

        box.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const value = box.value;
                content.style.transform = "translateY(-10%)";
                content.style.opacity = 0;
                box.style.opacity = 0;
                icon.style.opacity = 0;
                txt.style.opacity = 0;
                content.addEventListener("transitionend", () => {
                    window.style.animation = `cc_fn 550ms forwards ${easing}`;
                    setTimeout(() => {
                        resolve(value);
                        if (document.body.contains(window)) document.body.removeChild(window);
                        close(window, windows);
                    }, 550);
                });
            }
        });
    });
}

// xz 函数。

async function xz(string, n, names, title) {
    return new Promise((resolve) => {
        if (n === null || n === undefined) fail("The number of options entered must be a number.");
        else if (isNaN(n)) fail("The number of options entered must be a number.");
        else if (n <= 0) fail("Please enter a positive number.")
        n = Math.ceil(Number(n));
        const array = Array.from(names);

        const window = document.createElement("div");
        window.className = "xz-window";
        const square = document.createElement("div");
        square.className = "xz-square";
        const icon = document.createElement("img");
        icon.className = "xz-icon";
        icon.style.opacity = 0;
        icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const txt = document.createElement("div");
        txt.className = "fn-title";
        txt.style.opacity = 0;
        txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const content = document.createElement("div");
        content.className = "fn-content";
        content.style.opacity = 0;
        content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";

        if (string == null || string == undefined) {
            fail("You can't input null or undefined!");
            return "In Xz(), the string parameter cannot be null or undefined.";
        }
        string = String(string);
        let s_replaced = string.replace(/\s+/g, "");
        if (title == null || title == undefined) title = "Select";
        else {
            title = String(title);
            let t_replaced = title.replace(/\s+/g, "");
            if (t_replaced === "") title = "Select";
        }
        if (s_replaced === "") {
            warn("You can't input an empty string.");
            return "In Xz(), the string parameter cannot be an empty string.";
        }

        create(window);
        document.body.appendChild(window);
        window.appendChild(square);
        square.appendChild(icon);
        square.appendChild(txt);
        window.appendChild(content);

        icon.src = "images/Sel.png";
        window.style.animation = `jr_fn 550ms forwards ${easing}`;
        content.innerHTML = string;
        txt.innerHTML = title;

        visible(content, "Xz");

        const l1 = Math.ceil(string.length / 14);
        var lh1 = parseInt(content.style.lineHeight);
        content.style.height = `${l1 * lh1}px`;

        const l2 = Math.ceil(title.length / 14);
        content.style.marginTop = `${20 * (l2 + 1)}px`;

        const tohex = (r, g, b) => {
            const tohex_ = (value) => {
                const hex = value.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            };
            return `#${tohex_(r)}${tohex_(g)}${tohex_(b)}`;
        };

        const color = () => {
            const r = Math.floor(Math.random() * 128);
            const g = Math.floor(Math.random() * 64);
            const b = Math.floor(Math.random() * 255);
            return tohex(r, g, b);
        }

        for (let i = 0; i < n; i++) {
            const btn = document.createElement("button");
            array[i] = String(array[i]);
            btn.id = `btn${i}`;
            btn.innerHTML = array[i];

            btn.style.backgroundColor = `${color()}b0`;
            btn.style.backdropFilter = "blur(14px) saturate(250%)";
            btn.style.opacity = 0;
            btn.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
            btn.style.fontSize = "20px";
            btn.style.border = "none";
            btn.style.padding = "14px 25px";
            btn.style.textAlign = "center";
            btn.style.cursor = "pointer";
            btn.style.color = "white";
            btn.style.position = "absolute";
            btn.style.top = `${i * 60 + 60}px`;
            btn.style.flex = "1";
            content.style.marginBottom = `${80 + i * 60}px`;
            btn.style.left = "20px";

            window.addEventListener("animationend", () => {
                content.style.transform = "translateY(0%)";
                content.style.opacity = 1;
                btn.style.opacity = 1;
                icon.style.opacity = 1;
                txt.style.opacity = 1;
            });

            btn.onclick = () => {
                resolve(array[i]);
                content.style.opacity = 0;
                content.style.transform = "translateY(-10%)";
                btn.style.opacity = 0;
                icon.style.opacity = 0;
                txt.style.opacity = 0;
                content.addEventListener("transitionend", () => {
                    window.style.animation = `cc_fn 550ms forwards ${easing}`;
                    setTimeout(() => {
                        if (document.body.contains(window)) document.body.removeChild(window);
                        close(window, windows)
                    }, 550);
                });
            };
            content.appendChild(btn);
        }
    });
}

// synchr 函数。

async function synchr(string, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Synchr(), the string parameter cannot be null or undefined.";
    }
    string = String(string);
    let s_replaced = string.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Synchronize";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Synchronize";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Synchr(), the string parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "synchr-window";
    const square = document.createElement("div");
    square.className = "synchr-square";
    const icon = document.createElement("img");
    icon.className = "synchr-icon";
    icon.style.opacity = 0;
    icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const bar = document.createElement("div");
    bar.className = "synchr-progressbar";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(bar);

    icon.src = "images/Synchronization.png";
    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    rz(string);
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        icon.style.opacity = 1;
        txt.style.opacity = 1;
    });

    const l1 = Math.ceil(string.length / 14);
    var lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    visible(content, "Synchr");
    
    setTimeout(() => {
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        icon.style.opacity = 0;
        txt.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows)
            }, 550);
        });
    }, smarttime(string));
}

// lj 函数。

async function lj(string, url, title) {
    if (string == null || string == undefined) {
        fail("You can't input null or undefined!");
        return "In Lj(), the string parameter cannot be null or undefined.";
    }
    if (url == null || url == undefined) {
        warn("Cannot jump to null or undefined.");
        return "In Lj(), the url parameter cannot be null or undefined.";
    }
    string = String(string);
    url = String(url);
    let s_replaced = string.replace(/\s+/g, "");
    let u_replaced = url.replace(/\s+/g, "");
    if (title == null || title == undefined) title = "Link";
    else {
        title = String(title);
        let t_replaced = title.replace(/\s+/g, "");
        if (t_replaced === "") title = "Link";
    }
    if (s_replaced === "") {
        warn("You can't input an empty string.");
        return "In Lj(), the string parameter cannot be an empty string.";
    }
    if (u_replaced === "") {
        warn("Cannot jump to an empty string.");
        return "In Lj(), the url parameter cannot be an empty string.";
    }

    const window = document.createElement("div");
    window.className = "lj-window";
    const square = document.createElement("div");
    square.className = "lj-square";
    const icon = document.createElement("img");
    icon.className = "lj-icon";
    icon.style.opacity = 0;
    icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const txt = document.createElement("div");
    txt.className = "fn-title";
    txt.style.opacity = 0;
    txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const content = document.createElement("div");
    content.className = "fn-content";
    content.style.opacity = 0;
    content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
    const btn = document.createElement("button");
    btn.className = "lj-link";
    btn.style.opacity = 0;
    btn.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";

    create(window);
    document.body.appendChild(window);
    window.appendChild(square);
    square.appendChild(icon);
    square.appendChild(txt);
    window.appendChild(content);
    window.appendChild(btn);

    visible(content, "Lj");

    icon.src = "images/Link.png";
    window.style.animation = `jr_fn 550ms forwards ${easing}`;
    content.innerHTML = string;
    btn.innerHTML = url;
    txt.innerHTML = title;

    window.addEventListener("animationend", () => {
        content.style.transform = "translateY(0%)";
        content.style.opacity = 1;
        btn.style.opacity = 1;
        icon.style.opacity = 1;
        txt.style.opacity = 1;
    });

    const l1 = Math.ceil(string.length / 14);
    var lh1 = parseInt(content.style.lineHeight);
    content.style.height = `${l1 * lh1}px`;

    const l2 = Math.ceil(title.length / 14);
    content.style.marginTop = `${20 * (l2 + 1)}px`;

    btn.onclick = () => {
        if (!open(url, "_blank", `width=${defwid}, height=${defhei}`)) {
            warn("The window jumped has been blocked.");
        }
        content.style.opacity = 0;
        content.style.transform = "translateY(-10%)";
        btn.style.opacity = 0;
        icon.style.opacity = 0;
        txt.style.opacity = 0;
        content.addEventListener("transitionend", () => {
            window.style.animation = `cc_fn 550ms forwards ${easing}`;
            setTimeout(() => {
                if (document.body.contains(window)) document.body.removeChild(window);
                close(window, windows)
            }, 550);
        });
    }
}

// zd 函数。

async function zd(string, title) {
    return new Promise((resolve) => {
        if (string == null || string == undefined) {
            fail("You can't input null or undefined!");
            return "In Zd(), the string parameter cannot be null or undefined.";
        }
        string = String(string);
        let s_replaced = string.replace(/\s+/g, "");
        if (title == null || title == undefined) title = "Terminal";
        else {
            title = String(title);
            let t_replaced = title.replace(/\s+/g, "");
            if (t_replaced === "") title = "Terminal";
        }
        if (s_replaced === "") {
            warn("You can't input an empty string.");
            return "In Zd(), the string parameter cannot be an empty string.";
        }

        const window = document.createElement("div");
        window.className = "zd-window";
        const square = document.createElement("div");
        square.className = "zd-square";
        const icon = document.createElement("img");
        icon.className = "zd-icon";
        icon.style.opacity = 0;
        icon.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const txt = document.createElement("div");
        txt.className = "fn-title";
        txt.style.opacity = 0;
        txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const content = document.createElement("div");
        content.className = "fn-content";
        content.style.opacity = 0;
        content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const box = document.createElement("textarea");
        box.className = "zd-box";
        box.style.opacity = 0;
        box.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        box.style.resize = "none";
        box.focus();

        visible(content, "Zd");

        box.addEventListener("keypress", async (event) => {
            if (event.key === "Enter" && !event.shiftKey) {
                const value = box.value.trim();
                if (value === "") {
                    warn("You can't input an empty string.");
                    return;
                }
                try {
                    let k = await eval(value);
                    if (k !== undefined && k !== null) {
                        rz(k);
                        resolve(k);
                    } else if (k === undefined) {
                        rz("undefined.");
                        resolve();
                    } else if (k === null) {
                        rz("null.");
                        resolve();
                    }
                } catch (error) {
                    fail(error.message);
                    resolve();
                }
                content.style.opacity = 0;
                content.style.transform = "translateY(-10%)";
                box.style.opacity = 0;
                icon.style.opacity = 0;
                txt.style.opacity = 0;
                content.addEventListener("transitionend", () => {
                    window.style.animation = `cc_fn 550ms forwards ${easing}`;
                    setTimeout(() => {
                        if (document.body.contains(window)) document.body.removeChild(window);
                        close(window, windows);
                    }, 550);
                });
            } else if (event.key === "Enter" && event.shiftKey) {
                event.preventDefault();
                box.value += "\n";
            }
        });

        create(window);
        document.body.appendChild(window);
        window.appendChild(square);
        square.appendChild(icon);
        square.appendChild(txt);
        window.appendChild(content);
        window.appendChild(box);

        icon.src = "images/Com.png";
        window.style.animation = `jr_fn 550ms forwards ${easing}`;
        content.innerHTML = string;
        txt.innerHTML = title;

        window.addEventListener("animationend", () => {
            content.style.transform = "translateY(0%)";
            content.style.opacity = 1;
            box.style.opacity = 1;
            icon.style.opacity = 1;
            txt.style.opacity = 1;
        });

        const l1 = Math.ceil(string.length / 14);
        var lh1 = parseInt(content.style.lineHeight);
        content.style.height = `${l1 * lh1}px`;

        const l2 = Math.ceil(title.length / 14);
        content.style.marginTop = `${20 * (l2 + 1)}px`;
    });
}

// wz 函数。

async function timer(string, time, title) {
    return new Promise((resolve) => {
        let passed_time = 0;
        let unit;
        let transfer;
        if (string == null || string == undefined) {
            fail("You can't input null or undefined!");
            return "In Timer(), the string parameter cannot be null or undefined.";
        }
        if (time == null || time == undefined) {
            fail("Null and undefined are not allowed in time parameter.");
            return "In Timer(), the time parameter cannot be null or undefined.";
        }
        string = String(string);
        time = Number(time);
        let s_replaced = string.replace(/\s+/g, "");
        if (title == null || title == undefined) title = "Timer";
        if (isNaN(time)) {
            fail("The value of time parameter must be a number or a string of pure numbers.");
            return "In Timer(), the value of time parameter must be a number or a string of pure numbers.";
        } else if (time < 1250) {
            warn("The value of time parameter is too small to be accurate.");
            return "In Timer(), the value of time parameter must be greater than or equal to 1250.";
        } else if (time > 3.15576e10 * 1.1568) {
            warn("The value of time parameter is too large to be accurate.");
            return "In Timer(), the value of time parameter must be less than or equal to 6.048e10.";
        }
        else {
            title = String(title);
            let t_replaced = title.replace(/\s+/g, "");
            if (t_replaced === "") title = "Timer";
        }
        if (s_replaced === "") string = "";

        const window = document.createElement("div");
        window.className = "timer-window";
        const square = document.createElement("div");
        square.className = "timer-square";
        const icon = document.createElement("img");
        icon.src = "images/Timer.png";
        icon.style.opacity = 0;
        icon.style.transistion = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const txt = document.createElement("div");
        txt.className = "fn-title";
        txt.style.color = "black";
        txt.style.opacity = 0;
        txt.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const content = document.createElement("div");
        content.className = "fn-content";
        content.style.color = "black";
        content.style.opacity = 0;
        content.style.transition = "all 175ms cubic-bezier(0.33, 1, 0.68, 1)";
        const bar = document.createElement("div");
        bar.className = "timer-progressbar";

        create(window);
        document.body.appendChild(window);
        window.appendChild(square);
        square.appendChild(icon);
        square.appendChild(txt);
        window.appendChild(content);
        window.appendChild(bar);

        window.style.animation = `jr_fn 550ms forwards ${easing}`;
        txt.innerHTML = title;

        if (time < 6e4) {
            unit = "second(s)";
            transfer = 1000;
        } else if (time >= 6e4 && time < 3.6e6) {
            unit = "minute(s)";
            transfer = 6e4;
        } else if (time >= 3.6e6 && time < 8.64e7) {
            unit = "hour(s)";
            transfer = 3.6e6;
        } else if (time >= 8.64e7 && time < 6.048e8) {
            unit = "day(s)";
            transfer = 8.64e7;
        } else if (time >= 6.048e8 && time < 3.15576e10) {
            unit = "week(s)";
            transfer = 6.048e8;
        } else if (time >= 3.15576e10) {
            unit = "year(s)";
            transfer = 3.15576e10;
        }

        let i = setInterval(() => {
            passed_time += 10;
            content.innerHTML = `${string}<br />（${passed_time / 1000} second(s) / ${(time / transfer).toFixed(2)} ${unit}）`;
            if (passed_time >= time) {
                clearInterval(i);
            }
        }, 10);

        window.addEventListener("animationend", () => {
            content.style.transform = "translateY(0%)";
            content.style.opacity = 1;
            icon.style.opacity = 1;
            txt.style.opacity = 1;
        });

        visible(content, "Timer");

        const l1 = Math.ceil(string.length / 14);
        const lh1 = parseInt(content.style.lineHeight);
        content.style.height = `${l1 * lh1}px`;

        const l2 = Math.ceil(title.length / 14);
        content.style.marginTop = `${20 * (l2 + 1)}px`;

        let pro = 0;
        const interval = setInterval(() => {
            pro += 10 / (time / 100);
            bar.style.width = `${pro}%`;
            if (pro >= 100) {
                clearInterval(interval);
            }
        }, 10);

        setTimeout(() => {
            content.style.opacity = 0;
            content.style.transform = "translateY(-10%)";
            icon.style.opacity = 0;
            txt.style.opacity = 0;
            resolve(true);
            content.addEventListener("transitionend", () => {
                window.style.animation = `cc_fn 550ms forwards ${easing}`;
                setTimeout(() => {
                    if (document.body.contains(window)) document.body.removeChild(window);
                    close(window, windows);
                }, 550);
            });
        }, time);
    });
}

async function wz(string) {
    return new Promise((resolve) => {
        let clicked = false;
        if (string == null || string == undefined) {
            fail("You can't input null or undefined!");
            resolve(39);
            return;
        }

        const window = document.createElement("div");
        window.className = "wz-window";
        const txt = document.createElement("pre");
        txt.className = "wz-content";
        txt.innerHTML = string;
        const btn = document.createElement("img");
        btn.className = "wz-icon";
        btn.src = "images/Next.png";
        const left = document.createElement("div");
        left.className = "wz-left";
        const right = document.createElement("div");
        right.className = "wz-right";

        document.body.appendChild(window);
        window.appendChild(left);
        window.appendChild(right);
        window.appendChild(txt);
        window.appendChild(btn);
        wzwin.push(window);

        window.style.animation = `jr1_wz 550ms forwards ${easing}`;
        left.style.animation = `jr1_solid 550ms forwards ${easing}`;
        right.style.animation = `jr1_solid 550ms forwards ${easing}`;
        window.addEventListener("animationend", (e) => {
            if (e.animationName === "jr1_wz") {
                window.style.animation = `jr2_wz 550ms forwards ${easing}`;
                right.style.animation = `jr_right forwards 550ms ${easing}`;
                window.addEventListener("animationend", (f) => {
                    if (f.animationName === "jr2_wz") {
                        txt.style.animation = `jr_txt forwards 0.3s ${easing}`;
                        btn.style.animation = `jr_btn forwards 0.3s ${easing}`;
                    }
                });
            }

            btn.onclick = () => {
                if (clicked) {
                    warn("It's prohibited to click repeatedly.");
                    return "Clicking repeatedly may lead to unexpected errors.";
                }
                txt.style.animation = `cc_txt 0.3s forwards ${easing}`;
                btn.style.animation = `cc_btn 0.3s forwards ${easing}`;
                txt.addEventListener("animationend", (g) => {
                    if (g.animationName === "cc_txt") {
                        window.style.animation = `cc1_wz 550ms forwards ${easing}`;
                        left.style.animation = `cc_left 550ms forwards ${easing}`;
                        window.addEventListener("animationend", (h) => {
                            if (h.animationName === "cc1_wz") {
                                window.style.animation = `cc2_wz 550ms forwards ${easing}`;
                                left.style.animation = `cc1_solid 550ms forwards ${easing}`;
                                right.style.animation = `cc1_solid 550ms forwards ${easing}`;
                            }
                        });
                    }
                });
                clicked = true;
                const ani_end = () => {
                    window.removeEventListener("animationend", ani_end);
                };
                window.addEventListener("animationend", ani_end);
                resolve();
                right.addEventListener("animationend", () => {
                    if (document.body.contains(window)) document.body.removeChild(window);
                    wzwin.pop();
                });
            };
        });
    });
}