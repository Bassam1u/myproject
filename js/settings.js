//هاذي الدالة تقوب باستقبال القيمتين الي في الاعدادات الاولى تمثل الوع والثانية للازرار وغيرها
//تقوم با خذ البيانات وتحطها في التخزين المحلي وتحدث الوان الحفحة
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const colorInput = document.getElementById("primary-color");
  const theme = localStorage.getItem("site-theme") || "dark";
  if (theme === "light") themeToggle.checked = true;
  const primary =
    localStorage.getItem("site-primary") ||
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
  if (colorInput)
    colorInput.value = primary.indexOf("#") === 0 ? primary : "#7c5cff";
  themeToggle &&
    themeToggle.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("site-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("site-theme", "dark");
      }
    });
  //هنا نستقبل اللون
  colorInput &&
    colorInput.addEventListener("input", function () {
      document.documentElement.style.setProperty("--accent", this.value);
      localStorage.setItem("site-primary", this.value);
    });
});
