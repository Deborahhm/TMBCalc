const calcTMB = (altura, peso, sexo, idade, atividade) => {
    if(sexo === 'masc'){
       let result = (13.72 * peso) + (5.003 * altura) - (6.755 * idade) + 66.47;
       result *= calcAtiv(atividade);  
       return result; 
    }
    if(sexo === 'fem'){
        let result = (9.563 * peso) + (1.85 * altura) - (4.676 * idade) + 665.1;
        result *= calcAtiv(atividade);
        return result; 
    }
}

const calcAtiv = (atividade) => {
    if(atividade === 'sedentario'){
        return 1.2;
    } 
    if(atividade === 'leve'){
        return 1.375;
    } 
    if(atividade === 'moderado'){
        return 1.55;
    } 
    if(atividade === 'ativo'){
        return 1.725;
    } 
}

export {calcTMB};