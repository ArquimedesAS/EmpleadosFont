import {isUndefined} from 'util';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export function calculaExtracionSesion(){
    const now = new Date().getTime();
    const nuwDate = now + 60 * 30 * 1000;
    return new Date(nuwDate);
}

export function getSesion(){
    return isUndefined(cookies.get('_s')) ? false: cookies.get('_s');
}

function renovarSesion(){
    const sesion = getSesion();
    if(!sesion) window.location.href = "/login";
    cookies.set("_s", sesion, {
        path: "/", 
        expires: calculaExtracionSesion(),
    })
}
export const request = {
    get: function(url){
        renovarSesion();
        return axios.get();
    },
};