import idezetek from '/quotes.json';

console.log(idezetek)

const idezet = idezetek.quotes
console.log(idezet)



const elsofeladat = Array.from(idezet.sort((a, b) => a.author.localeCompare(b.author)))
                  .map(ember => ember.quote  + " " + ember.author)

                  

function myFunction() {
  var x = document.createElement("LI");
  for (let i = 0; i < elsofeladat.length; i++) {
    var t = document.createElement('li');
    t.textContent = elsofeladat[i]
    document.getElementById("lista").appendChild(t);

  }


  
}
const masodikfeladat = Array.from(idezet.map(i => i.quote))
                      .filter(i => i.includes("The", 0) || i.includes("the", 0))

function masodikFunction() {
  var x = document.createElement("LI");
  for (let i = 0; i < masodikfeladat.length; i++) {
    var t = document.createElement('li');
    t.textContent = masodikfeladat[i]
    document.getElementById("lista").appendChild(t);

  }
}

function harmadikFunction(){
  const p = document.getElementById("bekezdes")
const harmadikfeladat = Array.from(idezet.filter(i => i.quote))
                            .map(i => i.quote.length)
                            .join(", ")
   p.textContent=harmadikfeladat                         

}

function negyedikFunction(){
  const szoveg = document.getElementById("Darabszam").value
  const eredmeny = document.getElementById("daraberedmeny")

  const szam = Array.from(idezetek.quotes)

  let db =0;
  for (let i=0 ; i<szam.length ;i++){
    if (szam[i].author == (szoveg)){
      db++;
    }


  }

  eredmeny.value=db;

}

const gomb1 = document.getElementById("Osszesidezet")
const gomb2 = document.getElementById("The")
const gomb3 = document.getElementById("Hossz")
const gomb4 = document.getElementById("Darabszam1")


function init(){
  gomb1.addEventListener("click",myFunction)
  gomb2.addEventListener("click", masodikFunction )
  gomb3.addEventListener("click", harmadikFunction )
  gomb4.addEventListener("click", negyedikFunction )
}
  
document.addEventListener("DOMContentLoaded",init)

  



