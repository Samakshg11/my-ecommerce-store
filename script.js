// ✅ Product container select karna
const container = document.getElementById("product-container");

// ✅ API se products fetch karna
fetch("https://dummyjson.com/products")
  .then((res) => res.json()) // response ko JSON me convert karna
  .then((data) => {
    const products = data.products; // products array

    console.log("All Products Data:", data);

    // ✅ Har product ko page par show karna
    products.forEach((product) => {
      // 🔹 Card div create karna
      const card = document.createElement("div");
      card.className = "product-card";

      // 🔹 Image create karna
      const img = document.createElement("img");
      img.src = product.thumbnail;

      // 🔹 Title create karna
      const title = document.createElement("h3");
      title.innerText = product.title;

      // 🔹 Description create karna (sirf 60 characters)
      const desc = document.createElement("p");
      desc.innerText = product.description.slice(0, 60) + "...";

      // 🔹 Price create karna
      const price = document.createElement("p");
      price.className = "price";
      price.innerText = "₹ " + product.price;

      // 🔹 Elements ko card me add karna
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(price);

      // 🔹 Card ko container me add karna
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error fetching products:", err));

// ✅ Search Button Logic

const btn = document.getElementById("btn");
const inputBox = document.getElementById("inputBox");

// Button click event
btn.addEventListener("click", () => {
  const query = inputBox.value.trim(); // extra spaces remove karna

  // Agar input empty ho to kuch nahi hoga
  if (!query) {
    alert("Please enter something to search!");
    return;
  }

  console.log("Search Query:", query);

  // Search page par redirect karna
  window.location.href = `search.html?q=${query}`;

  // Input box clear karna
  inputBox.value = "";
});
