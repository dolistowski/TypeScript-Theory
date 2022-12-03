// 1 PODSTAWOWE TYPY DANYCH
// NUMBER
// let
let age;
age = 40;
console.log(age);
// STRING
// const
const firstName = "John";
let surname = "Smith";
surname = "Novak";
// surname = true;
//BOOLEAN
let bool = true;
bool = false;
// bool = 123;
// 2 TYPOWANIE FUNKCJI
const add = (num1, num2) => {
    return num1 + num2;
};
function add2(num1, num2) {
    return num1 + num2;
}
;
const add3 = function (num1, num2) {
    return num1 + num2;
};
const logToConsole = (thingToDisplay) => {
    console.log(thingToDisplay);
};
// Zad 1. Napisz funkcję która będzie obliczała cene w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (prawda/fałsz)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.
const discount = true;
const price = 100;
// tu piszecie
// pod spodem wywołujecie, jako argumenty podajecie zmienne discount i price
function calculatePrice(originalPrice, hasDiscount) {
    if (hasDiscount === true) {
        return originalPrice * 0.77;
    }
    else {
        return originalPrice;
    }
}
console.log(calculatePrice(price, discount));
const calculatePrice2 = (originalPrice, hasDiscount) => hasDiscount ? originalPrice * 0.77 : originalPrice;
console.log(calculatePrice2(price, discount));
// 3 ELEMENTY HTML
// selektory
const categoryList = document.querySelector(".category"); // element to bardzo ogólny typ dla wszystkich elementów z domu, dlatego chcę element zamienić na typ ul czyli w przypadku TS HTMLUListElement
const input = document.querySelector("#name");
console.log(input.value);
const button = document.querySelector("button");
// event Listenery
// button.addEventListener("click", (event: MouseEvent) => {
//     console.log("Click button");
// });
// Zad 2.
// 1. Dodaj event listener na button (click)
// 2. Wylosuj czy użytkownik ma zniżke czy nie (Math.random())
// 3. Ściągnij wartość z inputu textowego, od razu zmień typ pozyskanej wartości na number
// 4. Wykonaj console.log You have to pay *wywołanie funkcji calculatePrice, argumenty to wartości z pkt 2 i 3, ${}
button.addEventListener("click", () => {
    const discount = Math.random() > 0.5 ? true : false;
    const price = +input.value;
    console.log(`You have to pay ${calculatePrice(price, discount)}`);
});
// 4 UNION TYPES
let test;
test = "test";
test = 21;
test = true;
let test1;
let test2;
let test3;
let test4;
let category;
category = "sport";
category = "life";
let miesiac = 1;
miesiac = 2;
miesiac = 3;
let john = {
    name: "John",
    surname: "Smith",
    age: 30,
    married: true,
};
let sarah = {
    name: "Sara",
    surname: "Smith",
    age: 30,
    // married: true,
};
let kevin = {
    name: "Kevin",
    surname: "Brown",
    age: 27,
    language: "Python",
    experience: 4,
};
// 7 TYPOWANIE LIST 
let list = [1, 2, 3, 4, 5, 6, 7, 8];
list = ["123", "321"];
list = ["123", 123];
// lista obiektów
const objList = [
    {
        name: "Kevin",
        surname: "Brown",
        age: 27,
        language: "Python",
        experience: 4,
    },
    {
        name: "John",
        surname: "Brown",
        age: 40,
        language: "C++",
        experience: 15,
    }
];
