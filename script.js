// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = this.title;
    author = this.author;
    pages = this.pages;
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`"${this.title}" ${this.author} ${this.pages} pages`);
    }
}

const book1 = new Book('War & peace', 'Lev Tolstoy', 1000);
book1.displayInfo();

console.log('');
// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

class Student {
    name = this.name;
    age = this.age;
    grade = this.grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`"${this.name}",
${this.age}, 
"${this.grade}"`);
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


console.log('');
// ****** Задача необязательная для выполнения:

// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
    static accountNumber = 100000;
    name = this.name;
    clientsList = [];
    accountsList = [];
    constructor(name, clientsList, accountsList) {
        this.name = name;
        this.clientsList = clientsList;
        this.accountsList = accountsList;
    };

    addClient(client) {
        client.account = new Map();
        client.account.set(++Bank.accountNumber, null)
        this.clientsList.push(client);
        this.accountsList.push(client.account);
    };

    openAccount(client, amount) {
        this.clientsList.forEach(element => {
            if (element.name === client.name) {
                const key2 = Array.from(element.account.keys())[0];
                client.account.set(key2, amount);
            }
        });
    };

    checkBalance(accountNumber) {
        this.accountsList.forEach(element => {
            const key2 = Array.from(element.keys())[0];
            if (key2 === accountNumber) {
                console.log(element.get(key2));
            };
        });
    };

    deposit(accountNumber, amount) {
        this.accountsList.forEach(element => {
            const key2 = Array.from(element.keys())[0];
            if (key2 === accountNumber) {
                amount += element.get(key2);
                element.set(key2, amount);
            };
        });
    };

    withdraw(accountNumber, amount) {
        this.accountsList.forEach(element => {
            const key2 = Array.from(element.keys())[0];
            if (key2 === accountNumber) {
                if (element.get(key2) > amount) {
                    const balance = element.get(key2) - amount;
                    element.set(key2, balance);
                    console.log(`Withdrawn ${amount} from account ${key2}. New balance: ${balance}`);
                } else {
                    console.log(`Insufficient funds in account ${key2}`);
                }
            };
        });
    };
};

class Client {
    name = this.name;
    age = this.age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
};

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

const bank1 = new Bank('First', [], []);

bank1.addClient(client1);
bank1.addClient(client2);

bank1.openAccount(client1, 1000);
bank1.openAccount(client2, 500);

bank1.checkBalance(100001);
bank1.checkBalance(100002);
bank1.checkBalance(Array.from(client1.account.keys())[0]);

bank1.deposit(100001, 1000);
bank1.checkBalance(100001);

bank1.withdraw(100001, 1500);
bank1.withdraw(100001, 1500);
