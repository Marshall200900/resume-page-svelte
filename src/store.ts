import { writable } from "svelte/store";

const createVariable = (name: string, initVal: any, callback?) => {
    if(localStorage.getItem(name)) { 
        initVal = localStorage.getItem(name);
        callback && callback(initVal);
    }
    const { subscribe, set, update } = writable(initVal);
    return {
        subscribe,
        set: (val) => {
            localStorage.setItem(name, val);
            set(val);
            callback(val)
        },
        update: (updater: (value: any) => any) => {
            const updated = updater(localStorage.getItem(name));
            localStorage.setItem(name, updated)
            callback(updated);
            update(updater);
        }
    }

}

export const lang = createVariable("lang", "ru");
export const theme = createVariable("theme", "", (theme) => {
    theme === "white" 
    ? document.body.classList.add('white')
    : document.body.classList.remove('white');
});