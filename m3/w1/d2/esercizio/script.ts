// class SonAccount {
//     public firstName: string;
//     public balanceInit: number = 0;
//     public totale: number = 0;

//     constructor(firstName: string, balanceInit: number) {
//         this.firstName = firstName;
//         this.balanceInit = balanceInit;
//     }

//     public oneDeposit(x: number): number {
//         let totale: number = this.balanceInit + x;
//         console.log(totale);
//         totale = this.balanceInit + x
//         return totale;
//     }

//     public oneWithdraw(x: number): number {
//         return this.balanceInit - x;
//     }
// }

// let son = new SonAccount('Davide', 100)
// console.log(son);
// console.log(son.oneDeposit(203));
// console.log(son.oneDeposit(203));
// console.log(son.oneWithdraw(203));


// class MotherAccount extends SonAccount {
//     public interest: number = 10;
//     constructor(firstName: string, balanceInit: number) {
//         super(firstName, balanceInit)
//     }
// }
// let mother = new MotherAccount('Maria', 1000, 10)
// console.log(mother);
// console.log(mother.oneDeposit(100));
// console.log(mother.oneDeposit(100));

class SonAccount {
    public balanceInit: number;
    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(deposit: number) {
        this.balanceInit = this.balanceInit + deposit
        return deposit;
    }
    oneWithdraw(withdraw: number) {
        this.balanceInit = this.balanceInit - withdraw
        return withdraw
    }
    twoWithdraw(withdraw: number) {
        this.balanceInit = this.balanceInit - withdraw
        return withdraw
    }
    totalBalance() {
        return this.balanceInit + '€'

    }
}

class MotherAccount {
    public balanceInit: number;
    public interest: number = 10;
    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(deposit: number) {
        this.balanceInit = this.balanceInit + deposit
        return deposit;
    }
    oneWithdraw(withdraw: number) {
        this.balanceInit = this.balanceInit - withdraw
        return withdraw
    }
    twoWithdraw(withdraw: number) {
        this.balanceInit = this.balanceInit - withdraw
        return withdraw
    }
    totalBalance() {
        let totalInterest: number = this.balanceInit - (this.balanceInit * this.interest) / 100;
        return totalInterest + '€';
    }
}


console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
let son = new SonAccount(0)
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.oneDeposit(1000));
console.log('withdraw:-' + son.oneWithdraw(123));
console.log('withdraw:-' + son.twoWithdraw(534));
console.log('totalBalance:' + son.totalBalance());

let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.oneDeposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());

