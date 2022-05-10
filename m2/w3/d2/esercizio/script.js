// ******* ESERCIZIO 1 *******
class Persone {
    constructor(nome, età) {
        this.name = nome;
        this.age = età;

    }
    comparaEta(person) {
        if (this.age > person.age) {
            console.log(this.name + ' è più vecchio di ' + person.name);
        }
        else if (this.age < person.age) {
            console.log(this.name + ' è più giovane di ' + person.name);
        }
        else {
            console.log(this.name + ' e ' + person.name + ' hanno la stessa età');
        }
    }
}

let p1 = new Persone('Davide', 27)
let p2 = new Persone('Francesco', 34)
let p3 = new Persone('Giovanni', 19)

// ******* ESERCIZIO 2 *******

class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1
    }

    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        return this
    }
    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        return this
    }
    firstPage() {
        this.currentPage = 1
        return this
    }
    lastPage() {
        this.currentPage = this.totalPages
        return this
    }

    goToPage(page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            return this
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            return this
        }
    }

    getVisibleItems() {
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let strHtml = '';
        lista.forEach((item) => {
            strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td></tr>`;
        });
        wrapper.innerHTML = strHtml;
    }
}

const users = [
    { id: 1, nome: 'Marco', cognome: 'Fantoni' },
    { id: 2, nome: 'Davide', cognome: 'Barbieri' },
    { id: 3, nome: 'Franco', cognome: 'Verdi' },
    { id: 4, nome: 'Gianni', cognome: 'Rossi' },
    { id: 5, nome: 'Alessandro', cognome: 'Bianchi' },
    { id: 6, nome: 'Renato', cognome: 'Neri' },
    { id: 7, nome: 'Ivan', cognome: 'Martini' },
    { id: 8, nome: 'Roberto', cognome: 'Ferrari' },
];

p = new Pagination(users, 2);
p.getVisibleItems();
const primo = document.querySelector('#primo')
primo.addEventListener('click', function () {
    p.firstPage();
    p.getVisibleItems();
});
const ultimo = document.querySelector('#ultimo')
ultimo.addEventListener('click', function () {
    p.lastPage();
    p.getVisibleItems();
});
const precedente = document.querySelector('#precedente')
precedente.addEventListener('click', function () {
    p.prevPage();
    p.getVisibleItems();
});
const successivo = document.querySelector('#successivo')
successivo.addEventListener('click', function () {
    p.nextPage();
    p.getVisibleItems();
});