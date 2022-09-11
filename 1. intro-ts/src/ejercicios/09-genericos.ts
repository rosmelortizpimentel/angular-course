function queTipoSoy<T>(argumento: T) {
	return argumento;
}

const soyString = queTipoSoy('Hola Mundo');
const soyNumbero = queTipoSoy(100);
const soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const soyExplicito = queTipoSoy<number>(100);
console.log(soyString, soyNumbero, soyArreglo, soyExplicito);
