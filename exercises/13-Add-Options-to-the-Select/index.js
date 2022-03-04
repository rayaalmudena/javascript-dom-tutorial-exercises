let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

const selectionInput = document.querySelector("#mySelect");
console.log(selectionInput);

for (let index = 0; index < countries.length; index++) {
    let country = document.createElement("option");
    country.innerHTML=countries[index];
    selectionInput.appendChild(country);
}

selectionInput.addEventListener('change', (event) => {
    alert(event.target.value);
});