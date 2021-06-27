var addValues = function (a, b) {
    return a + b;
};
//Enums are global constants that are object like
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
if (Role.ADMIN === 0) {
    console.log('Yes ooo');
}
else {
    console.log('Na lie oooo');
}
console.log(addValues(1, 2));
var Person = {
    name: 'Ben',
    age: 29,
    profession: 'Frontend Engineer',
    health: ['good', 73, 44.55],
    addSum: function (a, b, c) { return a + b - c; }
};
console.log(Person.addSum(Person.age, Person.age, Person.age));
var Person2 = {
    name: 'Ben',
    age: 29,
    profession: 'Frontend Engineer',
    health: ['good', 73, 44.55]
};
var nameOfDev = Person2.name;
console.log(nameOfDev);
var namer = function (name) {
    var guy = nameOfDev;
    if (name === nameOfDev &&
        typeof guy === 'string' &&
        nameOfDev.length === 3 &&
        typeof Person2 === 'object') {
        return "Grant " + guy + " access";
    }
    else {
        return 'Criminal';
    }
};
console.log(namer('Ben'));
var advancedArray = [
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
var arraySorter = function (array) {
    for (var i = 1; i < array.length; i++) {
        if (array[i].name === 'Amara') {
            return 'Yes ooo ';
        }
        else {
            return 'Nope';
        }
    }
};
console.log(arraySorter(advancedArray));
