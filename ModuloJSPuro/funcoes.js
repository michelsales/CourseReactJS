
//sintaxe 
falaOi();

function falaOi(){
  console.log('oie');
}

//function expression
const souUmDado = function(){
  console.log('Sou um dado.')
}
souUmDado();

//arrow function
const arrow = () => {
  console.log('sou uma arrow function');
};
arrow();

//dentro de um objeto
const obj = {
  falar: function(){
    console.log('Estou falando...');
  }
};
obj.falar();


//ARRAY FILTER 

const numeros = [5 ,6 , 8, 9, 10, 11, 12 ];

function callbackFilter(valor){
    return valor > 10;
}

const numeros2 = numeros.filter(callbackFilter);
console.log(numeros2);

// usando => 

const numeros3 = numeros.filter((valor, indice, array) =>{
  return valor > 10;
} );
console.log(numeros3);



//atividade
const pessoas = [
  {nome: 'michel', idade: 62},
  {nome: 'gabriela', idade: 15},
  {nome: 'gabriel', idade: 42},
];

//pessoas que tem o nome com 5 letras ou mais 
const pessoasComNomGrande = pessoas.filter(function(obj){
  return obj.nome.length >= 5;  
});

console.log(pessoasComNomGrande)

// com mais de 50 anos
const pessoasVelhas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasVelhas);

//cujo nome termina com a letra a
const terminaComA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(terminaComA);


//MAP 

const numerosmap = [5 ,6 , 8, 9, 10, 11, 12, 50, 62, 68, 72 ];

//dobre os numeros 
const dobrarValor = numerosmap.map(valor => {
    return valor * 2;
}); 
console.log(dobrarValor);

//atividade
const pessoasmap = [
  {nome: 'michel', idade: 62},
  {nome: 'gabriela', idade: 15},
  {nome: 'gabriel', idade: 42},
];

//retorne apenas 1 string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
//remova apenas a chave nome do obj 
const idades = pessoas.map ( obj => ({idade: obj.idade}));
console.log(idades);
//adicione uma chave id em cada objeto 
const comIds = pessoas.map(function(obj, indice){
  obj.id = ( indice + 1) * 1000; 
  return obj;
});
console.log(comIds);

//adicionando um novo obj 
const comIdss = pessoas.map(function(obj, indice){
  const newObj = {...obj};
  newObj.id = indice;
  return newObj;
});

console.log(comIdss);


//REDUCE 

const numerosR = [5 ,6 , 8, 9, 10, 11, 12 ];

//somar todos os numeros
const total = numerosR.reduce((acumulador, valor, indice, array) => {
  return acumulador += valor;
}, 0)

console.log(total);

//retorne um array com os pares 
const pares = numerosR.reduce((acumulador, valor ) => {
  if(valor % 2 === 0){
    acumulador.push(valor);
  }
  return acumulador;
}, []);
console.log(pares);

//retorne um array com o dobro dos valores 

const dobrod = numerosR.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobrod);

//retorne a pessoa mais velha 

const pessoasReduce = [
  {nome: 'michel', idade: 62},
  {nome: 'gabriela', idade: 15},
  {nome: 'gabriel', idade: 72},
];

const maisVelho = pessoasReduce.reduce((maior, obj) => {
  if(maior.idade > obj.idade) return maior;
  return obj;
});

console.log(maisVelho);


// mistura de todas as funções encadeadas 

//retorne a soma do dobro de todos os pares 
//filtrar pares
//reduzir(somar tudo);

const numerosT = [5 ,6 , 8, 9, 10, 11, 12 ];

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);




//FOREACH
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90 ];
let totalt = 0;

a1.forEach(valor => {
  totalt += valor;
}); 

console.log(totalt);


//classes 
class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){
    console.log(`${this.nome} está falando.`);
  }
  comer(){
    console.log(`${this.nome} está comendo.`);
  }
  beber(){
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome){
  this.nome = nome; 
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
  console.log(`${this.nome} está falando`);
}   

const p1 = new Pessoa('joao', 'sales');
const p2 = new Pessoa('michel', 'sales');
const p3 = new Pessoa('luis', 'sales');
const p4 = new Pessoa('joana', 'sales');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

p1.beber();


//Metódos estáticos
function teste(){
  console.log('Este é meu teste');
}

class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  //metodo de instancia 
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume -= 2;
  }

  //metodo estático
  static soma(x, y){
    return x + y;
  }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
console.log(ControleRemoto.soma(2,4))



//promisses e metodos para promisses 

function rand(min = 0, max = 3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string'){
      reject('cai no erro');
      return;
    } 

    setTimeout(()=>{    
      resolve(msg.toUpperCase() + 'passei na promise');
    }, tempo); 
  });
}
//promisse.all  promisse.race promisse.resolve promisse.reject

const promises = [
  esperaAi('Promisse 1', 3000),
  esperaAi('Promisse 2', 500),
  esperaAi('Promisse 3', 1000), 
];

/* resolve todas as promisses 

Promise.all(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  }) */

/*
  mostra a primeira que foi resolvida e depois as demais 

  Promise.race(promises)
    .then(function(valor){
      console.log(valor);
    })
    .catch(function(erro){
      console.log(erro);
    });
*/


// promisse.resolve promisse.reject

/* function BaixaPagina(){
  const emCache = true;
  if(emCache){
    return Promise.resolve('Página em cache');
  }else{
    return esperaAi('baixei a pagina', 3000); 
  }
}

BaixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina); 
})
.catch(e => console.log('ERRO', e));

*/

//async e await 

/*
esperaAi('fase 1', rand())
.then(valor => {
  console.log(valor);
  return esperaAi('fase 2',)
})
.then(fase => {
  console.log(fase);
  return esperaAi('fase 3', rand());
})
.then(fase => {
  console.log(fase);
  return fase; 
})
.then(fase => {
  console.log('terminamos na fase', fase);
})
.catch( e=> console.log(e));
*/

async function executa(){
  try{
  const fase1 = await esperaAi('fase 1', rand())
  console.log(fase1);
  const fase2 = await esperaAi('fase2', rand())
  console.log(fase2);
  const fase3 = await esperaAi('fase3', rand())
  console.log(fase3);
  console.log('terminamos na fase', fase3);
  }
  catch(e) {
  console.log(e);
  }
}
executa();

//pending -> pendente
//fullfilled -> resolvida
//rejected -> rejeitada 



//fetch API 

fetch('pagina1.html')
.then(resposta => { 
  if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
  return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.error(e));
 

async function carregaPagina(el){
  try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if(response.status != 200) throw new Error('ERRO 404');
  
    const html = await response.text();
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }

}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}