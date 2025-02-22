let abrigos = [];
let menu;

menu = menuPrincipal();

while (menu !== '4') {
    switch (menu) {
        case '1': 
            cadastrarAbrigo();
            break; 
        case '2':
            listaDeAbrigos();
            break; 
        case '3':
            procurarAbrigo();
            break;
        case '4':
            sair();
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }

    menu = menuPrincipal();
}

function sair() {
    alert("Fechando...");
}

//menu principal
function menuPrincipal() {
    return prompt(`
        ===== ABRIGOS TEMPORÁRIOS =====
        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair
        Escolha uma opção:`);
}

//cadastro abrigo
function cadastroAbrigo() {

	 let nome = prompt("Informe o nome do abrigo que deseja cadastrar:");
	 let endereco = prompt("Informe o endereço do abrigo:");
	 let telefone = cellAbrigo(prompt("Informe o telefone do abrigo:"));
let capacidade = Number(prompt("Informe a capacidade de lotação do abrigo:"));

	let abrigo = {
		nome: nome,
		endereco: endereco, 
		telefone: telefone,
		capacidade: capacidade,
	};
    abrigos.push(abrigo);
	alert("Abrigo cadastrado com sucesso! :) ")
	console.log(abrigos)
}


//listar abrigos 
function listaDeAbrigos() {
if (abrigos.length === 0) {
	alert("Nenhum abrigo cadastrado!");
} else {
    for(let abrigo of abrigos) {
		let i = 0
        alert( `Lista de abrigos: \n
            código = ${i} \n
        nome = ${abrigo.nome} \n
              endereço = ${abrigo.endereco} \n
         telefone = ${abrigo.telefone} \n
        capacidade = ${abrigo.capacidade} \n`);
			i++
			
}

} 
}

//Procurar abrigos 
function procurarAbrigo() {
	let busca = prompt("Informe a cidade do abrigo que você deseja procurar:");
	let resultado = [];

	for (let abrigo of abrigos) {
		if (abrigo.cidade.toLowerCase() === busca.toLowerCase()) {
			resultado.push(abrigo);
		}
	}

	if (resultado.length > 0) {
		let listaResultado = "Abrigos encontrados:\n\n"; 
		for (let i = 0; i < resultado.length; i++) {
			let abrigo = resultado[i];
			listaResultado += `Código: ${i}\n` +
				`Nome: ${abrigo.nome}\n` +
				`Endereço: ${abrigo.endereco}\n` +
				`Telefone: ${abrigo.telefone}\n` +
				`Capacidade: ${abrigo.capacidade}\n` +
				`Cidade: ${abrigo.cidade}\n\n`;
		}
		alert(listaResultado); 
	} else {
		alert("Nenhum abrigo encontrado com essa informação, por favor tente novamente!");
	}
}

