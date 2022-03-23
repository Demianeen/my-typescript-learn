"use strict";
var SORT_ORDER;
(function (SORT_ORDER) {
    SORT_ORDER[SORT_ORDER["ASCENDING"] = 0] = "ASCENDING";
    SORT_ORDER[SORT_ORDER["DESCENDING"] = 1] = "DESCENDING";
})(SORT_ORDER || (SORT_ORDER = {}));
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(array, sortType = SORT_ORDER.ASCENDING) {
    return array.sort((a, b) => {
        switch (sortType) {
            case SORT_ORDER.ASCENDING:
                return a.id - b.id;
            case SORT_ORDER.DESCENDING:
                return b.id - a.id;
        }
    });
}
console.log(sortById(data));
console.log(sortById(data, SORT_ORDER.DESCENDING));
