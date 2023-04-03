class HeroesServices {

    constructor() {
        this.Heroes = [];
        this.generateData();
    }

    generateData() {
        this.Heroes = [
            {id: 1, name: "Saitama", age: 25, type: "Fisico", class: "B", position: 7},
            {id: 2, name: "Genos", age: 19, type: "Maquina", class: "S", position: 14},
            {id: 3, name: "King", age: 29, type: "Fisico", class: "S", position: 7},
            {id: 4, name: "Fubuki", age: 23, type: "Psiquico", class: "B", position: 1},
            {id: 5, name: "Silver Bang", age: 81, type: "Fisico", class: "S", position: 3},
            {id: 6, name: "Tatsumaki", age: "Desconocido", type: "Psiquico", class: "S", position: 2},
            {id: 7, name: "Puri Puri Prisionero", age: 33, type: "Fisico", class: "S", position: 17},
            {id: 8, name: "Ciclista Sin Licencia", age: 25, type: "Fisico", class: "C", position: 1},
            {id: 9, name: "Metal-Knight", age: "Desconocido", type: "Maquina", class: "S", position: 6},
            {id: 10, name: "Metal Bat", age: 17, type: "Arma", class: "S", position: 15},
        ];

    }

    allHeroes(){
        return new Promise((resolve, reject) => {
            resolve(this.Heroes);
        }) 
    }

    idHeroe(id){
        return this.Heroes.find(c => c.id === parseInt(id));;
    }

    createHeroe(newHeroe){
        this.Heroes.push(newHeroe);
    }

}

module.exports = HeroesServices;