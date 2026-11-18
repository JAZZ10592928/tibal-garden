// Data Menu dengan path gambar .jpeg
const menuData = [
  { 
    id: 1, 
    name: "V60", 
    category: "minuman", 
    price: 9000, 
    sold: "819 terjual", 
    image: "V60.jpeg", 
    badge: "Star" 
  },
  { 
    id: 2, 
    name: "Es Kopi Susu Gula Aren", 
    category: "minuman", 
    price: 15000, 
    sold: "3,4RB terjual", 
    image: "images/kopi-susu.jpeg", 
    badge: "Terlaris" 
  },
  { 
    id: 3, 
    name: "Nasi Goreng Special", 
    category: "makanan", 
    price: 17000, 
    sold: "860 terjual", 
    image: "Nasi-Goreng.jpeg", 
    badge: "Star" 
  },
  { 
    id: 4, 
    name: "Dimsum Ayam Udang (Isi 4)", 
    category: "snack", 
    price: 14000, 
    sold: "2,1RB terjual", 
    image: "images/dimsum.jpeg", 
    badge: "Star+" 
  },
  { 
    id: 5, 
    name: "Matcha Latte Creamy", 
    category: "minuman", 
    price: 20000, 
    sold: "940 terjual", 
    image: "images/matcha-latte.jpeg", 
    badge: "Star" 
  },
  { 
    id: 6, 
    name: "Kentang Goreng Saus Keju", 
    category: "snack", 
    price: 12000, 
    sold: "1,5RB terjual", 
    image: "kentang-goreng-sauskeju.jpeg", 
    badge: "Terlaris" 
  },
  { 
    id: 7, 
    name: "Mie Ayam Bakso Urat Jumbo", 
    category: "makanan", 
    price: 22000, 
    sold: "620 terjual", 
    image: "images/mie-ayam.jpeg", 
    badge: "Star" 
  },
  { 
    id: 8, 
    name: "Croffle Caramel Crunchy", 
    category: "snack", 
    price: 17500, 
    sold: "1,8RB terjual", 
    image: "images/croffle.jpeg", 
    badge: "Star+" 
  },
  { 
    id: 9, 
    name: "Americano", 
    category: "minuman", 
    price: 9000, 
    sold: "932 terjual", 
    image: "Americano.jpeg", 
    badge: "Star" 
  },
   { 
    id: 10, 
    name: "Tiraminsu", 
    category: "snack", 
    price: 21000, 
    sold: "1,3RB terjual", 
    image: "Tiraminsu.jpeg", 
    badge: "Star+" 
  },
   { 
    id: 11, 
    name: "Apple pie", 
    category: "snack", 
    price: 24000, 
    sold: "1,4RB terjual", 
    image: "Apple-pie.jpeg", 
    badge: "Star+" 
  },
   { 
    id:12, 
    name: "Fruit tea", 
    category: "minuman", 
    price: 7000, 
    sold: "922 terjual", 
    image: "Fruit-Tea.jpeg", 
    badge: "Star" 
  },
   { 
    id: 13, 
    name: "Green Tea", 
    category: "minuman", 
    price: 10000, 
    sold: "1,2 terjual", 
    image: "Green-Tea.jpeg", 
    badge: "Star+" 
  },
   { 
    id: 14, 
    name: "Cinnamon Roll", 
    category: "snack", 
    price: 10000, 
    sold: "911 terjual", 
    image: "Cinnamon-Roll.jpeg", 
    badge: "Star" 
  },
   { 
    id: 15, 
    name: "Hot Chocolate", 
    category: "minuman", 
    price: 12000, 
    sold: "1,1 terjual", 
    image: "Hot-Chocolate.jpeg", 
    badge: "Star+" 
  },
   { 
    id: 16, 
    name: "Latte", 
    category: "minuman", 
    price: 11000, 
    sold: "1.0 terjual", 
    image: "Latte.jpeg", 
    badge: "Star+" 
  },
   { 
    id: 17, 
    name: "Cappucino", 
    category: "minuman", 
    price: 12000, 
    sold: "1.4 terjual", 
    image: "Cappucino.jpeg", 
    badge: "Star+" 
  },
];

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const catButtons = document.querySelectorAll(".cat-btn");

let currentCategory = "all";
let searchQuery = "";

// Format Rupiah
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// Render Kartu Menu
function renderMenus() {
  menuGrid.innerHTML = "";

  const filtered = menuData.filter(item => {
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#757575;">Menu tidak ditemukan.</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    
    card.innerHTML = `
      <div class="card-img">
        ${item.badge ? `<span class="badge-star">${item.badge}</span>` : ""}
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div>
          <h3 class="menu-title">${item.name}</h3>
          <div class="meta-info">⭐ 4.9 | ${item.sold}</div>
        </div>
        <div class="price-box">
          <div class="price-placeholder">Tekan / Arahkan Cek Harga</div>
          <div class="price-actual">${formatRupiah(item.price)}</div>
        </div>
      </div>
    `;

    // Event saat kartu ditekan (klik/tap di HP) untuk memunculkan/menyembunyikan harga
    card.addEventListener("click", () => {
      card.classList.toggle("revealed");
    });

    menuGrid.appendChild(card);
  });
}

// Filter Kategori
catButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    catButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderMenus();
  });
});

// Pencarian Real-time
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderMenus();
});

// Tampilkan pertama kali
renderMenus();
