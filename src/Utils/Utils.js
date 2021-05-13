const getInputName = string => {
    const path = string.path;

    return path.charAt(0).toUpperCase() + path.slice(1);
};
  
export const VALIDATION = {
    field: fieldName => `${getInputName(fieldName)} este un câmp obligatoriu`,
    typeError: fieldName =>  `${getInputName(fieldName)} trebuie sa fie un numar`,
    positive:  fieldName =>  `${getInputName(fieldName)} trebuie sa fie mai mare ca zero`  
};