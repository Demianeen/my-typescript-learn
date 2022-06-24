interface IUserService {
	users: number;
	getUsersInDatabase(): number;
}


class UserService implements IUserService {
	users = 1000;
	getUsersInDatabase(): number {
		return this.users;
	}
}

function nullUsers(obj: IUserService): IUserService {
	obj.users = 0;
	return obj;
}

console.log(new UserService().getUsersInDatabase());
console.log(nullUsers(new UserService()).getUsersInDatabase());
console.log(new UserService().getUsersInDatabase());



// interface IUserService {
// 	users: number;
// 	getUsers(): number;
// }

// class UserService implements IUserService {
// 	@Max(100)
// 	users: number = 1000;

// 	getUsers(): number {
// 		throw new Error("Error");
// 	}
// }

// function Max(max: number) {
// 	return (target: Object, propertyKey: string | symbol) => {
// 		let value: number;
// 		const setter = function (newValue: number) {
// 			if (newValue > max) {
// 				console.log(`Maximum value that can be set: ${newValue}`);
// 			} else {
// 				value = newValue;
// 			}
// 		}

// 		const getter = function () {
// 			return value;
// 		}
		
// 		Object.defineProperty(target, propertyKey, {
// 			set: setter,
// 			get: getter
// 		});
// 	}
// }

// function Log(
// 	target: Object, 
// 	propertyKey: string | symbol, 
// 	descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// 	): TypedPropertyDescriptor<(...args: any[]) => any> | void {

// 	let oldValue = descriptor.value;
// 	descriptor.value = (...args: any[]) => {
// 		oldValue?.apply(target, args);
// 		console.log(oldValue?.toString());
// 	}
// }

// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 1000;
// console.log(userService.users);

// var arr = [3, 5, 7];