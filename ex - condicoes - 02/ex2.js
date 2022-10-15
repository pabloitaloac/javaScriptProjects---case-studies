
function calc(){
    let ent = document.getElementById('insnum')
    let e = Number(ent.value)
    let res = document.getElementById(`div2`)
    
    
    res.innerHTML = `a tabuada do número "${e}" é: <br>`





    for(x=0 ; x<= 10 ; x++){
        let resultado = (e*x)

        res.innerHTML += `${x} X ${e} = ${resultado} <br>` 

        // res.innerHTML += `${e} X ${x} =  <br>`
    }


}
















