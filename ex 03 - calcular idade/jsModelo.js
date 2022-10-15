function calc(){
    let data = new Date()
    let ano = data.getFullYear()
    let nascimento = Number(document.getElementById('nascimento').value)
    let txtpalterar = window.document.getElementById('txtpalterar')

    // window.alert(nascimento)

    if(nascimento>ano){
        txtpalterar.innerHTML = "[ERRO] VERIFIQUE OS DADOS"
    } else if(nascimento==0){
        txtpalterar.innerHTML = "[ERRO] VERIFIQUE OS DADOS"
    } else if((ano-nascimento)<18){
        txtpalterar.innerHTML = "MENOR de idade"
    } else if(((ano-nascimento)>=18) && ((ano-nascimento)<60)){
        txtpalterar.innerHTML = "ADULTO"
    } else if((ano-nascimento)>=60){
        txtpalterar.innerHTML = "IDOSO"
    }
}