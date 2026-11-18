// Data Menu dengan path gambar .jpeg
const menuData = [
  { 
    id: 1, 
    name: "Ayam Geprek Sambal Matah Spesial", 
    category: "makanan", 
    price: 18000, 
    sold: "1,2RB terjual", 
    image: "images/ayam-geprek.jpeg", 
    badge: "Star+" 
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
    name: "Nasi Goreng Kambing Kebon Sirih", 
    category: "makanan", 
    price: 28000, 
    sold: "850 terjual", 
    image: "images/nasi-goreng.jpeg", 
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
    badge: "" 
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
  }
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
