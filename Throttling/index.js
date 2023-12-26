let counter = 0;

const clickMe = () => {
    console.log("Function tiggered", counter++)
}

const throttle = function (func, timeout) {
    let flag = true;
    let lastArgs;

    return (...args) => {
        if (flag) {
            func.apply(this, args);
            flag = false;

            setTimeout(() => {
                flag = true;
                if (lastArgs) {
                    func.apply(this, lastArgs);
                    lastArgs = null;
                }
            }, timeout);
        } else {
            lastArgs = args;
        }
    };
};

const throttleClickMe = throttle(clickMe, 300);

const ButtonClick = () => {
    throttleClickMe();
};