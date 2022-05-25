class Test {
    public readonly name: string;
    public email: string;
    // public id: number; // Il readonly lo posso mettere o qui oppure nel costruttore. Siccome l'ho messo nel costruttore, devo eliminare questa riga o me lo segnerà come duplicato

    constructor(name: string, readonly id: number) {
        this.name = name;
        this.id = id;
    }

    public checkEmail(email: string): void {
        if (this.email == email) {
            throw new Error('Email già esistente')
        }
        this.email = email;
    }
}

let x = new Test('Giovanna', 1);
console.log(x.id, x.name);
