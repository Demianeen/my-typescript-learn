"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('and');
    }
}
class UserConroller extends Controller {
    handle(req) {
        console.log(req);
    }
}
