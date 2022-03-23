"use strict";
// my variant
const groupData = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let currentElement = map[itemKey];
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        }
        else {
            currentElement = [item];
        }
        map[itemKey] = currentElement;
        return map;
    }, {});
}
console.log(group(groupData, 'group'));
