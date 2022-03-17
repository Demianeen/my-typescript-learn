"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class LoggerWithDate extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new LoggerWithDate();
logger.logWithDate('Привіт');
