var arrayInter = []
var arrayMilan = []
var arrayGoleiro = []
var arrayZagueiro = []
var arrayMeio = []
var arrayAtaque = []
var arrayConvidado = []
var res = document.getElementById('sel')
res.innerHTML = `Goleiros: `

function addGoleiro(){
    if (arrayGoleiro.length > 1){
        window.alert("Você já adicionou o número máximo de goleiros!")
    } else {
        let select = document.getElementById('gol')
        let value = select.options[select.selectedIndex].value;
        arrayGoleiro.push(value)
        console.log(arrayGoleiro)
    }
}
function addZagueiro(){
        let select = document.getElementById('zaga')
        let value = select.options[select.selectedIndex].value;
        arrayZagueiro.push(value)
        console.log(arrayZagueiro)
}
function addMeias(){
    let select = document.getElementById('meio')
    let value = select.options[select.selectedIndex].value;
    arrayMeio.push(value)
    console.log(arrayMeio)
}
function addAtaque(){
    let select = document.getElementById('ataque')
    let value = select.options[select.selectedIndex].value;
    arrayAtaque.push(value)
    console.log(arrayAtaque)
}
function addConvidado(){
    let select = document.getElementById('convite')
    let value = select.options[select.selectedIndex].value;
    arrayConvidado.push(value)
    console.log(arrayConvidado)
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
    console.log(arrayGoleiro)
    console.log(arrayZagueiro)
    console.log(arrayMeio)
    console.log(arrayAtaque)
    console.log(arrayConvidado)
}