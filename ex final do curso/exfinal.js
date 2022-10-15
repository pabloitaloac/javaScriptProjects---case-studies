//array geral
var base = []
var div3 = document.getElementById(`div3`)

function add(){

    //VARIÁVEIS GERAIS
    var n = document.getElementById(`numero`)
    var numero = Number(n.value)
    var select = document.getElementById(`select`)

    //verificaões de situações
        
    if (base.includes(numero)){ //está ou não na array
        
        alert(`Número já digitado`)

    } else if (numero<1 || numero>100) { //número entre 1 e 100
        
        alert(`Digite um número adequado`)

    } else { //tudo ok

        //add numero na base
        base.push(numero)

        //cria elemento "option"
        var item = document.createElement(`option`)
            //muda esse "option" para ter o numero informado
            item.innerHTML = `Número ${numero} adicionado`
        
        //add o option modificado ao "select"
        select.appendChild(item)

        //clear no numero digitado no input "number"
        n.value = ''
    }
}

function calc(){

    //tamanho da base
    let tamanho = base.length

    //soma da array 'base'
        //usando o for para acrescentar a uma variável, e mostrando esse resultado
    let soma = 0
    for(let i = 0 ; i < tamanho ; i++){
        soma = soma + base[i]
    }

    //média
    let media = (soma/tamanho)

    //maior número
        //cria variável para atribuir número específico
    let maior = 0
        //usa "Math.max.appy(null.base)" - calcula automaticamente. 
        //OBS.: o "apply(null.base)" = aplica a array completa, informando que o primeiro valor é vazio/irrelevante
    maior = Math.max.apply(null,base)

    //menor - msm lógica do maior
    let menor = 0
    menor = Math.min.apply(null,base)

    //ordenação - array.sort() - classifica como se fossem strings. Para adequar a números, precisa colocar função de comparação
    var ordenar = 0
    ordenar = base.sort(comparar)
        //você atribui manualmente os retornos, substituindo os originais da função "sort"
    function comparar (a,b){
        if(a>b){
            return 1
        } if (a<b){
            return -1
        } else {
            return 0
        }
    }




    //mudar texto e apresentar results
    div3.innerHTML = `       
        Quantidade é: ${tamanho}<br>
        A média é: ${media}<br>
        O maior é: ${maior}<br>
        O menor é: ${menor}<br>
        a ordenação é: ${ordenar}<br>
        soma é: ${soma}<br>
    `

}
