let d = new Date();
console.log(d);
document.getElementById('saluto').innerHTML = "oggi è " + d;
let colori = new Array();
let i = 0;

function elabora() {
    let num = document.getElementById("inNumber").value;
    console.log(num);
    let testo = document.getElementById("inTesto").value;
    console.log(testo);
    if (num < 0 || num > 255) {
        document.getElementById('error').innerHTML = "il valore non è corretto";
    } else {
        colori.push(num);
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + num;
        console.log(colori);
        document.getElementById("outText").innerHTML += "<br> i colori sono " + colori;
        i++;
        if (i == 3) {
            newcolor = `rgb(${colori[0]},${colori[1]},${colori[2]})`;
            document.getElementById("outText").innerHTML = testo;
            document.getElementById('outText').style.color = newcolor;
        }
    }
}
function annulla() {
    document.getElementById("inNumber").value = "";
    document.getElementById("inTesto").value = "";
}