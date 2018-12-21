const ukupno = document.getElementById("ukupno")
const brojArtikala = document.getElementById("broj-artikala")
const cene = document.querySelectorAll(".cena")
const kolicine = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
  let total = 0
  let brojProizvoda = 0
  for (let i = 0; i < cene.length; i++) {
    const cena = Number(cene[i].innerText)
    const kolicina = Number(kolicine[i].value)
    if (kolicina) {
      total += cena * kolicina
      brojProizvoda += kolicina
    }
  }
  ukupno.innerText = total
  brojArtikala.innerText = brojProizvoda
}

for (let i = 0; i < cene.length; i++) {
  kolicine[i].addEventListener("input", azuriraj)
}

azuriraj()
