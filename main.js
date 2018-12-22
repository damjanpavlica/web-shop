const ukupnoElement = document.getElementById("ukupno")
const brojArtikalaElement = document.getElementById("broj-artikala")
const ceneElementi = document.querySelectorAll(".cena")
const kolicineElementi = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
  let total = 0
  let brojProizvoda = 0
  for (let i = 0; i < ceneElementi.length; i++) {
    const cena = Number(ceneElementi[i].innerText)
    const kolicina = Number(kolicineElementi[i].value)
    if (kolicina) {
      total += cena * kolicina
      brojProizvoda += kolicina
    }
  }
  ukupnoElement.innerText = total
  brojArtikalaElement.innerText = brojProizvoda
}

for (let i = 0; i < ceneElementi.length; i++) {
  kolicineElementi[i].addEventListener("input", azuriraj)
}

azuriraj()
