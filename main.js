import {
    onEvent,
    getElement,
    getValue,
    setValue 
    } from './modules/DOM.js';

import {
    calcTMB 
    } from './modules/calc.js';

   
let sexo = '';
let peso = 0;
let altura = 0; 
let idade = 0; 
let atividade = 0; 
let TMB = 0; 


onEvent("submit", "click", () => {
    alert("AH");
    peso = getValue('peso'); 
    altura = getValue('altura'); 
    idade = getValue('idade'); 
    atividade = getAtividade(); 
    sexo = getSexo();
    console.log(peso);
    console.log(altura);
    console.log(idade);
    console.log(atividade); 
    console.log(sexo);
    TMB = calcTMB(altura, peso, sexo, idade, atividade);
    let finalValue = `Sua taxa metabólica basal é ${TMB}`;
    console.log(finalValue);
    setValue( "main-result", finalValue);
});   

function getSexo() {
    alert('AHH');
    if (getValue('fem')) {
        sexo = 'fem';
    }
    if (getValue('masc')) {
        sexo = 'masc';
    }
    return sexo; 
}

function getAtividade(){
    alert('AHHH');
    if (getValue('sedentario')) {
        atividade = 'sedentario';
    }
    if (getValue('leve')) {
        atividade = 'leve';
    }
    if (getValue('moderado')){
        atividade = 'moderado'; 
    }
    if (getValue('ativo')){
        atividade = 'ativo'
    }
    return atividade; 
}