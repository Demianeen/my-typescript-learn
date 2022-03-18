// abstract class Controller {
//     abstract handle(req: any): void;

//     handleWithLogs (req: any) {
//         console.log('start');
//         this.handle(req);
//         console.log('and');
//     }
// }

// class UserConroller extends Controller {
//     handle(req: any): void {
//         console.log(req);
//     }
// }

// const userConroller = new UserConroller();
// userConroller.handle.apply('hjjd', ['zkxc']);

interface ICheck {
    drive: boolean;
    [check: string]: boolean;
}

let a: ICheck = {
    drive: false,
    2: false
}

a.drive = true;

console.log(a['req']);