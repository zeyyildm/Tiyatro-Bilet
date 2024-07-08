const enDis = document.querySelector(".enDis");
const count = document.querySelector("#count");
const amount = document.querySelector(".amount");
const secili = document.querySelector(".filmSecimi");
const filmTercihi = document.querySelectorAll(".filmSecimi li");
let ucret = 0;
const koltuklar = document.querySelectorAll(".koltuk");

filmTercihi.forEach(function(film){
    film.addEventListener("click", function(e){
        ucret = parseInt(e.target.getAttribute("value"));
        updateUcret();
    });
});

function updateUcret() {
    let seciliKoltuklar = enDis.querySelectorAll(".seciliKoltuk");
    let seciliKoltukSayisi = seciliKoltuklar.length;
    amount.innerText = seciliKoltukSayisi * ucret;
}

enDis.addEventListener("click", function(e){
    if (e.target.classList.contains("koltuk") && !e.target.classList.contains("doluKoltuk")) {
        e.target.classList.toggle("seciliKoltuk");

        let seciliKoltuklar = enDis.querySelectorAll(".seciliKoltuk");
        let seciliKoltukIndexleri = Array.from(seciliKoltuklar).map(function(koltuk){
            return Array.from(koltuklar).indexOf(koltuk);
        });

        let seciliKoltukSayisi = seciliKoltuklar.length;
        count.innerText = seciliKoltukSayisi;
        updateUcret();

        saveToLocalStorage(seciliKoltukIndexleri);
    }
});

function saveToLocalStorage(index) {
    localStorage.setItem("secilikoltuklar", JSON.stringify(index));
}











