// carne - 400g por pessoa  + de 6 horas - 650
//cerveja - 1200ml por pessoa  + de 6 horas - 2000
// REfri/ agua 1000ml por pessoa + 6 horas 1500
//crianças valem por 0,5
 

let inputAdulto= document.getElementById("adulto")
let inputCrianca= document.getElementById("crianca")
let inputDuracao= document.getElementById("duracao")

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
    resultado.innerHTML = `<p>${qdtCarne/1000}KG de carne</p>`
    resultado.innerHTML+= `<p>${Math.ceil(qdtCerva/355)}Latas de cerveja arroz</p>`
    resultado.innerHTML +=`${Math.ceil(qdtRefri/2000)} Bebidas de 2L`
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