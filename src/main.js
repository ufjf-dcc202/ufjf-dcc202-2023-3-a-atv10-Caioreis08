import { getMaria, getJoao, deJoaoParaMaria, setMaria, setJoao} from "./joaoEMaria";

console.log("MAIN");
setMaria(4);
setJoao(2);

let maria = getMaria();
let joao = getJoao();
console.log(maria, joao);

deJoaoParaMaria();

maria = getMaria();
joao = getJoao();
console.log(maria, joao);