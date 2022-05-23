var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
// let user: User = new User();
var user = {
    name: 'Mario',
    lastName: 'Rossi',
    age: 32,
    address: {
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
};
var user2 = {
    name: 'Rosa',
    lastName: 'Verdi',
    age: 27,
    address: {
        via: 'delle vie',
        civico: 8,
        citta: 'Firenze'
    }
};
var users = [user, user2];
console.log(users);
// Math.floor arrotonda per difetto (perché floor è pavimento, che sta in basso)
// Math.ceil arrotonda per eccesso (perché ceil è soffitto, che sta in alto)
// Math.round arrotonda fino al numero più vicino
