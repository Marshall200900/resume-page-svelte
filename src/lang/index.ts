import { RULang } from "./ru";
import { ENLang } from "./en";

export const localeBuilder = (lang: string) => {

    return (key: string) => {
        switch(lang) {
            case "ru": return RULang[key];
            default: return ENLang[key];
        }
    }
}
