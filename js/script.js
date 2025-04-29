// Fungsi Konversi Celsius ke Fahrenheit
function convertCtoF() {
    const input = document.getElementById("konversi-input").value;
    const resultField = document.getElementById("result-input");
    const calcDetail = document.getElementById("calculate-detail");
  
    const celcius = parseFloat(input);
  
    if (isNaN(celcius)) {
      alert("Masukkan angka suhu dalam Celsius yang valid!");
      return;
    }
  
    const fahrenheit = (celcius * 9 / 5) + 32;
    resultField.value = fahrenheit.toFixed(2);
    calcDetail.value = `(${celcius} °C × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
  }
  
  // Fungsi Reset
  function resetFields() {
    document.getElementById("konversi-input").value = "";
    document.getElementById("result-input").value = "";
    document.getElementById("calculate-detail").value = "";
  }
  
  // Fungsi Reverse: Fahrenheit ke Celsius
  function reverseConvert() {
    const input = document.getElementById("konversi-input").value;
    const resultField = document.getElementById("result-input");
    const calcDetail = document.getElementById("calculate-detail");
  
    const fahrenheit = parseFloat(input);
  
    if (isNaN(fahrenheit)) {
      alert("Masukkan angka suhu dalam Fahrenheit yang valid!");
      return;
    }
  
    const celcius = (fahrenheit - 32) * 5 / 9;
    resultField.value = celcius.toFixed(2);
    calcDetail.value = `(${fahrenheit} °F - 32) × 5/9 = ${celcius.toFixed(2)} °C`;
  }
  
  // Event Listener tombol
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".bg-1").addEventListener("click", function (e) {
      e.preventDefault();
      convertCtoF();
    });
  
    document.querySelector(".bg-2").addEventListener("click", function (e) {
      e.preventDefault();
      resetFields();
    });
  
    document.querySelector(".bg-3").addEventListener("click", function (e) {
      e.preventDefault();
      reverseConvert();
    });
  });
  