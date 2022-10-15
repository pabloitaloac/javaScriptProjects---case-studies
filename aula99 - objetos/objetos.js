//objeto pode ter vários campos diferentes, entre strings, booleanos ou números, por exemplo
//diferente de array, aqui você consegue nomear cada campo (array = 0,1,2,3...)
var carro = {
    modelo: `hb20`,
    anoFab: 2020,
    anoMod: 2021,
    cor: 'vermelho',
    motor: 1.6,
    //função dentro de objeto
    preco(a){
        if(this.anoMod >= 2019) {
        var precoVenda = a * 10000
        return precoVenda
    }}
}

 


console.log(`O carro modelo '${carro.modelo}', de ano '${carro.anoMod}' e cor '${carro.cor}', custa '${carro.preco(9)}'.`)
console.log('...................')

