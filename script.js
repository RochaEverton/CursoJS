var arrayInter = []
var arrayMilan = []
var arrayGoleiro = []
var arrayZagueiro = []
var arrayMeio = []
var arrayAtaque = []
var arrayConvidado = []



function mostra(){
    let selecionados = document.getElementById('sel')
    selecionados.innerHTML = ""
    selecionados.innerHTML += `Goleiros: <strong>${arrayGoleiro}</strong> <br>`
    selecionados.innerHTML += `Zagueiros: <strong>${arrayZagueiro}</strong> <br>`
    selecionados.innerHTML += `Meias: <strong>${arrayMeio}</strong> <br>`
    selecionados.innerHTML += `Atacantes: <strong>${arrayAtaque}</strong> <br>`
    selecionados.innerHTML += `Convidados: <strong>${arrayConvidado}</strong> <br>`
}
    
function addGoleiro(){
    if (arrayGoleiro.length > 1){
        window.alert("Você já adicionou o número máximo de goleiros!!!")
    } else {
        let select = document.getElementById('gol')
        let value = select.options[select.selectedIndex].value;
        if(arrayGoleiro.indexOf(value) == -1){
        arrayGoleiro.push(value)
        } else {
            window.alert('Jogador já foi selecionado!!!')
        }        
    }
}

function sGoleiro(){
    if(arrayGoleiro.length == 2){
        const randomGoleiro1 = arrayGoleiro[Math.floor(Math.random() * arrayGoleiro.length)];
        arrayInter.push(randomGoleiro1)
        console.log(arrayInter)
        const indiceg = arrayGoleiro.indexOf(randomGoleiro1);
        arrayGoleiro.splice(indiceg, 1);
        const randomGoleiro2 = arrayGoleiro[Math.floor(Math.random() * arrayGoleiro.length)];
        arrayMilan.push(randomGoleiro2)
        console.log(arrayMilan)    
    } else {
        window.alert("Necessário selecionar pelo menos 2 goleiros!!!")
    }
}

function addZagueiro(){
    let select = document.getElementById('zaga')
    let value = select.options[select.selectedIndex].value;
    if(arrayZagueiro.indexOf(value) == -1){
        arrayZagueiro.push(value)
        console.log(arrayZagueiro)
    } else {
        window.alert('Jogador já foi selecionado!!!')
    }
    console.log(arrayInter)
    console.log(arrayMilan)
}

function sZagueiro (){    
    for(let c=arrayZagueiro.length; c>0; c--){
        const randomZ = arrayZagueiro[Math.floor(Math.random() * arrayZagueiro.length)];
        const z = Math.floor(Math.random() * (2 - 1 + 1)) + 1

        if(z == 1){
            //console.log("zagueiro Inter")
            arrayInter.push(randomZ)
            const indicez = arrayZagueiro.indexOf(randomZ);
            arrayZagueiro.splice(indicez, 1);
        } else {
            //console.log("zagueiro Milan")
            arrayMilan.push(randomZ)
            const indicez = arrayZagueiro.indexOf(randomZ);
            arrayZagueiro.splice(indicez, 1);
        }
    }
}

function addMeias(){
    let select = document.getElementById('meio')
    let value = select.options[select.selectedIndex].value;
    if(arrayMeio.indexOf(value) == -1){
        arrayMeio.push(value)
        console.log(arrayMeio)
    } else {
        window.alert('Jogador já foi selecionado!!!')
    }
}

function sMeio (){    
    for(let c=arrayMeio.length; c>0; c--){
        const randomM = arrayMeio[Math.floor(Math.random() * arrayMeio.length)];
        const m = Math.floor(Math.random() * (2 - 1 + 1)) + 1

        if(m == 1){
            //console.log("zagueiro Inter")
            arrayInter.push(randomM)
            const indicem = arrayMeio.indexOf(randomM);
            arrayMeio.splice(indicem, 1);
        } else {
            //console.log("zagueiro Milan")
            arrayMilan.push(randomM)
            const indicem = arrayMeio.indexOf(randomM);
            arrayMeio.splice(indicem, 1);
        }
    }
}

function addAtaque(){
    let select = document.getElementById('ataque')
    let value = select.options[select.selectedIndex].value;
    if(arrayAtaque.indexOf(value) == -1){
        arrayAtaque.push(value)
        console.log(arrayAtaque)
    } else {
        window.alert('Jogador já foi selecionado!!!')
    }  
}

function sAtaque (){    
    for(let c=arrayAtaque.length; c>0; c--){
        const randomA = arrayAtaque[Math.floor(Math.random() * arrayAtaque.length)];
        const a = Math.floor(Math.random() * (2 - 1 + 1)) + 1

        if(a == 1){
            //console.log("ataque Inter")
            arrayInter.push(randomA)
            const indicea = arrayAtaque.indexOf(randomA);
            arrayAtaque.splice(indicea, 1);
        } else {
            //console.log("zagueiro Milan")
            arrayMilan.push(randomA)
            const indicea = arrayAtaque.indexOf(randomA);
            arrayAtaque.splice(indicea, 1);
        }
    }
}

function addConvidado(){
    let select = document.getElementById('convite')
    let value = select.options[select.selectedIndex].value;
    if(arrayConvidado.indexOf(value) == -1){
        arrayConvidado.push(value)
        console.log(arrayConvidado)
    } else {
        window.alert('Jogador já foi selecionado!!!')
    }
}

function sConvidado (){    
    for(let c=arrayConvidado.length; c>0; c--){
        const randomC = arrayConvidado[Math.floor(Math.random() * arrayConvidado.length)];
        const con = Math.floor(Math.random() * (2 - 1 + 1)) + 1

        if(con == 1){
            arrayInter.push(randomC)
            const indicec = arrayConvidado.indexOf(randomC);
            arrayConvidado.splice(indicec, 1);
        } else {
            arrayMilan.push(randomC)
            const indicec = arrayConvidado.indexOf(randomC);
            arrayConvidado.splice(indicec, 1);
        }
    }
}
 
function limpar(){
    
    while (arrayGoleiro.length > 0){
        arrayGoleiro.pop()
    } 
    while (arrayZagueiro.length > 0){
        arrayZagueiro.pop()
    }
    while (arrayMeio.length > 0){
        arrayMeio.pop()
    }
    while (arrayAtaque.length > 0){
        arrayAtaque.pop()
    }
    while (arrayConvidado.length > 0){
        arrayConvidado.pop()
    }
    while (arrayInter.length > 0){
        arrayInter.pop()
    }
    while (arrayMilan.length > 0){
        arrayMilan.pop()
    }
}

function sorteados(){
    console.log(arrayInter)
    console.log(arrayMilan)
    while (arrayInter.length > arrayMilan.length + 1){
        const troca = arrayInter.pop()
        arrayMilan.push(troca)
    } while (arrayMilan.length > arrayInter.length + 1){
            const troca = arrayMilan.pop()
            arrayInter.push(troca)
    }
    console.log(arrayInter)
    
    const sortInter = document.getElementById('inter')
    sortInter.innerHTML = ''
    sortInter.innerHTML += `Time Inter:<br><br>`
    for(let c=0 ; c <arrayInter.length; c++){
        sortInter.innerHTML += `${arrayInter[c]}<br>`
    }
  
    console.log(arrayMilan)
    const sortMilan = document.getElementById('milan')
    sortMilan.innerHTML = ''
    sortMilan.innerHTML += `Time Milan:<br><br>`
    for(let c=0 ; c <arrayMilan.length; c++){
        sortMilan.innerHTML += `${arrayMilan[c]}<br>`
    }
}

