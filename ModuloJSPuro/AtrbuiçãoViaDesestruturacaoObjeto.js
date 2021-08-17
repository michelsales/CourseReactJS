const pessoa = {
  nome: 'luizz',
  sobrenome: 'luizz',
  idade: 30,
  endereco: {
    rua: 'av Brasil',
    numero: 320,
  }
};
const {nome,sobrenome,  ...resto } = pessoa;
console.log(nome, sobrenome, resto); 