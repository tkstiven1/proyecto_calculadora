function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').textContent = 'Por favor, ingresá dos números válidos.';
      return null;
    }

    return [num1, num2];
  }

  function mostrarResultado(valor) {
    document.getElementById('resultado').textContent = 'Resultado: ' + valor;
  }

  function sumar() {
    const numeros = obtenerNumeros();
    if (numeros) {
      const [a, b] = numeros;
      mostrarResultado(a + b);
    }
  }

  function restar() {
    const numeros = obtenerNumeros();
    if (numeros) {
      const [a, b] = numeros;
      mostrarResultado(a - b);
    }
  }

  function multiplicar() {
    const numeros = obtenerNumeros();
    if (numeros) {
      const [a, b] = numeros;
      mostrarResultado(a * b);
    }
  }

  function dividir() {
    const numeros = obtenerNumeros();
    if (numeros) {
      const [a, b] = numeros;
      if (b === 0) {
        mostrarResultado('No se puede dividir por cero');
      } else {
        mostrarResultado(a / b);
      }
    }
  }
  