const addValues = (a: number, b: number) => {
	return a + b;
};

//Enums are global constants that are object like
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

if (Role.ADMIN === 0) {
	console.log('Yes ooo');
} else {
	console.log('Na lie oooo');
}

console.log(addValues(1, 2));

const Person = {
	name: 'Ben',
	age: 29,
	profession: 'Frontend Engineer',
	health: ['good', 73, 44.55],
	addSum: (a: number, b: number, c: number) => a + b - c,
};
console.log(Person.addSum(Person.age, Person.age, Person.age));

const Person2: {
	name: string;
	age: number;
	profession: string;
	health: [string, number, number];
} = {
	name: 'Ben',
	age: 29,
	profession: 'Frontend Engineer',
	health: ['good', 73, 44.55],
};
let nameOfDev = Person2.name;
console.log(nameOfDev);
const namer = (name) => {
	let guy = nameOfDev;

	if (
		name === nameOfDev &&
		typeof guy === 'string' &&
		nameOfDev.length === 3 &&
		typeof Person2 === 'object'
	) {
		return `Grant ${guy} access`;
	} else {
		return 'Criminal';
	}
};
console.log(namer('Ben'));

const advancedArray = [
	{ name: 'Busola', age: 12, sex: 'F' },
	{ name: 'Amara', age: 22, sex: 'F' },
	{ name: 'Ijyke', age: 42, sex: 'M' },
	{ name: 'Dave', age: 52, sex: 'F' },
	{ name: 'Ejiro', age: 62, sex: 'F' },
	{ name: 'Musa', age: 72, sex: 'M' },
	{ name: 'Buhari', age: 22, sex: 'M' },
	{ name: 'Manny', age: 16, sex: 'F' },
	{ name: 'Bayo', age: 18, sex: 'F' },
	{ name: 'Jide', age: 19, sex: 'F' },
	{ name: 'Amaka', age: 15, sex: 'm' },
	{ name: 'Williams', age: 19, sex: 'M' },
];

// interface {
//     array: Array
// }

const arraySorter = (array) => {
	for (let i = 1; i < array.length; i++) {
		if (array[i].name === 'Amara') {
			return 'Yes ooo ';
		} else {
			return 'Nope';
		}
	}
};
console.log(arraySorter(advancedArray));
