const addValues = (a: number, b: number) => {
	return a + b;
};

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
