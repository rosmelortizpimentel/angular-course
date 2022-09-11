const habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
	nombre: string;
	hp: number;
	habilidades: string[];
	puebloNatal?: String;
}

const personaje: Personaje = {
	nombre: 'Rosmel',
	hp: 100,
	habilidades,
};

console.log(personaje, habilidades);
