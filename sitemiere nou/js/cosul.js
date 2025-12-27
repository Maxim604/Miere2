/*let cos = JSON.parse(localStorage.getItem("cos")) || [];
actualizeazaContor();

// adaugă produs + deschide fereastra
function adaugaProdus(nume, pret) {
    cos.push({ nume, pret });
    localStorage.setItem("cos", JSON.stringify(cos));
    actualizeazaContor();
    afiseazaCos();
    deschideCos();
}

function afiseazaCos() {
    const lista = document.getElementById("cart-list");
    const totalEl = document.getElementById("cart-total");
    lista.innerHTML = "";

    let total = 0;

    cos.forEach(prod => {
        total += prod.pret;
        const li = document.createElement("li");
        li.innerHTML = `${prod.nume} <strong>${prod.pret} lei</strong>`;
        lista.appendChild(li);
    });

    totalEl.innerHTML = `<strong>Total: ${total} lei</strong>`;
}

function deschideCos() {
    document.getElementById("cart-modal").style.display = "block";
}

function inchideCos() {
    document.getElementById("cart-modal").style.display = "none";
}

function actualizeazaContor() {
    document.getElementById("cart-count").innerText = cos.length;
}*/
let cos = JSON.parse(localStorage.getItem("cos")) || [];
actualizeazaContor();

// adaugă produs + deschide fereastra
function adaugaProdus(nume, pret) {
    cos.push({ nume, pret });
    salveazaCos();
    afiseazaCos();
    deschideCos();
}

// afișează produsele din coș
function afiseazaCos() {
    const lista = document.getElementById("cart-list");
    const totalEl = document.getElementById("cart-total");
    lista.innerHTML = "";

    let total = 0;

    cos.forEach((prod, index) => {
        total += prod.pret;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${prod.nume} - ${prod.pret} lei</span>
            <button onclick="stergeProdus(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    totalEl.innerHTML = `<strong>Total: ${total} lei</strong>`;
}

// șterge produs din coș
function stergeProdus(index) {
    cos.splice(index, 1);
    salveazaCos();
    afiseazaCos();
}

// deschide / închide fereastra
function deschideCos() {
    document.getElementById("cart-modal").style.display = "block";
}

function inchideCos() {
    document.getElementById("cart-modal").style.display = "none";
}

// salvare + contor
function salveazaCos() {
    localStorage.setItem("cos", JSON.stringify(cos));
    actualizeazaContor();
}

function actualizeazaContor() {
    document.getElementById("cart-count").innerText = cos.length;
}

