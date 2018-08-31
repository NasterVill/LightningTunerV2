const FREQUENCY_MULTIPLIER = 500;
const DELAY = 800;

export default class AudioDummy {
    constructor(callback) {
        this.timerId = null;
        this.callback = callback;
    }

    generateFrequency = () => {
        let value = Math.abs(Math.random()) * FREQUENCY_MULTIPLIER;
        //console.log('generated:', value);
        this.callback(value);
        this.timerId = setTimeout(this.generateFrequency, DELAY);
    }

    init() {
        return 10;
    }

    run() {
        this.timerId = setTimeout(this.generateFrequency, DELAY);
    }

    stop() {
        clearTimeout(this.timerId);
    }
}
