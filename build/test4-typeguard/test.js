"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
let response = {
    status: PaymentStatus.Success,
    data: {
        sum: 100,
        from: 122,
        to: 124,
        databaseId: 12
    }
};
function isIResponseSuccess(res) {
    return res.status === PaymentStatus.Success;
}
function getIdFromData(res) {
    if (isIResponseSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
console.log(getIdFromData(response));
