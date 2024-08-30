let serv = []

function cadastrar() {
    
    let abrigo = {
    nome: prompt("Digite o nome do seu abrigo:").toLocaleLowerCase(),
    endereço: prompt("Digite o endereço do seu abrigo:").toLocaleLowerCase(),
    cidade: prompt("Digite a cidade de seu abrigo:").toLocaleLowerCase(),
    telefone: prompt("Digite o número de telefone do seu abrig:").toLocaleLowerCase(),
    capacidade: prompt("Digite quantas pessoas seu abrigo suporta abrigar:").toLocaleLowerCase()
    }
    serv.push(abrigo)

}

    function listarAbrigo () {
        if (serv.length != 0) {
            for (let  i = 0;  i < serv.length; i++) {
                const  l = serv[i];
                alert(`=======Abrigos registrados=======\n código:${i + 1}\n Nome: ${l.nome}\n endereço: ${l.endereço}\n cidade: ${l.cidade}\n Número: ${l.telefone} \n Capacidade: ${l.capacidade} `)
            }
        }
        
        else{
            alert("nenhum abrigo foi encontrado.")
        }
    }

    function pergunta() {
        let p = prompt("Digite sua cidade").toLowerCase()
        if (serv.length != 0) {
            for (let i = 0; i< serv.length; i++) {
               if (serv[i].cidade === p) {
                alert(`=======Abrigos registrados=======\n código:${i + 1}\n Nome: ${serv[i].nome}\n endereço: ${serv[i].endereço}\n cidade: ${serv[i].cidade}\n Número: ${serv[i].telefone} \n Capacidade: ${serv[i].capacidade} `)
               }

            }
        } 
        
        else{
            alert("nenhum abrigo foi encontrado.")
        } 
        
    }

let menu = 0

 while (menu != 4) {
    menu = prompt("=======Abrigos Temporarios=======\n1. Cadastrar Abrigo.\n2. Listar Abrigos.\n3. Buscar Abrigos.\n4. Sair.\nDigite sua opção:")
    
 switch (menu) {
        case `1`:
            cadastrar()
            break;
        case `2`:
            listarAbrigo()
            break;
        case `3`:
            pergunta()
            break;
        case `4`:
            alert("Muito obrigado por utilizar o programa!")
            break;
        
        default:
            alert("Tente novamente.")
            break;
    }
}
