class User {
    name!: String; //
    lastName!: String; //
    age!: number;
    address!: Address;
}

class Address { // creo un tipo di dato per l'indirizzo
    via!: string;
    civico!: number;
    citta!: string;
}

// let user: User = new User();
let user: User = {
    name: 'Mario',
    lastName: 'Rossi',
    age: 32,
    address: {
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
};
let user2: User = {
    name: 'Rosa',
    lastName: 'Verdi',
    age: 27,
    address: {
        via: 'delle vie',
        civico: 8,
        citta: 'Firenze'
    }
};

let users: User[] = [user, user2]
console.log(users);


// Math.floor arrotonda per difetto (perché floor è pavimento, che sta in basso)
// Math.ceil arrotonda per eccesso (perché ceil è soffitto, che sta in alto)
// Math.round arrotonda fino al numero più vicino