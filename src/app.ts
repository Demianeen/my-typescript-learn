interface IUserService {
    users: number;
    getUsers(): number;
}

@setUsers(12)
class UserService implements IUserService {
    users: number = 1000;
    getUsers(): number {
        return this.users;
    }
}

function nullUsers(target: Function) {
    target.prototype.users = 0;
}

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    }
}

function setUsersAdvanced(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }
}

function threeUsersAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log((new UserService() as IUserService & CreatedAt).createdAt);