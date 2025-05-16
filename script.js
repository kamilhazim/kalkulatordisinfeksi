function kira() {
    const inputVolume = parseFloat(document.getElementById("volume").value);
    const selectedUnit = document.getElementById("unit").value;
  
    if (!inputVolume || inputVolume <= 0 || isNaN(inputVolume)) {
      document.getElementById("hasil").style.display = "none";
      document.getElementById("hasilBody").innerHTML = "";
      document.getElementById("cardContainer").style.display = "none";
      document.getElementById("cardContainer").innerHTML = "";
      return;
    }
  
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
        situasi: "Semasa tiada kejadian penyakit berjangkit",
        aplikasi: "Permainan, pinggan mangkuk, pakaian"
      }
    ];
  
    let tableRows = "";
    let cardOutput = "";
  
    data.forEach(item => {
      const totalParts = 1 + item.ratio;
      const chemical = finalVolume / totalParts;
      const water = finalVolume - chemical;
  
      function formatVolume(value) {
        return value >= 1
          ? `${value.toFixed(2)} L`
          : `${Math.round(value * 1000)} mL`;
      }
  
      tableRows += `
        <tr>
          <td data-label="Situasi">${item.situasi}</td>
          <td data-label="Aplikasi">${item.aplikasi}</td>
          <td data-label="Nisbah">1:${item.ratio}</td>
          <td data-label="Bahan Peluntur">${formatVolume(chemical)}</td>
          <td data-label="Air">${formatVolume(water)}</td>
        </tr>
      `;

      
  
      cardOutput += `
      <div class="result-card">
        <div class="card-header">${item.situasi}</div>
        <div class="card-body">
          <p><strong>Aplikasi:</strong> ${item.aplikasi}</p>
          <p><strong>Nisbah:</strong> 1:${item.ratio}</p>
          <div class="amount-highlight">
            <p><strong>🧴 Bahan Peluntur:</strong> ${formatVolume(chemical)}</p>
            <p><strong>💧 Air:</strong> ${formatVolume(water)}</p>
          </div>
        </div>
      </div>
    `;
    });
  
    document.getElementById("hasilBody").innerHTML = tableRows;
    document.getElementById("hasil").style.display = "table";
  
    document.getElementById("cardContainer").innerHTML = cardOutput;
    document.getElementById("cardContainer").style.display = "none";
  
    // Automatically show card version only on small screens
    if (window.innerWidth < 600) {
      document.getElementById("hasil").style.display = "none";
      document.getElementById("cardContainer").style.display = "block";
    }
  }
  
