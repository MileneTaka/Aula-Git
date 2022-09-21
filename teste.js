console.log("Milene")

console.log("Takahashi")

let carro = {
    marca: "Fiat",
    modelo: "Uno",
 };
 
 function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
 }
 
 console.log(carro);
 
 console.log(new Carro("Renault", "Clio"));