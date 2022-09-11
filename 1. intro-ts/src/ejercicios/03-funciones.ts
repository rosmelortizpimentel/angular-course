function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

const resultado = sumar(10, 20);
const resultadoFlecha = sumarFlecha(20, 20);
console.log(resultado);
console.log(resultadoFlecha);

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

const multi = multiplicar(110, 20, 10);
console.log(multi);

interface PersonajeX {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}
function curar(personaje: PersonajeX, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeX = {
  nombre: "Rosmel",
  pv: 100,
  mostrarHp() {
    console.log("Puntos Vida:", this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
