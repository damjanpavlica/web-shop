const ukupnoElement = document.getElementById("ukupno")
const brojArtikalaElement = document.getElementById("broj-artikala")
const ceneElementi = document.querySelectorAll(".cena")
const kolicineElementi = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
  let ukupno = 0
  let brojArtikala = 0
  for (let i = 0; i < ceneElementi.length; i++) {
    const cena = Number(ceneElementi[i].innerText)
    const kolicina = Number(kolicineElementi[i].value)
    if (kolicina) {
      ukupno += cena * kolicina
      brojArtikala += kolicina
    }
  }
  ukupnoElement.innerText = ukupno
  brojArtikalaElement.innerText = brojArtikala
  localStorage.ukupno = ukupno
}

for (let i = 0; i < ceneElementi.length; i++) {
  kolicineElementi[i].addEventListener("input", azuriraj)
}

azuriraj()
