const ukupnoElement = document.getElementById("ukupno")
const brojArtikalaElement = document.getElementById("broj-artikala")
const naziviElementi = document.querySelectorAll("td:nth-child(2)")
const ceneElementi = document.querySelectorAll(".cena")
const kolicineElementi = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
  let ukupno = 0
  let brojArtikala = 0
  let poruka = "Narucili ste: \n"
  for (let i = 0; i < ceneElementi.length; i++) {
    const kolicina = Number(kolicineElementi[i].value)
    if (kolicina) {
      const naziv = naziviElementi[i].innerText
      const cena = Number(ceneElementi[i].innerText)
      ukupno += cena * kolicina
      brojArtikala += kolicina
      poruka += `- ${naziv} Komada: ${kolicina}, po ceni od ${cena} eura. \n`
    }
  }
  console.log(poruka);
  brojArtikalaElement.innerText = brojArtikala
  brojArtikalaElement.style.display = brojArtikala ? 'flex' : 'none'
  ukupnoElement.innerText = ukupno.toFixed(2)
  localStorage.ukupno = ukupno.toFixed(2)
  localStorage.poruka = poruka
}

for (let i = 0; i < ceneElementi.length; i++) {
  kolicineElementi[i].addEventListener("input", azuriraj)
}

azuriraj()
