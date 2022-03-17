abstract class Controller {
    abstract handle(req: any): void;

    handleWithLogs (req: any) {
        console.log('start');
        this.handle(req);
        console.log('and');
    }
}

class UserConroller extends Controller {
    handle(req: any): void {
        console.log(req);
    }
}