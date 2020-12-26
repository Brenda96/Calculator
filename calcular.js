const buttonNumbers = document.getElementsByName('data-number');
const buttonOperate = document.getElementsByName('data-operator');
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data.delete')[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

buttonNumbers.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
       
    })
});

buttonOperate.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText)
    })
});

buttonEqual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();

});

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }

    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return
    switch (operacion){
        case'%':
            calculo = anterior / 100;
            break;
        case '/':
                calculo = anterior / actual;
                break;
                default:
                    return;
        case 'x':
                calculo = anterior * actual;
                break;
        case'-':
            calculo = anterior - actual;
            break;
        case'+':
            calculo = anterior + actual;
            break;
        

    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;

}

clear();