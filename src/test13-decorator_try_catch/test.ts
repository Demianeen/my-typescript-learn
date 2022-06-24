interface IUserService2 {
    users: number;
    getUsers(): number;
}

class UserService2 implements IUserService2 {
	users = 1000;

    @Catch({ rethrow: true})
	getUsers(): number {
		throw new Error('Error');
	}
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
	return (
		target: object, 
		_: string | symbol, 
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {

		const oldValue = descriptor.value;
		descriptor.value = (...args: any[]) => {
			try { 
				// better use two decorators: catch and catchPromise for async functions
				return oldValue?.apply(target, args);
			} catch (e) {
				if (e instanceof Error) {
					console.log(e.message);
					if(rethrow) {
						throw e;
					}
				}
			}
		};
	};
}

console.log(new UserService2().getUsers());