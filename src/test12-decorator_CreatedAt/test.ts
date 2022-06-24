interface IUserService1 {
    users: number;
    getUsers(): number;
}

@createdAtAdvanced
class UserService1 implements IUserService1 {
	users = 1000;
	getUsers(): number {
		return this.users;
	}
}

function createdAt(target: Function) {
	target.prototype.createdAt = new Date();
}

function createdAtAdvanced<T extends { new(...args: any[]): {}}>(constructor: T) {
	return class extends constructor {
		createdAt = new Date();
	};
}

type CreatedAt = { 
    createdAt: Date;
}

console.log((new UserService1() as IUserService1 & CreatedAt).createdAt);