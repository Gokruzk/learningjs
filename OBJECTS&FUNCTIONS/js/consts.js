export const PI = Math.PI

export let usuario = "nigell"
let psw = "12345"
//export default psw

//solo un export default
export default function saludar(){
    console.log("Hola function")
}

export class Saludar{
    constructor(){
        console.log("Hola clase")
    }
}