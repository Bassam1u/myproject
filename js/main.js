
//هاذي دالة تشتغل اوتوماتيكي بدون استدعاء 

(
  //تتاكد من الوضع الحالي هل هو ليلي او نهاري من التخزين المحلي 
  function () {
  const theme = localStorage.getItem("site-theme") || "dark";
  if (theme === "light")
    document.documentElement.setAttribute("data-theme", "light");
  const primary = localStorage.getItem("site-primary");
  if (primary) document.documentElement.style.setProperty("--accent", primary);
  
  //لانشاء الموديل العائم 
  window.openModal = function (html) {
    let mb = document.querySelector(".modal-back");
    if (!mb) {
      mb = document.createElement("div");
      mb.className = "modal-back";
      mb.innerHTML = '<div class="modal" ></div>';
      document.body.appendChild(mb);
    }
    mb.querySelector(".modal").innerHTML = html;
    mb.style.display = "flex";
    mb.addEventListener("click", function (e) {
      if (e.target === mb) mb.style.display = "none";
    });
  };
  //لاغلاق الموديل 
  window.closeModal = function () {
    let mb = document.querySelector(".modal-back");
    if (mb) mb.style.display = "none";
  };
  //هاذي الدالة للتحكم بالشريط الجانبي 
  document.addEventListener("click", function (e) {
    if (
      e.target &&
      e.target.classList &&
      e.target.classList.contains("hamburger")
    ) {
      const nav = document.querySelector("nav.sidebar");
      const cont = document.querySelector(".container");
      if (
        nav.style.width &&
        nav.style.width !== "" &&
        nav.style.width !== "260px"
      ) {
        nav.style.width = "260px";
        cont.style.marginLeft = "260px";
        nav.querySelectorAll("a").forEach((a, i) => {
          a.style.opacity = 0;
          setTimeout(() => (a.style.opacity = 1), 80 * i + 100);
        });
      } else {
        nav.style.width = "72px";
        cont.style.marginLeft = "72px";
        nav.querySelectorAll("a").forEach((a, i) => {
          a.style.opacity = 1;
          setTimeout(() => (a.style.opacity = 0), 40 * i);
        });
      }
    }
  });
})();
