"use strict";
function toString(value) {
    if (Array.isArray(value)) {
        return value.toString();
    }
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'symbol':
        case 'function':
            return value.toString();
        case 'object':
            return JSON.stringify(value);
        default:
            return undefined;
    }
}
console.log(toString(1));
console.log(toString('sda'));
console.log(toString(true));
console.log(toString(['sdad', 'aboba']));
console.log(toString([undefined]));
console.log(toString(foo1()));
function foo1() {
    return function foo2() {
    };
}
