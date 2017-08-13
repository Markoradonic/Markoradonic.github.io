// prvo zelimo da selektujemo nasu curent img.
// selektovali smo i nasse slike sa klasmo
// zelimo svim slikama da dodelimo ivente . i moramo da se koristimo for loopom
// zelimo clicom da peomenimo src slike da zamenimo mesta slike,

//varijabli i dodelili smo vrednost nula i rekli sve dok je nasa varijabla i manja od nasih slika pa onda .lenght(to znaci koliko ima ovih nasih slika) sve dok je manje od duzine nasih slika(slike) povecaj nasu varijablu i i++

// pozvali smo funkciju display i da nam reaguje na click

// atribut je src zato je setattribute i ona zahteva dva parametra
// zato smo stavili varijablu sl i stavili this pomocu this znamo na koju smo kliknuli
// rekli smo da nam da src od te slike na koju smo kliknule i sacuvali smo ga u sl varijabli
// i zato sada kada kazemo da nasoj prvoj slici zelimo da promenimo atribut slike na koju smo kliknuli a to je atribut sl.

var curent = document.getElementById('current')
var slike = document.getElementsByClassName('thumb')
for(var i=0;i<slike.length; i++){
slike[i].addEventListener('click',display)
}


function display (){
    var sl = this.getAttribute('src');
    curent.setAttribute('src',sl);
}
