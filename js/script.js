function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById("konversi-input").value);
  if (isNaN(celsius)) {
      alert("Masukkan angka yang valid di kolom Celsius.");
      return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  const fahrenheitRounded = Math.round(fahrenheit); 
  document.getElementById("result-input").value = fahrenheitRounded;
  document.getElementById("calculate-detail").value = `${celsius}°C * (9/5) + 32 = ${fahrenheitRounded}°F`;
}

function resetFields() {
  document.getElementById("konversi-input").value = "";
  document.getElementById("result-input").value = "";
  document.getElementById("calculate-detail").value = "";
}

function reverseConversion() {
  const fahrenheit = parseFloat(document.getElementById("konversi-input").value);
  if (isNaN(fahrenheit)) {
      alert("Masukkan angka yang valid di kolom Celsius (digunakan untuk reverse).");
      return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;
  const celsiusRounded = Math.round(celsius); 
  document.getElementById("result-input").value = celsiusRounded;
  document.getElementById("calculate-detail").value = `(${fahrenheit}°F - 32) × (5/9) = ${celsiusRounded}°C`;
}

document.querySelector('.bg-1').addEventListener('click', function(event) {
  event.preventDefault(); 
  convertToFahrenheit();
});

document.querySelector('.bg-2').addEventListener('click', function(event) {
  event.preventDefault(); 
  resetFields();
});

document.querySelector('.bg-3').addEventListener('click', function(event) {
  event.preventDefault(); 
  reverseConversion();
});
