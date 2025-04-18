fetch("products.json")
  .then(response => response.json())
  .then(products => {
    document.getElementById("searchBox").addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const match = products.find(p => p.name.toLowerCase().includes(query));
      document.getElementById("result").textContent = match
        ? `✅ ${match.name} — ${match.price}`
        : "❌ No matching product found.";
    });
  });
