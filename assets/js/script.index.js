
 const names = ["whinds", "Freeway", "Teste", "Maria"];

 names.forEach((name) => {
     console.log(`Hi, ${name}`);
 });


 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(numbers);

 numbers.forEach((number, index) => {
     if (number % 2 == 0) {
         console.log(`O número ${number} está na posição ${index}`);
     }
 });

 const cars = [
     {
         marca: "Ford",
         modelo: "Focus",
     },
     {
         marca: "BMW",
         modelo: "BMW 24",
     },
     {
         marca: "Fiast",
         modelo: "Palio",
     },
     {
         marca: "Audi",
         modelo: "A3",
     },
 ];

 cars.forEach((car) => {
     console.log(`Marca ${car.marca},
 Modelo ${car.modelo}`);
 });

class allCars {
    constructor(brand, modelo){
        this.brand = brand;
        this.modelo = modelo;
    }
}

class listCar {
    constructor(){
        this.car = [];
    }

    adicionar (allCars){
        this.car.push(allCars);
    }
}

const list = new listCar();

function addCar(){
    const brand = document.getElementById("marcaInput").value;
    const modelo = document.getElementById("modeloInput").value;

    const carro = new allCars(brand, modelo);
    list.adicionar(carro);

    list.car.forEach((cars) =>{
        console.log(`Marca: ${brand}, Modelo: ${modelo}`)
    })
};