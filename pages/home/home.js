document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const bookTableBtn = document.getElementById("bookTableBtn");
  const bookTableBtn1 = document.getElementById("bookTableBtn1");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Your Name']").value;
    const email = form.querySelector("input[placeholder='Your Email']").value;
    const dateTime = form.querySelector(
      "input[placeholder='Date & Time']"
    ).value;
    const people = form.querySelector(
      "input[placeholder='No Of People']"
    ).value;
    const request = form.querySelector(
      "textarea[placeholder='Special request']"
    ).value;

    alert(
      `Name: ${name}\nEmail: ${email}\nDate & Time: ${dateTime}\nNo of People: ${people}\nSpecial Request: ${request}`
    );
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (bookTableBtn) {
    bookTableBtn.addEventListener("click", () => {
      document
        .getElementById("reservation")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  if (bookTableBtn1) {
    bookTableBtn1.addEventListener("click", () => {
      document
        .getElementById("reservation")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      document
        .getElementById("specialities")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".items-list .item");

  const menuData = {
    Breakfast: [
      {
        title: "Pancakes",
        price: "$10",
        desc: "Fluffy pancakes with maple syrup",
        image: "../../assets/images/image-1.jpg",
      },
      {
        title: "Omelette",
        price: "$8",
        desc: "Cheese omelette with toast",
        image: "../../assets/images/image-8.jpg",
      },
      {
        title: "French Toast",
        price: "$9",
        desc: "Golden bread with cinnamon and sugar",
        image: "../../assets/images/image-2.jpg",
      },
      {
        title: "Waffles",
        price: "$11",
        desc: "Crispy waffles with whipped cream",
        image: "../../assets/images/image-3.jpg",
      },
      {
        title: "Granola Bowl",
        price: "$7",
        desc: "Granola with fresh fruits and yogurt",
        image: "../../assets/images/image-4.jpg",
      },
      {
        title: "Bagel & Cream Cheese",
        price: "$6",
        desc: "Toasted bagel with cream cheese",
        image: "../../assets/images/image-5.jpg",
      },
      {
        title: "Smoothie",
        price: "$5",
        desc: "Fresh fruit blend with milk or yogurt",
        image: "../../assets/images/image-8.jpg",
      },
      {
        title: "Avocado Toast",
        price: "$9",
        desc: "Toasted bread topped with avocado slices",
        image: "../../assets/images/image-1.jpg",
      },
    ],
    Lunch: [
      {
        title: "Chicken Burger",
        price: "$12",
        desc: "Crispy chicken with fries",
        image: "../../assets/images/image-5.jpg",
      },
      {
        title: "Pizza Slice",
        price: "$15",
        desc: "Cheesy pepperoni pizza slice",
        image: "../../assets/images/image-4.jpg",
      },
      {
        title: "Caesar Salad",
        price: "$10",
        desc: "Romaine lettuce with Caesar dressing",
        image: "../../assets/images/image-3.jpg",
      },
      {
        title: "Club Sandwich",
        price: "$11",
        desc: "Triple-layer sandwich with fries",
        image: "../../assets/images/image-2.jpg",
      },
      {
        title: "Pasta Alfredo",
        price: "$13",
        desc: "Creamy Alfredo pasta with parmesan",
        image: "../../assets/images/image-1.jpg",
      },
      {
        title: "Grilled Cheese",
        price: "$9",
        desc: "Classic cheese sandwich",
        image: "../../assets/images/image-8.jpg",
      },
      {
        title: "Burrito Bowl",
        price: "$14",
        desc: "Rice, beans, and chicken burrito bowl",
        image: "../../assets/images/image-5.jpg",
      },
      {
        title: "Fish Tacos",
        price: "$12",
        desc: "Crispy fish tacos with salsa",
        image: "../../assets/images/image-1.jpg",
      },
    ],
    Dinner: [
      {
        title: "Grilled Salmon",
        price: "$20",
        desc: "Served with seasonal veggies",
        image: "../../assets/images/image-3.jpg",
      },
      {
        title: "Steak",
        price: "$25",
        desc: "Juicy steak with mashed potatoes",
        image: "../../assets/images/image-5.jpg",
      },
      {
        title: "Roast Chicken",
        price: "$18",
        desc: "Oven-roasted chicken with herbs",
        image: "../../assets/images/image-2.jpg",
      },
      {
        title: "Shrimp Pasta",
        price: "$22",
        desc: "Garlic shrimp with linguine pasta",
        image: "../../assets/images/image-1.jpg",
      },
      {
        title: "Lamb Chops",
        price: "$28",
        desc: "Tender lamb chops with rosemary",
        image: "../../assets/images/image-8.jpg",
      },
      {
        title: "Vegetable Stir Fry",
        price: "$15",
        desc: "Mixed vegetables with soy sauce",
        image: "../../assets/images/image-5.jpg",
      },
      {
        title: "Beef Stew",
        price: "$19",
        desc: "Slow-cooked beef with potatoes",
        image: "../../assets/images/image-2.jpg",
      },
      {
        title: "Mushroom Risotto",
        price: "$17",
        desc: "Creamy risotto with mushrooms",
        image: "../../assets/images/image-1.jpg",
      },
    ],
  };

  // Add click listeners
  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove "selected" class from all
      items.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");

      // Get category name (Breakfast, Launch, Dinner)
      const category = item.querySelector(".text-bold").innerText;

      // Render new menu
      renderMenu(category);
    });
  });

  function renderMenu(category) {
    console.log("Render menu for category:", category);
    // menuContainer.innerHTML = ""; // clear old menu
    const items = document.querySelectorAll(".menu-item");

    console.log("items", items);

    items.forEach((item, index) => {
      console.log("Removing item", item);
      const titleEl = item.querySelector(".title");
      const priceEl = item.querySelector(".price");
      const subTitle = item.querySelector(".sub-title");
      const image = item.querySelector(".image");

      console.log("titleEl", titleEl);
      console.log("priceEl", priceEl);

      if (titleEl && priceEl && menuData[category][index]) {
        titleEl.textContent = menuData[category][index].title;
        priceEl.textContent = menuData[category][index].price;
        subTitle.textContent = menuData[category][index].desc;
        image.src = menuData[category][index].image;
      }
    });

    menuData[category].forEach((dish) => {
      //   const menuItem = document.createElement("div");
      //   menuItem.classList.add("menu-item");
      //   menuItem.innerHTML = `
      //     <div class="item-container">
      //       <div class="item-content">
      //         <div class="headings">
      //           <div class="flex justify-between">
      //             <div class="title">${dish.title}</div>
      //             <div class="price">${dish.price}</div>
      //           </div>
      //           <div class="sub-title">${dish.desc}</div>
      //         </div>
      //       </div>
      //     </div>
      //   `;
      //   menuContainer.appendChild(menuItem);
    });
  }

  // Load Breakfast by default
  renderMenu("Breakfast");
});
