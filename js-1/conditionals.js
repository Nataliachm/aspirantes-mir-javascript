function calcuarColor(num) {
    let color;
    if (num == 1) {
      color = "negro";
    } else if (num == 2) {
      color = "blanco";
    } else if (num == 3) {
      color = "azul";
    } else {
      color= "verde";
    }
    console.log("El color es " + color)
    return "El color es " + color;
  }

calcuarColor(1)
calcuarColor(2)
calcuarColor(3)
calcuarColor(4)
calcuarColor(5)