function kira() {
    const inputVolume = parseFloat(document.getElementById("volume").value);
    const selectedUnit = document.getElementById("unit").value;
  
    // If input is invalid or empty, hide the table and return
    if (!inputVolume || inputVolume <= 0 || isNaN(inputVolume)) {
      document.getElementById("hasil").style.display = "none";
      document.getElementById("hasilBody").innerHTML = "";
      return;
    }
  
    // Convert to liters
    const finalVolume = selectedUnit === "mL" ? inputVolume / 1000 : inputVolume;
  
    const data = [
      {
        ratio: 9,
        situasi: "Semasa berlaku kejadian penyakit berjangkit",
        aplikasi: "Permukaan lantai dan tandas"
      },
      {
        ratio: 49,
        situasi: "Semasa tiada kejadian penyakit berjangkit",
        aplikasi: "Permukaan lantai dan tandas"
      },
      {
        ratio: 499,
        situasi: "",
        aplikasi: "Permainan, pinggan mangkuk, pakaian"
      }
    ];
  
    let output = "";
    data.forEach(item => {
      const totalParts = 1 + item.ratio;
      const chemical = finalVolume / totalParts;
      const water = finalVolume - chemical;
  
      function formatVolume(value) {
        if (value >= 1) {
          return `${value.toFixed(2)} L`;
        } else {
          return `${Math.round(value * 1000)} mL`;
        }
      }
  
      output += `
        <tr>
          <td>${item.situasi}</td>
          <td>${item.aplikasi}</td>
          <td>1:${item.ratio}</td>
          <td>${formatVolume(chemical)}</td>
          <td>${formatVolume(water)}</td>
        </tr>
      `;
    });
  
    document.getElementById("hasil").style.display = "table";
    document.getElementById("hasilBody").innerHTML = output;
  }
  