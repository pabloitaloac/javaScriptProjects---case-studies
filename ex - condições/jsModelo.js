function calc(){
let contador = Number(document.getElementById('inicio').value)
let condicao = Number(document.getElementById('cond').value)
let parada = Number(document.getElementById('parada').value)
let mostrador = document.getElementById('div2')

    mostrador.innerHTML = `Contando: `

    if(contador == 0 || condicao == 0 || parada == 0){

        alert(`campos incorretos`)

    } else {

        for(let x=contador; x<=parada; x+=condicao){

        mostrador.innerHTML += `\u{27A1} ${x} `
        // alert(`${x}`)

        }
    }

    mostrador.innerHTML += `\u{23F9}`

}
