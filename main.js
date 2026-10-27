/* ============================================================
   SUDHAMRIT BANQUET & RESTAURANT — ROYAL SUITE SCRIPT
   Enhanced with Images on ALL Dishes, Dynamic Active Navbar,
   21st.dev Spotlight Physics & GSAP ScrollTrigger
   ============================================================ */

'use strict';

/* ── Menu Database with Curated Unsplash Photos for ALL Dishes ── */
const menuData = [
  // SIGNATURE CREATIONS
  { 
    id: 1,
    name: 'Mutton Kosha (Royal Bengali)',
    cat: 'signature,mutton', 
    price: '360', 
    type: 'nonveg', 
    spice: 'Hot',
    desc: 'Tender goat slow-cooked for 4 hours in caramelized shallots, mustard oil, crushed black cardamom and whole garam masala.',
    pairing: 'Best enjoyed with Butter Naan or Steamed Basmati Rice.',
    badge: "Chef's Landmark Special",
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 2,
    name: 'Murgh Awadhi Dum Biryani',
    cat: 'signature,biryani,chicken', 
    price: '240', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Aromatic aged long-grain basmati sealed under traditional purdah with succulent chicken, saffron milk, and rose water.',
    pairing: 'Served with Burani Raita and spiced salan.',
    badge: 'Signature Dum Classic',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 3,
    name: 'Tandoori Murgh (Full / Half)',
    cat: 'signature,tandoori,chicken', 
    price: '280', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Whole chicken steeped in hung yogurt, Kashmiri deghi mirch, and roasted spices, char-grilled in a clay oven.',
    pairing: 'Accompanied by mint-coriander chutney and pickled laccha onions.',
    badge: 'Clay Oven Masterpiece',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 4,
    name: 'Paneer Butter Masala Shahi',
    cat: 'signature,veg', 
    price: '210', 
    type: 'veg', 
    spice: 'Mild',
    desc: 'Silken cubes of fresh cottage cheese enveloped in a velvety reduction of vine-ripened tomatoes, cashew butter, and fenugreek leaves.',
    pairing: 'Pairs gracefully with Garlic Naan or Laccha Paratha.',
    badge: 'Vegetarian Crown',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 5,
    name: 'Bhetki Fish Curry (Rui/Katla)',
    cat: 'signature,fish', 
    price: '320', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Traditional Bengal delicacy simmered in golden mustard seed paste, green chillies, and fragrant nigella seeds (kalonji).',
    pairing: 'Traditional pairing with fragrant Gobindobhog or Basmati rice.',
    badge: 'Bengal Coastal Heritage',
    img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 6,
    name: 'Dal Makhani Bukhara',
    cat: 'signature,veg', 
    price: '170', 
    type: 'veg', 
    spice: 'Mild',
    desc: 'Slow-simmered whole black lentils and kidney beans cooked overnight with churned white butter, tomatoes, and gentle spices.',
    pairing: 'Exceptional with Tandoori Roti or Jeera Rice.',
    badge: 'Overnight Slow-Cooked',
    img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=700&q=85'
  },

  // VEGETARIAN DELICACIES
  { 
    id: 7,
    name: 'Shahi Paneer Korma',
    cat: 'veg', 
    price: '210', 
    type: 'veg', 
    spice: 'Mild',
    desc: 'Fresh paneer cooked in a rich, delicately spiced almond-cashew white gravy with green cardamom and saffron.',
    pairing: 'Perfect with Butter Naan.',
    badge: 'Mughlai Royalty',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 8,
    name: 'Palak Paneer',
    cat: 'veg', 
    price: '190', 
    type: 'veg', 
    spice: 'Medium',
    desc: 'Hand-pureed baby spinach tempered with garlic, cumin, and fresh ginger, finished with lightly sautéed paneer.',
    pairing: 'Great with Roti or Paratha.',
    badge: 'Farm Fresh',
    img: 'https://images.unsplash.com/photo-1589647364468-789f838b4c10?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 9,
    name: 'Kashmiri Dum Aloo',
    cat: 'veg', 
    price: '140', 
    type: 'veg', 
    spice: 'Medium',
    desc: 'Baby potatoes deep-fried and slow-cooked in a yogurt-fennel gravy infused with dried ginger powder.',
    pairing: 'Superb with Pulao.',
    badge: 'Classic Comfort',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 10,
    name: 'Amritsari Chana Masala',
    cat: 'veg', 
    price: '140', 
    type: 'veg', 
    spice: 'Medium-Hot',
    desc: 'Kabuli chickpeas stewed with pomegranate seeds, dried mango powder, and freshly ground whole spices.',
    pairing: 'Best with Bhature or Tandoori Kulcha.',
    badge: 'North Indian Heritage',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 11,
    name: 'Navratan Meloni Tarkari (Mixed Veg)',
    cat: 'veg', 
    price: '150', 
    type: 'veg', 
    spice: 'Medium',
    desc: 'Seasonal farm-fresh vegetables tossed with cracked peppers, crushed coriander, and onion-tomato masala.',
    pairing: 'Ideal with Missi Roti or Phulka.',
    badge: 'Garden Fresh',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85'
  },

  // CHICKEN SPECIALTIES
  { 
    id: 12,
    name: 'Butter Chicken Grand Trunk',
    cat: 'chicken', 
    price: '280', 
    type: 'nonveg', 
    spice: 'Mild-Medium',
    desc: 'Charcoal-grilled chicken morsels tossed in an opulent satin makhani gravy enriched with fresh cream and honey.',
    pairing: 'The quintessential pairing with Garlic Naan.',
    badge: 'All-Time Crowd Favourite',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 13,
    name: 'Chicken Tikka Masala',
    cat: 'chicken', 
    price: '270', 
    type: 'nonveg', 
    spice: 'Medium-Hot',
    desc: 'Smoky boneless tandoori chicken chunks tossed with diced capsicum and roasted onions in a spiced masala.',
    pairing: 'Delicious with Rumali Roti.',
    badge: 'Smoky & Robust',
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 14,
    name: 'Chicken Changezi',
    cat: 'chicken', 
    price: '290', 
    type: 'nonveg', 
    spice: 'Hot',
    desc: 'Old Delhi style royal chicken roasted in milk and curd reduction with whole red chillies and coriander seeds.',
    pairing: 'Exceptional with Khamiri or Butter Naan.',
    badge: 'Old Delhi Heritage',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 15,
    name: 'Chicken Lababdar',
    cat: 'chicken', 
    price: '280', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Tender chicken pieces cooked in chopped onion and tomato gravy, enriched with grated cheese and cashews.',
    pairing: 'Best with Laccha Paratha.',
    badge: 'Rich & Creamy',
    img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=700&q=85'
  },

  // MUTTON SPECIALTIES
  { 
    id: 16,
    name: 'Kashmiri Mutton Rogan Josh',
    cat: 'mutton', 
    price: '370', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Tender prime mutton braised with Kashmiri chilies, ratan jot bark, asafoetida, and fragrant wild spices.',
    pairing: 'Divine with Steamed Basmati Rice.',
    badge: 'Wazwan Inspired',
    img: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 17,
    name: 'Mutton Do Pyaza',
    cat: 'mutton', 
    price: '350', 
    type: 'nonveg', 
    spice: 'Medium-Hot',
    desc: 'Slow-braised mutton prepared with two layers of sweet caramelized and freshly tossed pearl onions.',
    pairing: 'Pairs nicely with Tandoori Roti.',
    badge: 'Mughlai Masterpiece',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 18,
    name: 'Sudhamrit Special Mutton Curry',
    cat: 'mutton', 
    price: '340', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Homestyle rich mutton curry prepared with aromatic whole spices, garlic cloves, and hearty rustic gravy.',
    pairing: 'Ideal with hot Basmati rice.',
    badge: 'Grand Trunk Heritage',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=85'
  },

  // FISH & SEAFOOD
  { 
    id: 19,
    name: 'Calcutta Fish Fry (2 Pcs)',
    cat: 'fish', 
    price: '230', 
    type: 'nonveg', 
    spice: 'Mild',
    desc: 'Fresh Kolkata Bhetki fillet marinated in coriander, mint and mustard, breadcrumb coated and deep fried golden.',
    pairing: 'Served with Kasundi mustard and spiced onion salad.',
    badge: 'Calcutta Club Special',
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 20,
    name: 'Tawa Prawn Masala',
    cat: 'fish', 
    price: '390', 
    type: 'nonveg', 
    spice: 'Medium-Hot',
    desc: 'Juicy tiger prawns tossed on a blazing iron griddle with cracked spices, curry leaves, and coastal tomato masala.',
    pairing: 'Great with Steamed Rice or Butter Roti.',
    badge: 'Coastal Prawn Delicacy',
    img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=700&q=85'
  },

  // BIRYANI & RICE
  { 
    id: 21,
    name: 'Royal Mutton Biryani',
    cat: 'biryani,mutton', 
    price: '320', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Layers of tender mutton, aromatic long basmati rice, browned onions, saffron, and slow-dum spices.',
    pairing: 'Served with spiced raita and salad.',
    badge: 'Dum Biryani Classic',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 22,
    name: 'Subz Shahi Veg Biryani',
    cat: 'biryani,veg', 
    price: '190', 
    type: 'veg', 
    spice: 'Medium',
    desc: 'Assorted garden vegetables, cottage cheese, mint, and basmati rice slow-cooked in sealed handi.',
    pairing: 'Served with fresh mint raita.',
    badge: 'Pure Dum Vegetarian',
    img: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 23,
    name: 'Egg Biryani Special',
    cat: 'biryani', 
    price: '190', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Boiled and golden-fried eggs layered with aromatic saffron rice and caramelized onions.',
    pairing: 'Served with chilled raita.',
    badge: 'Comfort Biryani',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=85'
  },

  // INDO-CHINESE WOK
  { 
    id: 24,
    name: 'Crispy Chilli Chicken Kolkata Style',
    cat: 'chinese', 
    price: '230', 
    type: 'nonveg', 
    spice: 'Hot',
    desc: 'Crispy battered chicken chunks tossed in dark soy sauce, fresh green chillies, garlic, and scallions.',
    pairing: 'Superb with Egg-Chicken Hakka Noodles.',
    badge: 'Tangra Heritage',
    img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 25,
    name: 'Chicken Fried Rice',
    cat: 'chinese', 
    price: '210', 
    type: 'nonveg', 
    spice: 'Mild',
    desc: 'Wok-tossed long-grain rice with shredded chicken, scrambled eggs, and crunchy seasonal vegetables.',
    pairing: 'Pairs great with Chicken Manchurian.',
    badge: 'Wok Master',
    img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 26,
    name: 'Crispy Chilli Paneer Dry',
    cat: 'chinese,veg', 
    price: '210', 
    type: 'veg', 
    spice: 'Medium-Hot',
    desc: 'Golden-fried fresh cottage cheese cubes tossed with crisp bell peppers, onions, soy, and fiery chillies.',
    pairing: 'Pairs with Veg Hakka Noodles.',
    badge: 'Veg Indo-Chinese',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 27,
    name: 'Chicken Chowmein Hakka',
    cat: 'chinese', 
    price: '200', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Fresh wok-tossed noodles tossed on high flame with shredded chicken, cabbage, carrots, and light soy.',
    pairing: 'Best as a quick meal.',
    badge: 'Street Style Hakka',
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=85'
  },

  // TANDOORI GRILLS
  { 
    id: 28,
    name: 'Mutton Seekh Kebab (4 Pcs)',
    cat: 'tandoori,mutton', 
    price: '260', 
    type: 'nonveg', 
    spice: 'Medium-Hot',
    desc: 'Finely minced mutton blended with ginger, royal herbs, and spices skewered and charred to smoky perfection.',
    pairing: 'Served with mint raita and lemon wedges.',
    badge: 'Smoky Clay Skewer',
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 29,
    name: 'Paneer Tikka Sunheri',
    cat: 'tandoori,veg', 
    price: '210', 
    type: 'veg', 
    spice: 'Medium',
    desc: 'Thick fresh cottage cheese cubes marinated in ajwain, turmeric, and spiced curd roasted over live coals.',
    pairing: 'Served with mint chutney.',
    badge: 'Vegetarian Tandoor',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85'
  },

  // THALIS & BANQUET MEALS
  { 
    id: 30,
    name: 'Royal Non-Veg Mutton Thali',
    cat: 'thali', 
    price: '270', 
    type: 'nonveg', 
    spice: 'Medium',
    desc: 'Rich feast featuring Mutton Curry, Yellow Dal Tadka, Sabzi, Basmati Rice, 2 Tandoori Rotis, Salad, and Sweet.',
    pairing: 'Complete hearty dining experience.',
    badge: 'Grand Feast Thali',
    img: 'https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 31,
    name: 'Maharaja Veg Thali',
    cat: 'thali', 
    price: '150', 
    type: 'veg', 
    spice: 'Mild-Medium',
    desc: 'Wholesome vegetarian platter featuring Paneer Sabzi, Dal Fry, Seasonal Vegetable, Steamed Rice, 2 Rotis, and Chutney.',
    pairing: 'Complete daily balanced meal.',
    badge: 'Royal Vegetarian Meal',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85'
  },

  // BREADS & SIDES
  { 
    id: 32,
    name: 'Butter Garlic Naan',
    cat: 'breads', 
    price: '55', 
    type: 'veg', 
    spice: 'Mild',
    desc: 'Soft leavened clay oven bread topped with crushed roasted garlic, fresh coriander, and melted dairy butter.',
    pairing: 'The perfect partner for every rich curry.',
    badge: 'Tandoor Fresh',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85'
  },
  { 
    id: 33,
    name: 'Laccha Paratha',
    cat: 'breads', 
    price: '45', 
    type: 'veg', 
    spice: 'Mild',
    desc: 'Flaky multi-layered whole-wheat bread baked to crisp perfection with golden ghee.',
    pairing: 'Splendid with slow-braised curries.',
    badge: 'Crispy Layers',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=85'
  }
];

/* ── DOM Elements ── */
const menuGrid = document.getElementById('menu-grid');
const noResults = document.getElementById('menu-no-results');
const searchInput = document.getElementById('menu-search');
const clearSearchBtn = document.getElementById('clear-search');
const menuCountBadge = document.getElementById('menu-count-badge');
const tabButtons = document.querySelectorAll('.cat-tab-btn');
const dietaryRadios = document.querySelectorAll('input[name="dietary-filter"]');
const scrollProgressBar = document.getElementById('scroll-progress');
const siteHeader = document.getElementById('site-header');

// Collapsible Menu Elements
const menuCollapseContainer = document.getElementById('menu-collapse-container');
const menuCollapseBtn = document.getElementById('menu-collapse-btn');
const menuCollapseText = document.getElementById('menu-collapse-text');
const menuCollapseIcon = document.getElementById('menu-collapse-icon');
let isMenuExpanded = false;
const COLLAPSED_LIMIT = 8;

let activeCat = 'all';
let activeDietary = 'all';
let searchQuery = '';

/* ── 1. Live Restaurant Hours Status (12 PM to 10 PM IST) ── */
function updateLiveStatus() {
  const statusPills = document.querySelectorAll('.live-status-container');
  if (!statusPills.length) return;

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  const currentHour = istTime.getHours();
  const currentMinute = istTime.getMinutes();
  const timeInMinutes = (currentHour * 60) + currentMinute;

  // 12:00 PM = 720 minutes, 10:00 PM = 1320 minutes
  const isOpen = (timeInMinutes >= 720 && timeInMinutes <= 1320);

  statusPills.forEach(pill => {
    if (isOpen) {
      pill.innerHTML = `
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md">
          <span class="live-dot" style="background-color:#22c55e;"></span>
          Kitchen Open Now &middot; Serving Fresh Dine-in &amp; Banquets
        </span>
      `;
    } else {
      pill.innerHTML = `
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <span class="live-dot" style="background-color:#f59e0b;"></span>
          Opens Daily at 12:00 PM &middot; Advance Banquet Inquiries Active
        </span>
      `;
    }
  });
}
updateLiveStatus();
setInterval(updateLiveStatus, 60000);

/* ── 2. Render Menu Cards with Images on ALL Dishes (Smaller & Less Detailed) ── */
// Check URL category query param (e.g. ?cat=biryani)
try {
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    activeCat = catParam;
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === catParam);
    });
  }
} catch (e) {}

function renderMenu() {
  if (!menuGrid) return;
  const q = searchQuery.trim().toLowerCase();

  const filtered = menuData.filter(item => {
    // Category Match
    const catMatch = (activeCat === 'all') || item.cat.split(',').some(c => c.trim() === activeCat);

    // Dietary Match
    let dietMatch = true;
    if (activeDietary === 'veg') dietMatch = item.type === 'veg';
    if (activeDietary === 'nonveg') dietMatch = item.type === 'nonveg';

    // Search query match
    let searchMatch = true;
    if (q) {
      searchMatch = item.name.toLowerCase().includes(q) ||
                    item.desc.toLowerCase().includes(q) ||
                    (item.badge && item.badge.toLowerCase().includes(q));
    }

    return catMatch && dietMatch && searchMatch;
  });

  if (menuCountBadge) {
    menuCountBadge.textContent = `${filtered.length} Delicacies Found`;
  }

  if (filtered.length === 0) {
    menuGrid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
    if (menuCollapseContainer) menuCollapseContainer.classList.add('hidden');
    return;
  }

  if (noResults) noResults.classList.add('hidden');

  // Determine items to render based on collapsible state (if collapse container exists on the page)
  let itemsToRender = filtered;
  if (menuCollapseContainer && !isMenuExpanded && filtered.length > COLLAPSED_LIMIT) {
    itemsToRender = filtered.slice(0, COLLAPSED_LIMIT);
    menuCollapseContainer.classList.remove('hidden');
    if (menuCollapseText) menuCollapseText.textContent = `Explore All ${filtered.length} Dishes (${filtered.length - COLLAPSED_LIMIT} More)`;
    if (menuCollapseIcon) menuCollapseIcon.style.transform = 'rotate(0deg)';
  } else if (menuCollapseContainer && filtered.length > COLLAPSED_LIMIT) {
    itemsToRender = filtered;
    menuCollapseContainer.classList.remove('hidden');
    if (menuCollapseText) menuCollapseText.textContent = 'Collapse Menu (Show Less)';
    if (menuCollapseIcon) menuCollapseIcon.style.transform = 'rotate(180deg)';
  } else {
    itemsToRender = filtered;
    if (menuCollapseContainer) menuCollapseContainer.classList.add('hidden');
  }

  // Smaller, Less Detailed Modern Menu Cards (Compact Grid / Mobile-First)
  menuGrid.innerHTML = itemsToRender.map(item => `
    <div class="menu-grid-card group spotlight-card overflow-hidden rounded-xl bg-surface/90 border border-gold-400/20 hover:border-gold-400/50 p-2.5 sm:p-3 transition-all duration-300 flex flex-col justify-between cursor-pointer dish-shadow-hover" onclick="openDishModal(${item.id})" role="button" tabindex="0" aria-label="${item.name}">
      
      <!-- Compact Image Container -->
      <div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/60 mb-2">
        <img 
          src="${item.img}" 
          alt="${item.name}" 
          loading="lazy" 
          class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-100 contrast-105" 
          onerror="this.src='https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent"></div>
        
        <!-- Veg / Non-Veg Indicator Dot -->
        <div class="absolute top-1.5 left-1.5 z-10">
          <span class="inline-flex items-center px-1.5 py-0.5 rounded-md bg-black/85 backdrop-blur-sm border ${item.type === 'veg' ? 'border-emerald-500/50 text-emerald-400' : 'border-red-500/50 text-red-400'} text-[9px] font-bold">
            <span class="w-1.5 h-1.5 rounded-full ${item.type === 'veg' ? 'bg-emerald-500' : 'bg-red-500'} mr-1"></span>
            ${item.type === 'veg' ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        <!-- Price Badge -->
        <div class="absolute bottom-1.5 right-1.5 z-10">
          <span class="px-2 py-0.5 rounded-md bg-black/90 backdrop-blur-sm border border-gold-400/50 text-gold-400 font-mono font-bold text-xs shadow-md">
            ₹${item.price}
          </span>
        </div>
      </div>

      <!-- Compact, Clean Details (Uncluttered & High Readability) -->
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-serif text-xs sm:text-sm text-white font-bold group-hover:text-gold-300 transition-colors line-clamp-1 mb-0.5">
            ${item.name}
          </h4>
          <div class="text-[10px] text-[#aba698] line-clamp-1 font-normal">
            ${item.badge || item.cat.split(',')[0]} &middot; ${item.spice}
          </div>
        </div>

        <div class="mt-2 pt-1.5 border-t border-gold-400/15 flex items-center justify-between text-[10px]">
          <span class="text-gold-400 font-bold group-hover:underline flex items-center gap-0.5">
            Details &rarr;
          </span>
          <span class="text-[#8e8a80] text-[9px]">
            Tap for spices
          </span>
        </div>
      </div>

    </div>
  `).join('');

  // Re-bind mousemove for the 21st.dev spotlight card lighting
  initSpotlightCards();
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ── 3. 21st.dev Interactive Spotlight Mouse Physics ── */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Initial Render
renderMenu();

/* ── 4. Filter Tab Event Handlers ── */
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.getAttribute('data-cat') || 'all';
    renderMenu();
  });
});

dietaryRadios.forEach(radio => {
  radio.addEventListener('change', e => {
    activeDietary = e.target.value;
    renderMenu();
  });
});

if (searchInput) {
  let searchTimer;
  searchInput.addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchQuery = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.classList.toggle('hidden', !searchQuery);
    }
    searchTimer = setTimeout(renderMenu, 150);
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderMenu();
  });
}

// Collapsible Menu Toggle Event Listener
if (menuCollapseBtn) {
  menuCollapseBtn.addEventListener('click', () => {
    isMenuExpanded = !isMenuExpanded;
    renderMenu();
    if (!isMenuExpanded) {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/* ── 5. Chef's Spotlight / Dish Modal Drawer ── */
const dishModal = document.getElementById('dish-modal');
const modalDishName = document.getElementById('modal-dish-name');
const modalDishPrice = document.getElementById('modal-dish-price');
const modalDishDesc = document.getElementById('modal-dish-desc');
const modalDishPairing = document.getElementById('modal-dish-pairing');
const modalDishBadge = document.getElementById('modal-dish-badge');
const modalDishSpice = document.getElementById('modal-dish-spice');
const modalDishType = document.getElementById('modal-dish-type');

window.openDishModal = function(id) {
  const dish = menuData.find(d => d.id === id);
  if (!dish || !dishModal) return;

  modalDishName.textContent = dish.name;
  modalDishPrice.textContent = `₹${dish.price}`;
  modalDishDesc.textContent = dish.desc;
  modalDishPairing.textContent = dish.pairing || 'Pairs delightfully with fresh clay oven breads and basmati rice.';
  modalDishBadge.textContent = dish.badge || 'Chef Specialty';
  modalDishSpice.textContent = dish.spice || 'Medium';

  modalDishType.className = dish.type === 'veg' ? 'menu-badge-veg' : 'menu-badge-nonveg';
  modalDishType.innerHTML = `
    <span class="w-1.5 h-1.5 rounded-full ${dish.type === 'veg' ? 'bg-emerald-600' : 'bg-red-600'}"></span>
    ${dish.type === 'veg' ? 'Pure Veg' : 'Non-Veg'}
  `;

  dishModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.gsap) {
    gsap.fromTo('#dish-modal-content', 
      { opacity: 0, y: 30, scale: 0.96 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
    );
  }
};

window.closeDishModal = function() {
  if (!dishModal) return;
  if (window.gsap) {
    gsap.to('#dish-modal-content', {
      opacity: 0, y: 20, scale: 0.96, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        dishModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  } else {
    dishModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

/* ── 6. Banquet Interactive Estimator & Calculator ── */
const guestSlider = document.getElementById('banquet-guest-slider');
const guestDisplay = document.getElementById('banquet-guest-display');
const hallRecommend = document.getElementById('banquet-hall-recommend');
const packageEstimate = document.getElementById('banquet-package-estimate');
const hiddenGuestInput = document.getElementById('b-guests');

function updateBanquetEstimator() {
  if (!guestSlider) return;
  const count = parseInt(guestSlider.value, 10);
  if (guestDisplay) guestDisplay.textContent = `${count} Guests`;
  if (hiddenGuestInput) hiddenGuestInput.value = count;

  let hall = 'The Amber Intimate Chamber (Up to 60)';
  let tier = 'Silver Executive Thali & Starters';

  if (count > 60 && count <= 180) {
    hall = 'The Grand Lotus Ballroom (60 – 200 Guests)';
    tier = 'Gold Multi-Cuisine Royal Buffet';
  } else if (count > 180) {
    hall = 'Complete Banquet Suite & Dual Halls (200 – 500+ Guests)';
    tier = 'Imperial Bespoke Celebration Feast';
  }

  if (hallRecommend) hallRecommend.textContent = hall;
  if (packageEstimate) packageEstimate.textContent = tier;
}

if (guestSlider) {
  guestSlider.addEventListener('input', updateBanquetEstimator);
  updateBanquetEstimator();
}

/* ── 7. Banquet Form Submission & Direct WhatsApp Fallback ── */
const banquetForm = document.getElementById('banquet-form');
const formSuccess = document.getElementById('form-success');
const whatsappShareBtn = document.getElementById('whatsapp-share-btn');

if (banquetForm) {
  banquetForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('b-name').value.trim();
    const phone = document.getElementById('b-phone').value.trim();
    const eventType = document.getElementById('b-event').value;
    const guests = guestSlider ? guestSlider.value : '50';
    const date = document.getElementById('b-date').value || 'Flexible Date';
    const notes = document.getElementById('b-notes').value.trim();

    let hasError = false;

    if (!name) {
      document.getElementById('b-name-err').textContent = 'Please provide your full name.';
      document.getElementById('b-name-err').classList.remove('hidden');
      hasError = true;
    } else {
      document.getElementById('b-name-err').classList.add('hidden');
    }

    if (!phone || !/^[+]?[\d\s-]{8,16}$/.test(phone)) {
      document.getElementById('b-phone-err').textContent = 'Please enter a valid phone number.';
      document.getElementById('b-phone-err').classList.remove('hidden');
      hasError = true;
    } else {
      document.getElementById('b-phone-err').classList.add('hidden');
    }

    if (!eventType) {
      document.getElementById('b-event-err').textContent = 'Please choose your celebration type.';
      document.getElementById('b-event-err').classList.remove('hidden');
      hasError = true;
    } else {
      document.getElementById('b-event-err').classList.add('hidden');
    }

    if (hasError) return;

    // Build pre-filled WhatsApp message
    const msg = encodeURIComponent(
      `Hello Sudhamrit Banquet Team,\n\nI would like to enquire about booking your banquet facilities:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Event Type: ${eventType}\n` +
      `• Estimated Guests: ${guests}\n` +
      `• Preferred Date: ${date}\n` +
      (notes ? `• Special Notes: ${notes}\n` : '') +
      `\nPlease let me know your package details and availability.`
    );

    const waLink = `https://wa.me/919851817979?text=${msg}`;
    if (whatsappShareBtn) {
      whatsappShareBtn.href = waLink;
    }

    // Show luxury success modal card
    if (formSuccess) formSuccess.classList.remove('hidden');
    banquetForm.classList.add('hidden');

    if (window.gsap) {
      gsap.fromTo('#form-success', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
  });
}

/* ── 8. Lightbox Gallery (Dining Areas, Tables & Aesthetic Views) ── */
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90', caption: 'Royal Dining Sanctuary — Intimate & Ambient Dining Tables' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=90', caption: 'Chandelier Table Ambiance — Fine Dining Comfort & Hospitality' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90', caption: 'Grand Celebration Tables — Festive Banquet Setting for Gatherings' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=90', caption: 'Royal Table Setup — Formal Dining Suite with Fine Glassware' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90', caption: 'Candlelit Evening Dinner — Romantic & Peaceful Table Setting' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=90', caption: 'Spacious AC Event Seating — Large Family & Banquet Hall Setup' },
  { src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1600&q=90', caption: 'Modern Comfort Booths — Cozy Family Dining Nooks' },
  { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1600&q=90', caption: 'Golden Chandelier Hall — Grand Heritage Architecture' }
];

let currentLbIndex = 0;
const lbEl = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCaption = document.getElementById('lightbox-caption');

window.openLightbox = function(index) {
  currentLbIndex = index;
  if (!lbEl || !lbImg) return;
  lbImg.src = galleryImages[index].src;
  if (lbCaption) lbCaption.textContent = galleryImages[index].caption;
  lbEl.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.gsap) {
    gsap.fromTo('#lightbox-container', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3 });
  }
};

window.closeLightbox = function() {
  if (!lbEl) return;
  lbEl.classList.add('hidden');
  document.body.style.overflow = '';
};

window.prevLightbox = function() {
  currentLbIndex = (currentLbIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
};

window.nextLightbox = function() {
  currentLbIndex = (currentLbIndex + 1) % galleryImages.length;
  updateLightbox();
};

function updateLightbox() {
  if (!lbImg) return;
  if (window.gsap) {
    gsap.to(lbImg, {
      opacity: 0, duration: 0.15, onComplete: () => {
        lbImg.src = galleryImages[currentLbIndex].src;
        if (lbCaption) lbCaption.textContent = galleryImages[currentLbIndex].caption;
        gsap.to(lbImg, { opacity: 1, duration: 0.25 });
      }
    });
  } else {
    lbImg.src = galleryImages[currentLbIndex].src;
    if (lbCaption) lbCaption.textContent = galleryImages[currentLbIndex].caption;
  }
}

document.addEventListener('keydown', e => {
  if (dishModal && !dishModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeDishModal();
  }
  if (lbEl && !lbEl.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  }
});

/* ── 9. Mobile Navigation Drawer ── */
const menuToggle = document.getElementById('menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuToggle && mobileDrawer) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.contains('active');
    if (isOpen) {
      mobileDrawer.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      mobileDrawer.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── 10. Dynamic Active Navbar Item on Scroll (Scrollspy) ── */
const navLinks = document.querySelectorAll('#site-header .nav-link');
const trackedSections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 120;

  trackedSections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });
updateActiveNavLink();

/* ── 11. GSAP ScrollTrigger & Scroll Progress Bar ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  if (scrollProgressBar) {
    scrollProgressBar.style.width = `${progress}%`;
  }

  if (siteHeader) {
    siteHeader.classList.toggle('scrolled', scrollY > 40);
  }
}, { passive: true });

// GSAP & Lucide Animations Initialization
window.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Staggered Reveal
    gsap.from('.gsap-hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.gsap-hero-title', {
      opacity: 0,
      y: 35,
      duration: 1.1,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.gsap-hero-desc', {
      opacity: 0,
      y: 20,
      duration: 1.0,
      delay: 0.4,
      ease: 'power3.out'
    });

    gsap.from('.gsap-hero-cta', {
      opacity: 0,
      y: 20,
      duration: 1.0,
      delay: 0.6,
      ease: 'power3.out'
    });

    // Animated Counter for Key Stats
    document.querySelectorAll('.stat-counter').forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0');
      const isDecimal = counter.getAttribute('data-decimal') === 'true';

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(counter, 
            { innerText: 0 }, 
            { 
              innerText: target, 
              duration: 2, 
              ease: 'power2.out',
              snap: { innerText: isDecimal ? 0.1 : 1 },
              onUpdate: function() {
                counter.innerText = isDecimal 
                  ? parseFloat(counter.innerText).toFixed(1) 
                  : Math.round(counter.innerText).toLocaleString();
              }
            }
          );
        }
      });
    });

    // Fade-in Stagger for Sections
    const fadeSections = document.querySelectorAll('.gsap-section');
    fadeSections.forEach(sec => {
      gsap.from(sec, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Slow Popped Text Animation on Scroll
    const popElements = document.querySelectorAll('.slow-pop-text');
    popElements.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          setTimeout(() => {
            el.classList.add('is-popped');
          }, (index % 3) * 120);
        }
      });
    });
  }

  // Fallback observer for slow popped text
  if ('IntersectionObserver' in window) {
    const popObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-popped');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.slow-pop-text').forEach(el => popObserver.observe(el));
  }
});

/* ── 12. Subtle Golden Ember Canvas Background Simulation ── */
(function initEmberCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Ember {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 0.7 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.fade = Math.random() * 0.003 + 0.002;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fade;
      if (this.y < -10 || this.opacity <= 0) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 208, 97, ${this.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
      ctx.fill();
    }
  }

  // Generate 45 lightweight floating particles
  for (let i = 0; i < 45; i++) {
    particles.push(new Ember());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

// Smooth Scroll Handler for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#' || !targetId) return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const headerH = 75;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
      // Close mobile drawer if open
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && drawer.classList.contains('active')) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});

// Year update
const yearSpan = document.getElementById('current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Initial Lucide Icons Render
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}