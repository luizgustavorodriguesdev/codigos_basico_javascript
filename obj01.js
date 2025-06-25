//object literal    
const aluno = {
    nome: 'Lucas',
    idade: 20,
    curso: 'Engenharia de Software',
    notas: [8, 9, 10],
    endereco: {
        rua: 'Rua A',
        numero: 123,
        cidade: 'São Paulo'
    }  
}
console.log(aluno.nome); // Lucas
console.log(aluno['idade']); // 20
console.log(aluno.notas[0]); // 8

const acount ={
    nome: aluno.nome,
    idade: aluno.idade,
    curso: aluno.curso, 
    notas: aluno.notas,  
    calcularMedia: function() {
        const soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }
}

console.log(acount.calcularMedia()); // 9
