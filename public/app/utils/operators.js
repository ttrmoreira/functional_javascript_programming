export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

// A função reduce Rigth realiza as chamadas da direita para a esquerda.
export const compose = (...fns) => value => 
    fns.reduceRight((previousValue, fn) => 
        fn(previousValue),value);

export const pipe = (...fns) => value => 
    fns.reduce((previousValue, fn) => 
        fn(previousValue),value);

export const takeUntil = (times, fn) => () => times-- > 0 && fn();

export const debounceTime =  (miliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, miliseconds);
    };
};

