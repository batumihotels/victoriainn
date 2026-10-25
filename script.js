const CONFIG = {
  propertyName: "Hotel Victoria Inn",
  bookingUrl: "https://www.booking.com/hotel/ge/victoria-inn-tbilisi.html?aid=356938&label=metagha-link-MRGE-hotel-5667963_dev-desktop_los-1_bw-1_dow-Monday_defdate-0_room-0_gstadt-2_rateid-dg_aud-0_gacid-21404706195_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20261026_ppt-GBd_lp-2268_r-5211508707797128069&sid=c3e45aeab3e8a91e6999bb591e3b6d65&all_sr_blocks=566796308_370840621_2_1_0_57729&checkin=2026-10-26&checkout=2026-10-27&dest_id=5667963&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=566796308_370840621_2_1_0_57729&hpos=1&matching_block_id=566796308_370840621_2_1_0_57729&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=566796308_370840621_2_1_0_57729_11802&srepoch=1792938245&srpvid=d596653e4d64004c&type=total&ucfs=1&",
  defaultLang: "GE",

  contact: {
    phonePrimary: "+995 591 25 52 30",
    email: "info@hotel.ge",

    address: {
      GE: "თბილისი, სოომონ დოდაშვილის ქუჩა, 20გ",
      EN: "Tbilisi, Solomon Dodashvili Street, 20G",
      RU: "Тбилиси, улица Соломона Додашвили, 20G"
    },

    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47675.30063652212!2d44.76180522192384!3d41.683686246909794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440da0a20644ff%3A0x132fce61bbb84305!2sVictoria%20Inn%20Tbilisi!5e0!3m2!1ska!2sge!4v1792938355197!5m2!1ska!2sge",
    whatsapp: "https://wa.me",
    viber: "viber://chat?number=%2B995555123456",
    instagram: "https://www.instagram.com"
  },

  gallery: [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/364160461.jpg?k=fe765728e0bebeadf8c0a8eed854f4aa594675078cec6e2ff77720ef5dbef163&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225464797.jpg?k=ba422938110f51abd81855502fb4de16b47e63dc27a205b208a82536c0e78b05&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225464836.jpg?k=74ccfcbc73275d17c78f3973d5b9f70f58577cbef501e36972590e216d134b25&o="
  ],
  sliderAutoplayMs: 5500,   

  i18n: {
    GE: {
      pageTitle: "Hotel  | სასტუმრო ბათუმში",
      pageDescription: "დაჯავშნეთ კომფორტული დასვენება სანაპიროზე.",
      navMain: "მთავარი",
      navBook: "დაჯავშნა",
      navContact: "დაგვიკავშირდით",
      bookNowBtn: "დაჯავშნა Booking.com-ზე",
      heroTitle: "კეთილი იყოს თქვენი მობრძანება",
      heroSubtitle: "კომფორტი, სიმშვიდე და საუკეთესო სერვისი ზღვის სანაპიროზე.",
      reviewsTitle: "სტუმრების შეფასებები",
      contactTitle: "კონტაქტი",
      phoneLabel: "ტელეფონი",
      emailLabel: "ელ-ფოსტა",
      addressLabel: "მისამართი",
      menu: "მენიუ",
      close: "დახურვა",
      prev: "წინა",
      next: "შემდეგი",
      rights: "ყველა უფლება დაცულია"
    },
    EN: {
      pageTitle: "Hotel  | Hotel in Batumi",
      pageDescription: "Book a comfortable stay right by the sea.",
      navMain: "Home",
      navBook: "Book Now",
      navContact: "Contact Us",
      bookNowBtn: "Book on Booking.com",
      heroTitle: "Welcome",
      heroSubtitle: "Comfort, calm and great service right by the sea.",
      reviewsTitle: "Guest Reviews",
      contactTitle: "Contact Us",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      menu: "Menu",
      close: "Close",
      prev: "Previous",
      next: "Next",
      rights: "All rights reserved"
    },
    RU: {
      pageTitle: "Hotel  | Отель в Батуми",
      pageDescription: "Забронируйте комфортный отдых у самого моря.",
      navMain: "Главная",
      navBook: "Забронировать",
      navContact: "Контакты",
      bookNowBtn: "Забронировать на Booking.com",
      heroTitle: "Добро пожаловать",
      heroSubtitle: "Комфорт, покой и отличный сервис у самого моря.",
      reviewsTitle: "Отзывы гостей",
      contactTitle: "Контакты",
      phoneLabel: "Телефон",
      emailLabel: "Эл. почта",
      addressLabel: "Адрес",
      menu: "Меню",
      close: "Закрыть",
      prev: "Назад",
      next: "Вперёд",
      rights: "Все права защищены"
    }
  },

  reviews: [
    { name: "Alex M.", rating: 5, commentGE: "საუკეთესო სასტუმრო!", commentEN: "Amazing stay!", commentRU: "Прекрасный отель!" },
    { name: "Sophie T.", rating: 5, commentGE: "ძალიან სუფთა და მშვიდი.", commentEN: "Very clean and quiet.", commentRU: "Очень чисто и уютно." },
    { name: "Nino K.", rating: 4, commentGE: "მეგობრული პერსონალი და შესანიშნავი ადგილმდებარეობა.", commentEN: "Friendly staff and a perfect location.", commentRU: "Дружелюбный персонал и отличное расположение." }
  ]
};


(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var LANG_CODES = { GE: "ka", EN: "en", RU: "ru" };
  var STORAGE_KEY = "site-lang";

  var ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 11.9 11.9 0 0 0 1.7 17.8L0 24l6.4-1.7A11.9 11.9 0 0 0 12 24a11.9 11.9 0 0 0 8.5-20.5zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A9.8 9.8 0 1 1 12 21.8zm5.4-7.3c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.4 3.4 14.6 14.6 0 0 0 5.6 4.9c2.1.9 2.9.9 3.9.8a3.3 3.3 0 0 0 2.2-1.6 2.7 2.7 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.3z"/></svg>',
    viber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5C6 2.5 18 2.5 20 4.5s2 9 0 11-5 1.8-7.5 1.8L8 21v-3.7C4 16 2 6.5 4 4.5z"/><path d="M9 8c.3 2.6 2.5 5 6 6.5l1.2-1.2-2-1.3-.9.8c-1.2-.6-2.1-1.6-2.6-2.7l.8-.9L10.2 7z" fill="currentColor" stroke="none"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'
  };

  var state = {
    lang: CONFIG.defaultLang,
    slide: 0,
    timer: null
  };

  /* ---------- helpers ---------- */
  function t(key) {
    var dict = CONFIG.i18n[state.lang] || {};
    var fallback = CONFIG.i18n[CONFIG.defaultLang] || {};
    return dict[key] !== undefined ? dict[key] : (fallback[key] !== undefined ? fallback[key] : "");
  }

  function pick(value) {
    if (value && typeof value === "object") return value[state.lang] || value[CONFIG.defaultLang] || "";
    return value || "";
  }

  function telHref(phone) { return "tel:" + String(phone).replace(/[^\d+]/g, ""); }

  function imageUrl(url) {
    // Unsplash links get sensible size/quality params automatically
    if (/images\.unsplash\.com/.test(url) && url.indexOf("?") === -1) {
      return url + "?auto=format&fit=crop&w=1800&q=80";
    }
    return url;
  }

  /* ---------- language ---------- */
  function applyLanguage(lang) {
    if (!CONFIG.i18n[lang]) lang = CONFIG.defaultLang;
    state.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be blocked */ }

    document.documentElement.lang = LANG_CODES[lang] || "en";
    document.title = t("pageTitle") || CONFIG.propertyName;
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("pageDescription"));

    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });

    $("#heroTitle").textContent = t("heroTitle");
    $("#address").textContent = pick(CONFIG.contact.address);
    $("#burger").setAttribute("aria-label", t("menu"));
    $("#drawerClose").setAttribute("aria-label", t("close"));
    $("#prevBtn").setAttribute("aria-label", t("prev"));
    $("#nextBtn").setAttribute("aria-label", t("next"));

    $$(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderReviews();
  }

  /* ---------- static content from CONFIG ---------- */
  function renderStatic() {
    var c = CONFIG.contact;

    $("#logo").textContent = CONFIG.propertyName;
    $("#drawerTitle").textContent = CONFIG.propertyName;
    $("#footerName").textContent = CONFIG.propertyName;
    $("#year").textContent = new Date().getFullYear();

    $$("[data-booking]").forEach(function (a) { a.href = CONFIG.bookingUrl; });

    var phones = [c.phonePrimary, c.phoneSecondary].filter(Boolean);
    $("#phones").innerHTML = "";
    phones.forEach(function (p) {
      var a = document.createElement("a");
      a.href = telHref(p);
      a.textContent = p;
      $("#phones").appendChild(a);
    });

    var mail = $("#emailLink");
    mail.href = "mailto:" + c.email;
    mail.textContent = c.email;

    $("#mapFrame").src = c.googleMapsUrl;

    $$("[data-icon]").forEach(function (el) { el.innerHTML = ICONS[el.getAttribute("data-icon")] || ""; });

    var social = $("#social");
    social.innerHTML = "";
    [
      { key: "whatsapp", label: "WhatsApp", url: c.whatsapp },
      { key: "viber", label: "Viber", url: c.viber },
      { key: "instagram", label: "Instagram", url: c.instagram }
    ].forEach(function (s) {
      if (!s.url) return;
      var a = document.createElement("a");
      a.className = "social__btn social__btn--" + s.key;
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = ICONS[s.key] + "<span>" + s.label + "</span>";
      social.appendChild(a);
    });
  }

  /* ---------- reviews ---------- */
  function renderReviews() {
    var box = $("#reviewsList");
    box.innerHTML = "";

    CONFIG.reviews.forEach(function (r) {
      var card = document.createElement("article");
      card.className = "review reveal is-visible";
      card.tabIndex = 0;

      var rating = Math.max(0, Math.min(5, Math.round(r.rating)));
      var stars = document.createElement("div");
      stars.className = "review__stars";
      stars.setAttribute("aria-label", rating + " / 5");
      for (var i = 0; i < 5; i++) {
        var s = document.createElement("span");
        s.textContent = "\u2605";
        if (i >= rating) s.className = "off";
        stars.appendChild(s);
      }

      var text = document.createElement("p");
      text.className = "review__text";
      text.textContent = r["comment" + state.lang] || r.commentEN || "";

      var author = document.createElement("div");
      author.className = "review__author";
      var avatar = document.createElement("span");
      avatar.className = "review__avatar";
      avatar.textContent = (r.name || "?").charAt(0).toUpperCase();
      var name = document.createElement("span");
      name.textContent = r.name;
      author.appendChild(avatar);
      author.appendChild(name);

      card.appendChild(stars);
      card.appendChild(text);
      card.appendChild(author);

      function toggle() {
        var wasActive = card.classList.contains("is-active");
        $$(".review.is-active", box).forEach(function (el) { el.classList.remove("is-active"); });
        if (!wasActive) card.classList.add("is-active");
      }
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });

      box.appendChild(card);
    });
  }

  /* ---------- slider ---------- */
  function initSlider() {
    var track = $("#sliderTrack");
    var dotsBox = $("#sliderDots");
    var slider = $("#slider");
    var images = CONFIG.gallery;
    var total = images.length;

    images.forEach(function (src, i) {
      var slide = document.createElement("div");
      slide.className = "slider__slide";
      var img = document.createElement("img");
      img.src = imageUrl(src);
      img.alt = CONFIG.propertyName + " " + (i + 1);
      img.decoding = "async";
      if (i === 0) { img.fetchPriority = "high"; } else { img.loading = "lazy"; }
      slide.appendChild(img);
      track.appendChild(slide);

      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider__dot";
      dot.setAttribute("aria-label", String(i + 1));
      dot.addEventListener("click", function () { goTo(i, true); });
      dotsBox.appendChild(dot);
    });

    function goTo(index, userAction) {
      state.slide = (index + total) % total;
      track.style.transform = "translateX(" + (-100 * state.slide) + "%)";
      $$(".slider__dot", dotsBox).forEach(function (d, i) { d.classList.toggle("is-active", i === state.slide); });
      if (userAction) restart();
    }

    function start() {
      if (!CONFIG.sliderAutoplayMs || total < 2) return;
      stop();
      state.timer = setInterval(function () { goTo(state.slide + 1); }, CONFIG.sliderAutoplayMs);
    }
    function stop() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }
    function restart() { start(); }

    $("#prevBtn").addEventListener("click", function () { goTo(state.slide - 1, true); });
    $("#nextBtn").addEventListener("click", function () { goTo(state.slide + 1, true); });

    // Swipe support
    var startX = 0, startY = 0, tracking = false;
    slider.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX; startY = e.touches[0].clientY; tracking = true;
    }, { passive: true });
    slider.addEventListener("touchend", function (e) {
      if (!tracking) return;
      tracking = false;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(state.slide + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    // Pause when tab hidden
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

    if (total < 2) {
      $("#prevBtn").style.display = "none";
      $("#nextBtn").style.display = "none";
      dotsBox.style.display = "none";
    }

    goTo(0);
    start();
  }

  /* ---------- drawer ---------- */
  function initDrawer() {
    var burger = $("#burger");
    var drawer = $("#drawer");
    var overlay = $("#overlay");

    function open() {
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      burger.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
    }
    function close() {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }

    burger.addEventListener("click", function () { drawer.classList.contains("is-open") ? close() : open(); });
    $("#drawerClose").addEventListener("click", close);
    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    $$("a", drawer).forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("resize", function () { if (window.innerWidth >= 960) close(); });
  }

  /* ---------- misc ---------- */
  function initHeaderScroll() {
    var header = $("#header");
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var items = $$("#contact .info-card, #contact .contact__map, .section__title");
    items.forEach(function (el) { el.classList.add("reveal"); });
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }

    renderStatic();
    initSlider();
    initDrawer();
    initHeaderScroll();

    $$(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLanguage(btn.getAttribute("data-lang")); });
    });

    applyLanguage(saved && CONFIG.i18n[saved] ? saved : CONFIG.defaultLang);
    initReveal();
  });
})();
