(function() {
  var GA_ID = "G-LE8PMCPPYM";

  var EU_COUNTRIES = new Set([
    "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR",
    "DE","GR","HU","IE","IT","LV","LT","LU","MT","NL",
    "PL","PT","RO","SK","SI","ES","SE",
    "GB","IS","LI","NO"
  ]);

  function loadGA() {
    if (document.getElementById("ga-script")) return;
    var s = document.createElement("script");
    s.id = "ga-script";
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  function showBanner(isEU) {
    var banner = document.getElementById("cookie-banner");
    var text = document.getElementById("cookie-text");
    var decline = document.getElementById("cookie-decline");

    if (isEU) {
      text.textContent = "We use cookies to understand how visitors interact with our site. Your data is not sold or shared.";
      decline.style.display = "inline-block";
    } else {
      text.textContent = "We use analytics cookies to improve your experience.";
    }
    banner.style.display = "flex";

    document.getElementById("cookie-accept").addEventListener("click", function() {
      localStorage.setItem("cookie_consent", "accepted");
      banner.style.display = "none";
      loadGA();
    });

    decline.addEventListener("click", function() {
      localStorage.setItem("cookie_consent", "declined");
      banner.style.display = "none";
    });
  }

  var consent = localStorage.getItem("cookie_consent");
  if (consent === "accepted") { loadGA(); return; }
  if (consent === "declined") { return; }

  fetch("/api/geo")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var isEU = EU_COUNTRIES.has(data.country);
      if (!isEU) { loadGA(); }
      showBanner(isEU);
    })
    .catch(function() {
      showBanner(true);
    });
})();
