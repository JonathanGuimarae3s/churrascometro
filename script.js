// alert('Pagina ainda em desenvolvimento. Em breve haverá uma atualização!')
let inputAdulto= document.getElementById("adulto")
let inputCrianca= document.getElementById("crianca")
let inputDuracao= document.getElementById("duracao")

let btn = document.getElementById("button")

let resultado = document.getElementById("resultados")

function calcular() {
    let adulto = inputAdulto.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value
    
    let carne = carnePP(duracao)
    let cerva = cervaPP(duracao)
    let refri = refriPP(duracao)


    let qdtCarne = carne * adulto + (400/2)* crianca;
    let qdtCerva = cerva * adulto ;
    let qdtRefri = refri* adulto + (400/2)* crianca;
    
    mostrar(qdtCarne,qdtCerva,qdtRefri)
}


function mostrar(qdtCarne,qdtCerva,qdtRefri) {

    const calc=[qdtCarne/1000,
        
        Math.ceil(qdtCerva/355) ,
        
        Math.ceil(qdtRefri/2000)
    ]
    resultado.innerHTML ="<h3>Você precisará comprar</h3>"
    resultado.innerHTML += `<p>${calc[0]} Kg de carne.</p>`
    resultado.innerHTML+= `<p>${calc[1]} Latas de cerveja.</p>`
    resultado.innerHTML +=`<p>${calc[2]} Bebidas de 2L.</p>`
}


function  carnePP(duracao) {
    if(duracao >=6){
        return 650
    }else{
        return 400
    }
}    
function  cervaPP(duracao) {
    if(duracao >=6){
        return 2000
    }else{
        return 1200
    }
}
function  refriPP(duracao) {
    if(duracao >=6){
        return 1500
    }else{
        return 1000
    }
}    