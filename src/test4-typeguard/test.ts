interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

type IPaymentRequest = IPayment

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

const response: IResponseSuccess = {
	status: PaymentStatus.Success,
	data: {
		sum: 100,
		from: 122,
		to: 124,
		databaseId: 12
	}
};

function isIResponseSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
	return (res as IResponseSuccess).status === PaymentStatus.Success;
}

function getIdFromData(res: IResponseSuccess | IResponseFailed): number {
	if(isIResponseSuccess(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(res.data.errorMessage);
	}
}

console.log(getIdFromData(response));