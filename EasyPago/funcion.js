// Clase para calcular el pago
class Calcular {
  constructor() {
    // Obtener los valores del formulario
    // Obtener los valores del formulario y convertirlos a número
    this.pagar = parseFloat(document.getElementById("num1").value);
    this.interes = parseFloat(document.getElementById("num2").value);
    this.cuotas = parseInt(document.getElementById("num3").value);
  }
}

document.getElementById("btn").addEventListener("click", () => {
  let resultado = new Calcular();

  const resultadoPagar = () =>
    ((resultado.pagar * resultado.interes) / 100 + resultado.pagar)/resultado.cuotas;

  // Formatear el resultado en moneda chilena con dos decimales
  const ResulFormateado = new Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
    minimumFractionDigits: 2,
  }).format(resultadoPagar());

  
  const mensajeSalida = () => `¡NO TE PREOCUPES! PUEDES PAGARLO EN    ${resultado.cuotas}  CUOTAS`;
  document.getElementById("mensaje").innerHTML = `${mensajeSalida()} ${ResulFormateado}`;
});
