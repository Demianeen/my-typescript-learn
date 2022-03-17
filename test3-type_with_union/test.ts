interface Reqest {
	sum: number;
	from: number;
	to: number;
}

interface ReplySuccess {
	status: "success";
	data: Reqest & {
		databaseId: number; 
	}
} 

interface ReplyFailed {
	status: "failed";
	data: {
		errorMessage: string;
		errorCode: number;
	}
};