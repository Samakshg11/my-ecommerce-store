// ✅ 1. URL se search keyword nikalna
// Example: search.html?q=phone
const params = new URLSearchParams(window.location.search);

// "q" ki value lena
const query = params.get("q");

console.log("Search Query:", query);

// ✅ 2. HTML elements select karna
const container = document.getElementById("product-container");
const heading = document.getElementById("heading");

// Agar query nahi hai
if (!query) {
  heading.innerText = "Koi search keyword nahi mila 😢";
}

// ✅ 3. API se products fetch karna
fetch("https://dummyjson.com/products")
  .then((res) => res.json()) // response ko JSON me convert karna
  .then((data) => {
    const products = data.products; // products array

    // ✅ 4. Search ke according products filter karna
    const filteredArray = products.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    console.log("Filtered Products:", filteredArray);

    // ✅ 5. Agar koi product nahi mila
    if (filteredArray.length === 0) {
      heading.innerText = "❌ No search found";
      return;
    }

    // ✅ 6. Matching products ko page par show karna
    filteredArray.forEach((product) => {
      // Card div banana
      const card = document.createElement("div");
      card.className = "product-card";

      // Image banana
      const img = document.createElement("img");
      img.src = product.thumbnail;

      // Title banana
      const title = document.createElement("h3");
      title.innerText = product.title;

      // Description banana (sirf 60 characters)
      const desc = document.createElement("p");
      desc.innerText = product.description.slice(0, 60) + "...";

      // Price banana
      const price = document.createElement("p");
      price.className = "price";
      price.innerText = "₹ " + product.price;

      // Elements ko card me add karna
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(price);

      // Card ko container me add karna
      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Error fetching products:", err);
    heading.innerText = "⚠️ Error loading products";
  });
