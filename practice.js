var addValues = function (a, b) {
    return a + b;
};
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
