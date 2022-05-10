interface IUserService {
    users: number;
    getUsers(): number;
}

@createdAtAdvanced
class UserService1 implements IUserService {
    users: number = 1000;
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
    }
}

type CreatedAt = { 
    createdAt: Date;
}

console.log((new UserService() as IUserService & CreatedAt).createdAt);