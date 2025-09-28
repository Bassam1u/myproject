

//هاذي الدالة تاخذ البيانات من الصفحة حق الاضافة وتضيفها الى التخزين المحلي 
//وتححقق من المدخلات بالنسبة للاسم لانهو مطلوب وتبعد المسافات 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("add-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const type = form.querySelector('[name="type"]').value.trim();
    const price = form.querySelector('[name="price"]').value.trim();

    if (!name) {
      showToast("Name required");
      return;
    }

    const list = JSON.parse(localStorage.getItem("projects") || "[]");
    list.push({ name, type, price });
    localStorage.setItem("projects", JSON.stringify(list));

    showToast("Project added");
    form.reset();
  });
});