"use strict";
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Valentin',
    age: 25
};
console.log(getValue(user, 'name'));
