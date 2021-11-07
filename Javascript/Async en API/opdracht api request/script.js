const huiswerkMaken = (vak, callback) => {
    setTimeout (() => {
    console.log("Ok, ok, ik ga nu mijn ${vak} huiswerk maken");
    callback();
    }, 2000);
}

huiswerkMaken();

const klaarMetHuiswerk = () => {
  console.log("Kijk pap en mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);
