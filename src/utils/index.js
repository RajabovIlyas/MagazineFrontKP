export const required=value=>{
    if(value){
        return undefined;
    }
    return 'Введите данные';
};

export const maxLengthCreator=maxLength=>value=>{
    if(value.length>maxLength){
        return `Превышен лимит ${maxLength} символов`;
    }
    return undefined;
};

export const getNiceDate=str=>{
    let newStr='';
    for(let i=0;i<19;i++){
        if(i===10){
            newStr+=' ';
            continue;
        }
            newStr+=str[i];
    }
    return newStr;
};