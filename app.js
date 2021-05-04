let trainingDays = [
  ["C8DbCZGj5KQ", "c1mdorMppH4"],
  ["SML-fA6EJh4", "ldrG5GTgF_0"],
  ["lyb7UAtsq4w", "5oG8cMfKx9I"],
  ["ISk3x9E7ars", "qgjdta2jyxw"],
  ["30c8d9smbsE", "BKfGWNTssCY"], //5
  ["MCvE258aPv0", "CnfitL4Rl0o"],
  ["oAPCPjnU1wA", "igJrhW-GbNY"],
  ["tCtS-hNs6rk", "c1mdorMppH4"],
  ["A3b5sXtf6rc", "SML-fA6EJh4"],
  ["ldrG5GTgF_0", "-lO1pgoES74"], //10
  ["lyb7UAtsq4w", "5oG8cMfKx9I"],
  ["GfUpbhaCK7Y", "Irob_m12znc"],
  ["eQKzCem0eUs", "igJrhW-GbNY"],
  ["PfATi3Tp5Go", "c1mdorMppH4"],
  ["C8DbCZGj5KQ", "xngUfoWLkFw"], //15
  ["mm47bCaCzpQ", "lyb7UAtsq4w"],
  ["ISk3x9E7ars", "WRGCCvQwCyQ"],
  ["30c8d9smbsE", "qgjdta2jyxw"],
  ["CnfitL4Rl0o", "GfUpbhaCK7Y"],
  ["HzjVKXKzpNY", "BKfGWNTssCY"], //20
  ["C8DbCZGj5KQ", "C8DbCZGj5KQ"],
  ["qgjdta2jyxw", "c1mdorMppH4"],
  ["SML-fA6EJh4", "_q_-adYzkh0"],
  ["ldrG5GTgF_0", "-lO1pgoES74"],
  ["5oG8cMfKx9I", "lyb7UAtsq4w"], //25
  ["ISk3x9E7ars", "igJrhW-GbNY"],
  ["lmgeM9Ne-Ns", "BKfGWNTssCY"],
  ["qgjdta2jyxw", "eQKzCem0eUs"],
  ["oAPCPjnU1wA", "C8DbCZGj5KQ"],
  ["30c8d9smbsE", "mm47bCaCzpQ"], //30
  ["CnfitL4Rl0o", "ISk3x9E7ars"],
  ["5oG8cMfKx9I", "lyb7UAtsq4w"],
  ["tCtS-hNs6rk", "qgjdta2jyxw"],
  ["Auo8veVyRIY", "BKfGWNTssCY"],
  ["lmgeM9Ne-Ns", "c1mdorMppH4"], //35
  ["Irob_m12znc", "qgjdta2jyxw"],
  ["C8DbCZGj5KQ", "C8DbCZGj5KQ"],
  ["tCtS-hNs6rk", "MCvE258aPv0"],
  ["ISk3x9E7ars", "ISk3x9E7ars"],
  ["30c8d9smbsE", "30c8d9smbsE"], //40
  ["eQKzCem0eUs", "c1mdorMppH4"],
  ["oAPCPjnU1wA", "Auo8veVyRIY"],
  ["C8DbCZGj5KQ", "Vfv084H00QI"],
  ["tCtS-hNs6rk", "GflOdkA5nS0"],
  ["xngUfoWLkFw", "BKfGWNTssCY"], //45
];

const mainTraining = document.querySelector(".mainTraining iframe");
const secondTraining = document.querySelector(".secondTraining iframe");
const formulaire = document.querySelector("form");
const jour = document.querySelector("input[type='number']");
let titre = document.querySelector("h1");

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (jour.value <= 45 && jour.value >= 1) {
    mainTraining.src = "https://www.youtube.com/embed/" + trainingDays[jour.value - 1][0];
    secondTraining.src = "https://www.youtube.com/embed/" + trainingDays[jour.value - 1][1];
    titre.textContent = "Jour N°: " + jour.value;
  }
});
