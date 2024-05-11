let num1 = parseInt(
  prompt("Si ingresas 5 números te ganas un premio!!! Ingresa tu primer número")
);
let num2 = parseInt(prompt("Ingresa tu segundo número"));
let num3 = parseInt(prompt("Ingresa tu tercer número, estás a la mitad!!"));
let num4 = parseInt(prompt("Ingresa tu cuarto número, queda poco!!"));
let num5 = parseInt(
  prompt("Ingresa tu quinto número, y acepta tu recompensa!!")
);
if (
  !isNaN(num1) &&
  !isNaN(num2) &&
  !isNaN(num3) &&
  !isNaN(num4) &&
  !isNaN(num5)
) {
  alert(
    "¡¡¡¡TU PREMIO LLEGÓ!!! es resultado de la suma de tus 5 números: " +
      (num1 + num2 + num3 + num4 + num5) +
      " y su promedio: " +
      (num1 + num2 + num3 + num4 + num5) / 5
  );
}
