function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

const animal = {
    nome: 'Spike',
    idade: 15,
};

console.log(calculaIdade.call(animal, 6));
console.log(calculaIdade.apply(pessoa2, [24]));