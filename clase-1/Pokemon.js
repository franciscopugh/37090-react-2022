class Pokemon {
    constructor(nombre, tipo, nivel, vida) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.vida = vida;
    }

    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }

}

/*
export class Electrico extends Pokemon {
    constructor(nombre, tipo, nivel, vida, dañoImpactrueno) {
        super(nombre,tipo, nivel, vida)
        this.dañoImpactrueno = dañoImpactrueno
    }
}

export class Fuego extends Pokemon {
    constructor(nombre, tipo, nivel, vida, dañoLlamarada) {
        super(nombre,tipo, nivel, vida)
        this.dañoLlamarada = dañoLlamarada
    }
}
*/

export default Pokemon