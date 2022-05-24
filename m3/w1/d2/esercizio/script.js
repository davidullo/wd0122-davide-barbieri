var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (deposit) {
        this.balanceInit = this.balanceInit + deposit;
        return deposit;
    };
    SonAccount.prototype.oneWithdraw = function (withdraw) {
        this.balanceInit = this.balanceInit - withdraw;
        return withdraw;
    };
    SonAccount.prototype.twoWithdraw = function (withdraw) {
        this.balanceInit = this.balanceInit - withdraw;
        return withdraw;
    };
    SonAccount.prototype.totalBalance = function () {
        return this.balanceInit + '€';
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(balanceInit) {
        this.interest = 10;
        this.balanceInit = balanceInit;
    }
    MotherAccount.prototype.oneDeposit = function (deposit) {
        this.balanceInit = this.balanceInit + deposit;
        return deposit;
    };
    MotherAccount.prototype.oneWithdraw = function (withdraw) {
        this.balanceInit = this.balanceInit - withdraw;
        return withdraw;
    };
    MotherAccount.prototype.twoWithdraw = function (withdraw) {
        this.balanceInit = this.balanceInit - withdraw;
        return withdraw;
    };
    MotherAccount.prototype.totalBalance = function () {
        var totalInterest = this.balanceInit - (this.balanceInit * this.interest) / 100;
        return totalInterest + '€';
    };
    return MotherAccount;
}());
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
var son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.oneDeposit(1000));
console.log('withdraw:-' + son.oneWithdraw(123));
console.log('withdraw:-' + son.twoWithdraw(534));
console.log('totalBalance:' + son.totalBalance());
var mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.oneDeposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
