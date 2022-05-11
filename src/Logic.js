///combertir el input a texto


//READ ALL THE COMMENTS

// unnecessary variable

// do not export the method, is imposible to uses outside

// Change for a better solution
export function medida(med = 0) {
  if (med >= 160 && med <= 165) {
    alert("Su talla de bici es XS");
  }else
  if (med >= 166 && med <= 170) {
    alert("Su talla de bici es S");
  }else
  if (med >= 171 && med <= 179) {
    alert("Su talla de bici es M");
  }else
  if (med >= 180 && med <= 186) {
    alert("Su talla de bici es L");
  }else
  if (med >= 187 && med <= 195) {
    alert("Su talla de bici es XL");
  }else{
      alert("Su talla de bici no es valida, verifique")
  }
}
