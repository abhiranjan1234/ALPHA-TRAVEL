// Abhi.tourist - Main Application Logic

// Current State
let currentDestFilter = 'all';
let currentPkgFilter = 'all';
let selectedPackageForModal = null;

// Cost Estimator State
const calcState = {
  region: 'hp', // hp, uk, both
  travelers: 2,
  days: 5,
  hotel: 'deluxe', // standard, deluxe, luxury
  vehicle: 'innova' // sedan, innova, tempo
};

// Base pricing rates for calculation (in INR)
const PRICING_RATES = {
  regionMultiplier: {
    hp: 1.0,
    uk: 0.95,
    both: 1.15
  },
  hotelPerNight: {
    standard: 2400,
    deluxe: 3800,
    luxury: 6200
  },
  vehiclePerDay: {
    sedan: 2800,
    innova: 4200,
    tempo: 6500
  },
  mealAndPermitPerPersonDay: 900
};

// ==============================================
// DOM READY INITIALIZATION
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderPackages();
  renderTestimonials();
  renderArticles();
  renderFaqs();
  populateBookingDropdown();
  updateCalculatorUI();

  // Scroll spy / Back to top visibility
  window.addEventListener('scroll', handleWindowScroll);
});

// ==============================================
// 1. RENDER DESTINATIONS CAROUSEL (Matches Reference)
// ==============================================
function renderDestinations() {
  const container = document.getElementById('destinationsCarousel');
  if (!container) return;

  const filtered = currentDestFilter === 'all' 
    ? TRAVEL_DATA.destinations 
    : TRAVEL_DATA.destinations.filter(d => d.state === currentDestFilter);

  container.innerHTML = filtered.map(dest => `
    <div class="dest-card min-w-[270px] sm:min-w-[320px] max-w-[320px] rounded-[32px] overflow-hidden bg-white border border-stone-200/80 shadow-card snap-start shrink-0 flex flex-col justify-between group cursor-pointer relative" onclick="quickFilterByDestination('${dest.name}')">
      
      <!-- Top Image Area -->
      <div class="relative h-64 overflow-hidden">
        <img 
          src="${dest.image}" 
          alt="${dest.name}" 
          class="dest-img w-full h-full object-cover transition-transform duration-700 ease-out"
          loading="lazy"
        >
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <!-- State Tag Badge -->
        <div class="absolute top-4 left-4 z-10">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-stone-900 shadow-sm border border-white">
            ${dest.state}
          </span>
        </div>

        <!-- Packages Count Pill -->
        <div class="absolute top-4 right-4 z-10">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-500 text-white shadow-sm">
            ${dest.packagesCount} Tours
          </span>
        </div>

        <!-- Destination Title on Image -->
        <div class="absolute bottom-4 left-5 right-5 text-white">
          <span class="text-[11px] text-orange-300 font-semibold block uppercase tracking-wider">${dest.badge}</span>
          <h3 class="font-heading font-extrabold text-xl text-white group-hover:text-orange-200 transition-colors">${dest.name}</h3>
        </div>
      </div>

      <!-- Card Footer Bar (Matches Reference circular orange arrow) -->
      <div class="p-5 flex items-center justify-between bg-white border-t border-stone-100">
        <div>
          <span class="text-[11px] text-stone-400 font-semibold uppercase tracking-wider block">Altitude / Best Season</span>
          <span class="text-xs font-bold text-stone-700">${dest.bestTime}</span>
        </div>

        <!-- Orange Circle Arrow Button (Exact Reference Match) -->
        <div class="w-10 h-10 rounded-full bg-brand-500 group-hover:bg-brand-600 text-white flex items-center justify-center shadow-pill group-hover:scale-110 transition-all duration-300 shrink-0">
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </div>
      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterDestinations(state) {
  currentDestFilter = state;
  
  // Update button active styles
  const btnAll = document.getElementById('destBtn-all');
  const btnHp = document.getElementById('destBtn-hp');
  const btnUk = document.getElementById('destBtn-uk');

  [btnAll, btnHp, btnUk].forEach(btn => {
    btn.className = "px-3.5 py-1.5 rounded-xl text-stone-600 hover:text-stone-900 transition-all font-semibold";
  });

  if (state === 'all') {
    btnAll.className = "px-3.5 py-1.5 rounded-xl bg-white text-stone-900 shadow-sm font-bold transition-all";
  } else if (state === 'Himachal Pradesh') {
    btnHp.className = "px-3.5 py-1.5 rounded-xl bg-white text-stone-900 shadow-sm font-bold transition-all";
  } else if (state === 'Uttarakhand') {
    btnUk.className = "px-3.5 py-1.5 rounded-xl bg-white text-stone-900 shadow-sm font-bold transition-all";
  }

  renderDestinations();
}

function scrollDestinations(direction) {
  const container = document.getElementById('destinationsCarousel');
  if (!container) return;
  const scrollAmount = direction === 'left' ? -350 : 350;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function quickFilterByDestination(destName) {
  // Jump to packages and filter
  const select = document.getElementById('heroDestSelect');
  if (select) {
    if (destName.includes('Manali')) select.value = 'Manali';
    else if (destName.includes('Spiti')) select.value = 'Spiti';
    else if (destName.includes('Kedarnath')) select.value = 'Kedarnath';
    else if (destName.includes('Rishikesh')) select.value = 'Rishikesh';
    else if (destName.includes('Shimla')) select.value = 'Shimla';
    else if (destName.includes('Dharamshala')) select.value = 'Dharamshala';
    else if (destName.includes('Nainital')) select.value = 'Nainital';
    else if (destName.includes('Auli')) select.value = 'Auli';
    else if (destName.includes('Kasol')) select.value = 'Kasol';
    handleHeroSearchFilter();
  }
  document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
}

// ==============================================
// 2. RENDER TOUR PACKAGES (Matches Reference)
// ==============================================
function renderPackages(packagesToRender = null) {
  const container = document.getElementById('packagesGrid');
  if (!container) return;

  let pkgs = packagesToRender || TRAVEL_DATA.packages;

  if (currentPkgFilter === 'himachal') {
    pkgs = pkgs.filter(p => p.state === 'Himachal Pradesh');
  } else if (currentPkgFilter === 'uttarakhand') {
    pkgs = pkgs.filter(p => p.state === 'Uttarakhand');
  } else if (['adventure', 'honeymoon', 'family', 'spiritual'].includes(currentPkgFilter)) {
    pkgs = pkgs.filter(p => p.category === currentPkgFilter);
  }

  if (pkgs.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-stone-300 p-8">
        <i data-lucide="compass" class="w-12 h-12 text-stone-300 mx-auto mb-3"></i>
        <h3 class="font-heading font-bold text-lg text-stone-800">No exact packages matched your filter</h3>
        <p class="text-xs text-stone-500 max-w-md mx-auto mt-1 mb-4">We customize any Himalayan route for you! Reach out for a free customized itinerary.</p>
        <button onclick="resetPackageFilters()" class="px-5 py-2.5 rounded-full bg-brand-500 text-white font-bold text-xs shadow-pill">
          Reset All Filters
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = pkgs.map(pkg => `
    <div class="pkg-card bg-white rounded-[32px] overflow-hidden border border-stone-200/80 shadow-card flex flex-col justify-between group">
      
      <!-- Top Image with Badges -->
      <div class="relative h-56 overflow-hidden">
        <img 
          src="${pkg.image}" 
          alt="${pkg.title}" 
          class="pkg-img w-full h-full object-cover transition-transform duration-700 ease-out"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

        <!-- Duration Tag (Matches Reference e.g. "5 Days", "7 Days") -->
        <div class="absolute top-4 left-4 z-10">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-stone-900 shadow-sm border border-white flex items-center space-x-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-brand-500"></i>
            <span>${pkg.duration}</span>
          </span>
        </div>

        <!-- Discount / Feature Tag -->
        <div class="absolute top-4 right-4 z-10">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-500 text-white shadow-sm">
            ${pkg.discount || pkg.badge}
          </span>
        </div>

        <!-- Destination Sub-badge at bottom of image -->
        <div class="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center space-x-1.5">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-orange-400"></i>
          <span>${pkg.destination} • ${pkg.state}</span>
        </div>
      </div>

      <!-- Card Content Area -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        
        <div>
          <!-- Star Rating & Review Count (Exact Reference Style: ★ 4.8 Overall Reviews (30 Reviews)) -->
          <div class="flex items-center space-x-2 mb-2 text-xs">
            <div class="flex items-center text-amber-500 font-bold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1"></i>
              <span>${pkg.rating}</span>
            </div>
            <span class="text-stone-400 font-medium">Overall Reviews (${pkg.reviewsCount} Reviews)</span>
          </div>

          <!-- Tour Title (Exact Reference Style) -->
          <h3 class="font-heading font-extrabold text-lg text-stone-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
            ${pkg.title}
          </h3>

          <p class="text-xs text-stone-500 line-clamp-2 mb-4 leading-relaxed">
            ${pkg.overview}
          </p>
        </div>

        <!-- Card Bottom: Pricing & Orange "Book Now" Pill Button (Exact Reference Match) -->
        <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <div class="text-[11px] text-stone-400 line-through">₹${pkg.originalPrice.toLocaleString('en-IN')}</div>
            <div class="flex items-baseline space-x-1">
              <span class="font-heading font-extrabold text-xl text-stone-900">₹${pkg.price.toLocaleString('en-IN')}</span>
              <span class="text-xs text-stone-500 font-medium">/ Person</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <!-- View Details Button -->
            <button onclick="openPackageDetails('${pkg.id}')" class="px-3 py-2 rounded-full text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors">
              Details
            </button>

            <!-- Book Now Orange Pill Button (Exact Reference Style) -->
            <button onclick="openBookingModal('${pkg.title}')" class="px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-pill hover:shadow-orange-500/40 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
              Book Now
            </button>
          </div>
        </div>

      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function filterPackages(category, element) {
  currentPkgFilter = category;

  // Update tabs active state
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-brand-500', 'text-white');
    btn.classList.add('bg-white', 'text-stone-600');
  });

  if (element) {
    element.classList.add('active', 'bg-brand-500', 'text-white');
    element.classList.remove('bg-white', 'text-stone-600');
  }

  renderPackages();
}

function resetPackageFilters() {
  currentPkgFilter = 'all';
  const selectDest = document.getElementById('heroDestSelect');
  const selectState = document.getElementById('heroStateSelect');
  const selectCat = document.getElementById('heroCategorySelect');
  if (selectDest) selectDest.value = 'all';
  if (selectState) selectState.value = 'all';
  if (selectCat) selectCat.value = 'all';

  document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
    if (idx === 0) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderPackages();
  updateSearchResultBadge(TRAVEL_DATA.packages.length);
}

// ==============================================
// 3. HERO SEARCH & REAL-TIME FILTERING
// ==============================================
function handleHeroSearchFilter() {
  const destVal = document.getElementById('heroDestSelect')?.value || 'all';
  const stateVal = document.getElementById('heroStateSelect')?.value || 'all';
  const catVal = document.getElementById('heroCategorySelect')?.value || 'all';

  let filtered = TRAVEL_DATA.packages;

  if (destVal !== 'all') {
    filtered = filtered.filter(p => p.destination.toLowerCase().includes(destVal.toLowerCase()) || p.title.toLowerCase().includes(destVal.toLowerCase()));
  }

  if (stateVal !== 'all') {
    filtered = filtered.filter(p => p.state === stateVal);
  }

  if (catVal !== 'all') {
    filtered = filtered.filter(p => p.category === catVal);
  }

  updateSearchResultBadge(filtered.length);
  renderPackages(filtered);
}

function triggerSearchScroll() {
  handleHeroSearchFilter();
  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
}

function updateSearchResultBadge(count) {
  const badge = document.getElementById('searchResultCountBadge');
  if (badge) {
    badge.textContent = `${count} ${count === 1 ? 'Package' : 'Packages'} Available`;
  }
}

// ==============================================
// 4. INTERACTIVE TRIP COST CALCULATOR
// ==============================================
function setCalcOption(type, value, element) {
  calcState[type] = value;

  // Update button active styling
  document.querySelectorAll(`.calc-btn-${type}`).forEach(btn => {
    btn.classList.remove('active', 'bg-brand-500', 'text-white', 'border-brand-400');
    btn.classList.add('bg-stone-700', 'text-stone-200', 'border-stone-600');
  });

  if (element) {
    element.classList.add('active', 'bg-brand-500', 'text-white', 'border-brand-400');
    element.classList.remove('bg-stone-700', 'text-stone-200', 'border-stone-600');
  }

  updateCalculatorUI();
}

function adjustCalcNumber(field, delta) {
  if (field === 'travelers') {
    calcState.travelers = Math.max(1, Math.min(16, calcState.travelers + delta));
    document.getElementById('calcTravelersDisplay').textContent = `${calcState.travelers} ${calcState.travelers === 1 ? 'Person' : 'Persons'}`;
  } else if (field === 'days') {
    calcState.days = Math.max(3, Math.min(14, calcState.days + delta));
    document.getElementById('calcDaysDisplay').textContent = `${calcState.days} Days`;
  }
  updateCalculatorUI();
}

function updateCalculatorUI() {
  const travelers = calcState.travelers;
  const days = calcState.days;
  const nights = Math.max(1, days - 1);
  const roomsNeeded = Math.ceil(travelers / 2);

  // Region multiplier
  const regMult = PRICING_RATES.regionMultiplier[calcState.region] || 1.0;
  
  // Hotel total
  const hotelNightRate = PRICING_RATES.hotelPerNight[calcState.hotel] || 3800;
  const totalHotelCost = roomsNeeded * hotelNightRate * nights;

  // Vehicle total
  const vehicleDayRate = PRICING_RATES.vehiclePerDay[calcState.vehicle] || 4200;
  const totalVehicleCost = vehicleDayRate * days;

  // Meals & driver allowances & toll permits per person
  const totalFoodAndTolls = PRICING_RATES.mealAndPermitPerPersonDay * travelers * days;

  // Total Group Price
  const grossTotal = (totalHotelCost + totalVehicleCost + totalFoodAndTolls) * regMult;
  const perPersonPrice = Math.round(grossTotal / travelers);
  const totalGroupPrice = Math.round(grossTotal);

  // Update DOM displays
  const perPersonEl = document.getElementById('calcPerPersonPrice');
  const totalEl = document.getElementById('calcTotalPrice');
  if (perPersonEl) perPersonEl.textContent = `₹${perPersonPrice.toLocaleString('en-IN')}`;
  if (totalEl) totalEl.textContent = `₹${totalGroupPrice.toLocaleString('en-IN')}`;

  // Update Summary labels
  const regionNames = {
    hp: 'Himachal Pradesh Circuit (Manali/Spiti/Shimla)',
    uk: 'Uttarakhand Circuit (Rishikesh/Kedarnath/Nainital)',
    both: 'Grand Himalayan Combined Circuit'
  };
  const hotelNames = {
    standard: 'Standard 3★ Mountain Hotels (MAP Meals)',
    deluxe: 'Deluxe 4★ Scenic Mountain View (MAP Meals)',
    luxury: 'Luxury Wooden Chalet & Boutique Homestays'
  };
  const vehicleNames = {
    sedan: 'Private Dzire / Etios Sedan (AC / Heater)',
    innova: 'Innova Crysta SUV (Experienced Hill Driver)',
    tempo: 'Tempo Traveller / 4x4 Mountain Fleet'
  };

  const routeEl = document.getElementById('calcSummaryRoute');
  const durEl = document.getElementById('calcSummaryDuration');
  const hotEl = document.getElementById('calcSummaryHotel');
  const vehEl = document.getElementById('calcSummaryVehicle');

  if (routeEl) routeEl.textContent = regionNames[calcState.region];
  if (durEl) durEl.textContent = `${days} Days / ${nights} Nights • ${travelers} ${travelers === 1 ? 'Traveler' : 'Travelers'}`;
  if (hotEl) hotEl.textContent = hotelNames[calcState.hotel];
  if (vehEl) vehEl.textContent = vehicleNames[calcState.vehicle];
}

function sendCalculatorToWhatsApp() {
  const travelers = calcState.travelers;
  const days = calcState.days;
  const perPerson = document.getElementById('calcPerPersonPrice')?.textContent || '₹12,499';
  const total = document.getElementById('calcTotalPrice')?.textContent || '₹24,998';
  const route = document.getElementById('calcSummaryRoute')?.textContent || 'Himachal Pradesh';
  const hotel = document.getElementById('calcSummaryHotel')?.textContent || 'Deluxe 4★';
  const vehicle = document.getElementById('calcSummaryVehicle')?.textContent || 'Innova Crysta';

  const message = `🏔️ *Hi Abhi.tourist!* I calculated a custom trip quote on your website:%0A%0A` +
    `📍 *Route:* ${encodeURIComponent(route)}%0A` +
    `⏱️ *Duration:* ${days} Days%0A` +
    `👥 *Travelers:* ${travelers} Persons%0A` +
    `🏨 *Stay:* ${encodeURIComponent(hotel)}%0A` +
    `🚗 *Vehicle:* ${encodeURIComponent(vehicle)}%0A` +
    `💰 *Estimated Rate:* ${encodeURIComponent(perPerson)} / person (Total: ${encodeURIComponent(total)})%0A%0A` +
    `Please share the detailed day-by-day PDF itinerary and best offer!`;

  window.open(`https://wa.me/919816084321?text=${message}`, '_blank');
}

// ==============================================
// 5. RENDER TESTIMONIALS (Matches Reference: "What Says Our Visitors")
// ==============================================
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TRAVEL_DATA.testimonials.map(item => `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
      
      <!-- Top Row: Avatar, Name, Stars, Quote Icon (Exact Reference Match) -->
      <div>
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3.5">
            <img 
              src="${item.avatar}" 
              alt="${item.name}" 
              class="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-sm"
              loading="lazy"
            >
            <div>
              <h4 class="font-heading font-bold text-base text-stone-900">${item.name}</h4>
              <p class="text-xs text-stone-500">${item.role}</p>
            </div>
          </div>

          <!-- 5 Stars (Exact Reference Style: 5 Gold Stars) -->
          <div class="flex items-center space-x-1 text-amber-500">
            ${Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-500 text-amber-500"></i>').join('')}
          </div>
        </div>

        <!-- Quote Text with subtle quotation marks (Exact Reference Style) -->
        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed italic relative pl-3 border-l-2 border-brand-200">
          "${item.review}"
        </p>
      </div>

      <!-- Tour Badge -->
      <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
        <span class="text-stone-400 font-medium">Verified Trip:</span>
        <span class="font-bold text-brand-600">${item.tour}</span>
      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// ==============================================
// 6. RENDER ARTICLES & TRAVEL GUIDES
// ==============================================
function renderArticles() {
  const container = document.getElementById('articlesGrid');
  if (!container) return;

  container.innerHTML = TRAVEL_DATA.articles.map(art => `
    <article class="bg-warmcard rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <div class="relative h-48 overflow-hidden">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-stone-900 shadow-sm">
              ${art.category}
            </span>
          </div>
        </div>

        <div class="p-6">
          <div class="flex items-center space-x-2 text-xs text-stone-400 mb-2">
            <span>${art.date}</span>
            <span>•</span>
            <span>${art.readTime}</span>
          </div>
          <h3 class="font-heading font-bold text-base text-stone-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
            ${art.title}
          </h3>
          <p class="text-xs text-stone-500 leading-relaxed line-clamp-3">
            ${art.excerpt}
          </p>
        </div>
      </div>

      <div class="p-6 pt-0">
        <a href="https://wa.me/919816084321?text=Hi,%20I%20read%20your%20article%20'${encodeURIComponent(art.title)}'%20and%20want%20to%20know%20more!" target="_blank" class="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-500 hover:text-brand-600">
          <span>Read Full Mountain Guide</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </article>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// ==============================================
// 7. RENDER FAQ ACCORDION
// ==============================================
function renderFaqs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = TRAVEL_DATA.faqs.map((faq, index) => `
    <div class="faq-item bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm transition-all duration-300 ${index === 0 ? 'open' : ''}">
      <button onclick="toggleFaq(this)" class="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-sm sm:text-base text-stone-900 hover:text-brand-600 transition-colors">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" class="faq-icon w-5 h-5 text-stone-400 shrink-0 ml-4 transition-transform duration-300"></i>
      </button>
      <div class="faq-content px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
        ${faq.a}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Close other open faqs
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));

  if (!isOpen) {
    item.classList.add('open');
  }
}

// ==============================================
// 8. INTERACTIVE RATING FEEDBACK (Hero Floating Widget)
// ==============================================
function handleRatingFeedback(sentiment) {
  const status = document.getElementById('ratingStatusText');
  const emojiBtns = document.querySelectorAll('.rating-emoji');
  
  emojiBtns.forEach(btn => btn.classList.remove('selected'));

  const feedbackMessages = {
    angry: "We're here to help! Let us know how to improve.",
    sad: "Thanks for feedback! We are constantly bettering.",
    neutral: "Thanks! We strive to make it 5-star for you.",
    happy: "Awesome! We're glad you love Himalayan journeys!",
    ecstatic: "Woohoo! Making the Himalayas your playground! 🏔️"
  };

  if (status) {
    status.textContent = "Thank you! ❤️";
  }

  showToast(feedbackMessages[sentiment] || "Thank you for rating our website!");
}

// ==============================================
// 9. TOUR DETAILS MODAL
// ==============================================
function openPackageDetails(packageId) {
  const pkg = TRAVEL_DATA.packages.find(p => p.id === packageId);
  if (!pkg) return;
  selectedPackageForModal = pkg;

  // Fill modal fields
  document.getElementById('modalPkgImage').src = pkg.image;
  document.getElementById('modalPkgBadge').textContent = pkg.badge || pkg.category.toUpperCase();
  document.getElementById('modalPkgDuration').textContent = pkg.duration;
  document.getElementById('modalPkgTitle').textContent = pkg.title;
  document.getElementById('modalPkgRoute').textContent = `${pkg.destination} • ${pkg.state}`;
  document.getElementById('modalPkgPrice').textContent = `₹${pkg.price.toLocaleString('en-IN')}`;
  document.getElementById('modalFooterPrice').textContent = `₹${pkg.price.toLocaleString('en-IN')} / Person`;
  document.getElementById('modalPkgPickup').textContent = `${pkg.pickup} → ${pkg.drop}`;
  document.getElementById('modalPkgRating').innerHTML = `
    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500 text-amber-500"></i>
    <span>${pkg.rating} (${pkg.reviewsCount} reviews)</span>
  `;
  document.getElementById('modalPkgOverview').textContent = pkg.overview;

  // Highlights
  const hlContainer = document.getElementById('modalPkgHighlights');
  hlContainer.innerHTML = pkg.highlights.map(h => `
    <li class="flex items-start space-x-2">
      <i data-lucide="check" class="w-4 h-4 text-brand-500 shrink-0 mt-0.5"></i>
      <span>${h}</span>
    </li>
  `).join('');

  // Itinerary
  const itinContainer = document.getElementById('modalPkgItinerary');
  itinContainer.innerHTML = pkg.itinerary.map(item => `
    <div class="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
      <div class="flex items-center space-x-2 mb-1">
        <span class="px-2 py-0.5 rounded-md bg-brand-500 text-white font-bold text-[10px]">${item.day}</span>
        <h5 class="font-heading font-bold text-xs sm:text-sm text-stone-900">${item.title}</h5>
      </div>
      <p class="text-xs text-stone-500 pl-8 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

  // Inclusions
  const incContainer = document.getElementById('modalPkgInclusions');
  incContainer.innerHTML = pkg.inclusions.map(inc => `
    <li class="flex items-center space-x-1.5">
      <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
      <span>${inc}</span>
    </li>
  `).join('');

  // Exclusions
  const excContainer = document.getElementById('modalPkgExclusions');
  excContainer.innerHTML = pkg.exclusions.map(exc => `
    <li class="flex items-center space-x-1.5">
      <i data-lucide="x" class="w-3.5 h-3.5 text-rose-500 shrink-0"></i>
      <span>${exc}</span>
    </li>
  `).join('');

  // Show Modal
  const modal = document.getElementById('packageModal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.lucide) lucide.createIcons();
}

function closePackageModal() {
  const modal = document.getElementById('packageModal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function bookCurrentModalPackage() {
  if (!selectedPackageForModal) return;
  const title = selectedPackageForModal.title;
  closePackageModal();
  openBookingModal(title);
}

// ==============================================
// 10. BOOKING MODAL & DROPDOWN POPULATION
// ==============================================
function populateBookingDropdown() {
  const select = document.getElementById('bookingPackageSelect');
  if (!select) return;

  select.innerHTML = `
    <option value="Custom Tailored Package">✨ Custom Tailored Himalayan Itinerary</option>
  ` + TRAVEL_DATA.packages.map(p => `
    <option value="${p.title}">${p.title} (${p.duration} - ₹${p.price.toLocaleString('en-IN')})</option>
  `).join('');
}

function openBookingModal(packageTitle = null) {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  const select = document.getElementById('bookingPackageSelect');
  if (select && packageTitle) {
    const matchingOption = Array.from(select.options).find(opt => opt.value === packageTitle || opt.text.includes(packageTitle));
    if (matchingOption) {
      select.value = matchingOption.value;
    } else {
      select.value = "Custom Tailored Package";
    }
  }

  // Pre-fill date to tomorrow
  const dateInput = document.getElementById('bookingDate');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('bookingName').value;
  const phone = document.getElementById('bookingPhone').value;
  const pkg = document.getElementById('bookingPackageSelect').value;

  closeBookingModal();
  showToast(`Thank you, ${name}! We have received your booking inquiry for "${pkg}". Our local team will contact you at ${phone} within 15 minutes!`);
}

function sendBookingToWhatsApp() {
  const name = document.getElementById('bookingName')?.value || 'Guest';
  const phone = document.getElementById('bookingPhone')?.value || '';
  const pkg = document.getElementById('bookingPackageSelect')?.value || 'Custom Package';
  const date = document.getElementById('bookingDate')?.value || 'Upcoming';
  const adults = document.getElementById('bookingAdults')?.value || '2';
  const kids = document.getElementById('bookingKids')?.value || '0';
  const pickup = document.getElementById('bookingPickupCity')?.value || 'Chandigarh';
  const cab = document.getElementById('bookingCab')?.value || 'Innova Crysta';
  const notes = document.getElementById('bookingNotes')?.value || 'None';

  const message = `🏔️ *New Tour Booking Request - Abhi.tourist*%0A%0A` +
    `👤 *Name:* ${encodeURIComponent(name)}%0A` +
    `📞 *WhatsApp:* ${encodeURIComponent(phone)}%0A` +
    `📦 *Package:* ${encodeURIComponent(pkg)}%0A` +
    `📅 *Expected Date:* ${encodeURIComponent(date)}%0A` +
    `👥 *Travelers:* ${adults} Adults, ${kids} Kids%0A` +
    `📍 *Pickup Hub:* ${encodeURIComponent(pickup)}%0A` +
    `🚗 *Cab Choice:* ${encodeURIComponent(cab)}%0A` +
    `📝 *Special Notes:* ${encodeURIComponent(notes)}%0A%0A` +
    `Please confirm availability & send best quote!`;

  window.open(`https://wa.me/919816084321?text=${message}`, '_blank');
}

// ==============================================
// 11. VIDEO MODAL (Scenic Mountain Reel)
// ==============================================
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (!modal || !iframe) return;

  // Scenic 4K Himalayan reel embed
  iframe.src = "https://www.youtube-nocookie.com/embed/n7w-vCqYJ2I?autoplay=1&mute=0&controls=1&rel=0";
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (!modal || !iframe) return;

  iframe.src = "";
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ==============================================
// 12. MOBILE NAVIGATION DRAWER
// ==============================================
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const icon = document.getElementById('menuIcon');
  if (!drawer) return;

  drawer.classList.toggle('hidden');
}

// ==============================================
// 13. TOAST & SCROLL UTILITIES
// ==============================================
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function handleWindowScroll() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTopBtn');

  if (window.scrollY > 300) {
    if (backToTop) backToTop.classList.remove('opacity-0', 'pointer-events-none');
    if (header) header.classList.add('shadow-md');
  } else {
    if (backToTop) backToTop.classList.add('opacity-0', 'pointer-events-none');
    if (header) header.classList.remove('shadow-md');
  }
}
