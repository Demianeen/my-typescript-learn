"use strict";
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
// ----------------------------------------------------------------
// interface IPersonProperties {
//     firstName: string;
//     lastName: string;
//     fullName?: (firstName: string, lastName: string) => string;
// }
// class Person implements IPersonProperties {
//     public firstName: string;
//     public lastName: string;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName = (): string => {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person = new Person('John', 'Doe');
// const person2 = {
//     firstName:"Mary",
//     lastName: "Doe",
// }
// console.log(person.fullName()); 

