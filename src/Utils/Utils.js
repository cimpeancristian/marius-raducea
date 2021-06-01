const getInputName = string => {
    const path = string.path;

    return path.charAt(0).toUpperCase() + path.slice(1);
};
  
export const VALIDATION = {
    field: fieldName => `${getInputName(fieldName)} este un câmp obligatoriu`,
    typeError: fieldName =>  `${getInputName(fieldName)} trebuie sa fie un numar`,
    positive:  fieldName =>  `${getInputName(fieldName)} trebuie sa fie mai mare ca zero`,
    maxDay: fieldName => `${getInputName(fieldName)} trebuie sa fie mai mica de 31`,
    minDay: fieldName => `${getInputName(fieldName)} trebuie sa fie minim 1`,  
};

export const calcularePMT = (ir, np, pv, fv, type) => {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    let pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * (pv * pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;

};


export const calculareDobanda = (soldCredit, dobanda) => {
    /*
     * soldCredit - soldul creditului
     * dobanda - dobanda
     */
    let dobandaZilnica;
    
    dobandaZilnica = soldCredit*dobanda/36000;

    return dobandaZilnica;
};

