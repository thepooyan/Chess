export default class Timer {
    #changeFn; #finishFn;

    constructor(seconds) {
        this.time = seconds;
        this.initialTime = seconds;
    }

    start() {
        this.rundown = setInterval(() => {
            this.time--;
            this.#changeFn && this.#changeFn(this);
            if (this.time <= 0) {
                this.#finishFn && this.#finishFn();
                clearInterval(this.rundown);
            }
        }, 1000);
    }
    pause() {
        clearInterval(this.rundown);
        this.rundown = null;
    }
    toggle() {
        if (this.rundown)
            this.pause()
        else
            this.start()
    }
    reset() {
        this.pause();
        this.time = this.initialTime;
    }
    set onfinish(fn) {
        this.#finishFn = fn;
    }
    set onchange(fn) {
        this.#changeFn = fn;
    }
    get getObj() {
        let minutes = Math.floor((this.time) / 60);
        let seconds = (this.time % 3600) % 60;

        return { seconds, minutes }
    }
    get getString() {
        let obj = this.getObj;

        let minutes = ('0' + obj.minutes).slice(-2);
        let seconds = ('0' + obj.seconds).slice(-2);

        return `${minutes}:${seconds}`;
    }
}