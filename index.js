var focusButton = document.getElementById("focus");
var buttons = document.querySelectorAll(".btn");
var shortBreakButton = document.getElementById("shortbreak");
var longBreakButton = document.getElementById("longbreak");
var startbtn = document.getElementById("btn-start");
var reset = document.getElementById("btn-reset");
var pause = document.getElementById("btn-pause");
var time = document.getElementById("time");
var set;
var count = 59;
var paused = true;
var active = "focus";
var minCount = 24;
time.textContent = "".concat(minCount + 1, ":00");
var appendZero = function (value) {
    return value < 10 ? "0".concat(value) : value.toString();
};
var pauseTimer = function () {
    paused = true;
    if (set !== undefined) {
        clearInterval(set);
    }
    if (startbtn)
        startbtn.classList.remove("hide");
    if (pause)
        pause.classList.remove("show");
    if (reset)
        reset.classList.remove("show");
};
var removeFocus = function () {
    buttons.forEach(function (btn) {
        btn.classList.remove("btn-focus");
    });
};
focusButton === null || focusButton === void 0 ? void 0 : focusButton.addEventListener("click", function () {
    removeFocus();
    if (focusButton)
        focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    if (time)
        time.textContent = "".concat(minCount + 1, ":00");
});
shortBreakButton === null || shortBreakButton === void 0 ? void 0 : shortBreakButton.addEventListener("click", function () {
    active = "short";
    removeFocus();
    if (shortBreakButton)
        shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    if (time)
        time.textContent = "".concat(minCount + 1, ":00");
});
longBreakButton === null || longBreakButton === void 0 ? void 0 : longBreakButton.addEventListener("click", function () {
    active = "long";
    removeFocus();
    if (longBreakButton)
        longBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    if (time)
        time.textContent = "".concat(minCount + 1, ":00");
});
pause === null || pause === void 0 ? void 0 : pause.addEventListener("click", function () {
    pauseTimer();
});
startbtn === null || startbtn === void 0 ? void 0 : startbtn.addEventListener("click", function () {
    if (reset)
        reset.classList.add("show");
    if (pause)
        pause.classList.add("show");
    if (startbtn)
        startbtn.classList.add("hide");
    if (paused) {
        paused = false;
        if (time)
            time.textContent = "".concat(appendZero(minCount), ": ").concat(appendZero(count));
        set = window.setInterval(function () {
            count--;
            if (time)
                time.textContent = "".concat(appendZero(minCount), ": ").concat(appendZero(count));
            if (count === 0) {
                if (minCount !== 0) {
                    minCount--;
                    count = 59;
                }
                else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
    pauseTimer();
    minCount = 24;
    count = 59;
    if (time)
        time.textContent = "".concat(minCount + 1, ":00");
    if (reset)
        reset.classList.remove("show");
    if (pause)
        pause.classList.remove("show");
    if (startbtn)
        startbtn.classList.remove("remove");
});
