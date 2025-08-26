const notas = [];
for (let i = 1; i <= 4; i++) {
    const nota = prompt(`Ingrese la nota ${i}:`);
    notas.push(nota);
}
const suma = notas.reduce((acc, val) => acc + val, 0);
const promedio = suma / notas.length;
alert(`El promedio es: ${promedio}`);