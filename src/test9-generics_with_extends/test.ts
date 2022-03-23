enum SORT_ORDER {
	ASCENDING,
	DESCENDING
}

interface ISort {
	id: number;
}

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

function sortById<T extends ISort>(array: T[], sortType: SORT_ORDER = SORT_ORDER.ASCENDING): T[] {
	return array.sort((a, b) => {
		switch (sortType) {
			case SORT_ORDER.ASCENDING:
				return a.id - b.id;
			case SORT_ORDER.DESCENDING:
				return b.id - a.id;
		}
	})
}

console.log(sortById(data));
console.log(sortById(data, SORT_ORDER.DESCENDING));