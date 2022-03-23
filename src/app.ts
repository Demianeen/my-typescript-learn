interface IUser {
    name: string;
    age: number;
}

type KeysOfUser = keyof IUser;

function getValue<T, K  extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: IUser = {
    name: 'Valentin',
    age: 25
}

console.log(getValue(user, 'name'));