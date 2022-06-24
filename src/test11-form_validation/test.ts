interface IForm {
    username: string;
    password: string;
}

const form: IForm = {
	username: 'Demian',
	password: 'Ader'
};

type isValid = boolean;

type Validation<T> = {
    [Property in keyof T]: { isValid: true } | { isValid: false, errorMessage: string };
}

const formValidation: Validation<IForm> = {
	username: { isValid: true },
	password: { isValid: false, errorMessage: 'Some error' }
};