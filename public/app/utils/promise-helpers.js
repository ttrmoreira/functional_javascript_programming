export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

export const log = param => {
    console.log(param);
    return param;
};