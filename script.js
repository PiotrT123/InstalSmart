(function(){

  // ===== HEADER HTML =====
  const headerHTML = `
  <header class="header">
    <div class="header-inner container">

      <div class="brand-nav-group">
        <a href="/" class="brand">
          <img src="images/logo.png" alt="" class="logo">
          <span>INSTaLSMART</span>
        </a>

        <nav class="nav">
          <a href="index.html">Strona główna</a>
          <a id="loxonene" href="loxone.html">Loxone</a>
          <a href="wod-kan.html">WOD-KAN</a>
          <a href="gaz.html">GAZ</a>
          <a href="pompy.html">Pompy</a>
          <a href="klimatyzacja.html">Klimatyzacja</a>
          <a href="realizacje.html">Realizacje</a>
          <a href="kontakt.html">Kontakt</a>
        </nav>
      </div>

      <div class="header-meta">
        <a href="https://www.google.com/maps?q=Mucharz+414+34-106" target="_blank" rel="noopener" class="meta-link">
          📍 Mucharz 414
        </a>
        <a href="mailto:piotrtargosz15@gmail.com" class="meta-link">
          ✉️ piotrtargosz15@gmail.com
        </a>
        <a href="https://m.facebook.com/profile.php?id=61571637170536" target="_blank" rel="noopener" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 
            23.405.595 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.413c0-3.1 
            1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.92c-1.506 
            0-1.797.717-1.797 1.77v2.312h3.588l-.467 3.416h-3.121V24h6.117C23.406 
            24 24 23.405 24 22.674V1.326C24 .594 23.406 0 22.675 0z"/>
          </svg>
        </a>
      </div>

      <button class="hamburger" aria-label="menu">☰</button>
    </div>

    <!-- MENU MOBILE -->
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html">Strona główna</a>
      <a id="loxonene" href="loxone.html">Loxone</a>
      <a href="wod-kan.html">WOD-KAN</a>
      <a href="gaz.html">GAZ</a>
      <a href="pompy.html">Pompy</a>
      <a href="klimatyzacja.html">Klimatyzacja</a>
      <a href="realizacje.html">Realizacje</a>
      <a href="kontakt.html">Kontakt</a>
    </div>
  </header>`;

  // ===== FOOTER HTML =====
const footerHTML = `
  <div class="container">
    <p>© ${new Date().getFullYear()} INSTALSMART — Wszystkie prawa zastrzeżone</p>
    <p class="muted">Mucharz 414 34-106 • NIP - 5512668896 • tel. +48 535 150 597</p>
  </div>`;

  // ===== Wstaw header i footer =====
  const siteHeader = document.getElementById('site-header');
  const siteFooter = document.getElementById('site-footer');

  if(siteHeader) siteHeader.insertAdjacentHTML('afterbegin', headerHTML);
  if(siteFooter) siteFooter.innerHTML = footerHTML;

  // ===== HAMBURGER MENU =====
  const hh = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hh?.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Kliknięcie w link zamyka menu
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
});

  // ===== PLACEHOLDER SVG =====
  function svgDataURI(width=800, height=500, bgColor='#ccc', title='placeholder'){
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
      <rect width='100%' height='100%' fill='${bgColor}'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' 
        font-family='Arial' font-size='28' fill='rgba(255,255,255,0.9)'>${title}</text>
      </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  function preparePlaceholders(){
    const imgs = document.querySelectorAll('img.placeholder-img');
    imgs.forEach(img=>{
      const alt = img.getAttribute('data-alt') || 'Zdjęcie - uzupełnij alt';
      const w = img.getAttribute('width') || 800;
      const h = img.getAttribute('height') || 500;
      img.src = svgDataURI(w,h,'#ccc',alt);
      img.alt = alt;
      img.loading = 'lazy';
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', preparePlaceholders);
  } else {
    preparePlaceholders();
  }
  

})();
