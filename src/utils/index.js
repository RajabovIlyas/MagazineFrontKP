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