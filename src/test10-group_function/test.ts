// my variant

// interface IGroup {
//     group: number;
// }

// interface ISortedGroup {
//     [value: string]: Object[];
// }

// function sortByGroups<T extends IGroup>(obj: T[]): ISortedGroup {
//     const sortedObj: ISortedGroup = {};
//     obj.map((item: T) => {
//         if(item.group.toString() in sortedObj) {
//             sortedObj[item.group.toString()].push(item);
//         } else {
//             sortedObj[item.group.toString()] = [item];
//         }
//     })
//     return sortedObj;
// }

// console.log(sortByGroups([
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ]));

// teacher's variant

interface IGroup<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

const groupData = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce((map: IGroup<T>, item) => {
        const itemKey = item[key];
        let currentElement = map[itemKey];
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        } else {
            currentElement = [item];
        }
        map[itemKey] = currentElement;
        return map;
    }, {})
}

console.log(group(groupData, 'group'));