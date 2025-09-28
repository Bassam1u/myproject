
//هاذي الدالة تستقبل الرسالة من المستخدم ولاكن تتاكد ان البيانات موجودة 
//وتتاكد من صيغة البريد الالكتروني 
// واذا كل شي صحيح تضهر رسالة 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const msg = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !msg) {
      showToast("Please fill all fields");
      return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      showToast("Enter a valid email");
      return;
    }
    showToast("Thank you — we will contact you soon.");
    form.reset();
  });
});
