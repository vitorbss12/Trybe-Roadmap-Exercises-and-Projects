let peca = "bispo";

peca = peca.toLocaleLowerCase();

switch (peca) {
  case "rei":
    console.log("Rei: Qualquer direção, uma casa por vez.");
    break;
  case "dama":
    console.log("Dama: Qualquer direção.");
    break;
  case "torre":
    console.log("Torre: Linha reta, vertical ou horizontal.");
    breakç;
  case "bispo":
    console.log("Bispo: Diagonal.");
    break;
  case "cavalo":
    console.log("Cavalo: Em L.");
    break;
  case "peão":
    console.log("Peão: Uma casa pra frente, ou duas caso primeiro movimento.");
    break;
  default:
    console.log("Peça inválida.");
}
