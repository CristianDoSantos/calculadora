function numero_operacao(informacao){
    document.getElementById('display').innerHTML += informacao

}

function resetar(){
    document.getElementById('display').innerHTML = ''
}

function apagar(){
    var display = document.querySelector('#display').innerHTML
    document.getElementById('display').innerHTML = display.substring(0, display.length -1)
}

function calcular(){
    var display = document.getElementById('display').innerHTML
    if(display){
        document.getElementById('display').innerHTML = eval(display)
    }else{
        alert('Você precisa inserir os valores: ')
    }
}