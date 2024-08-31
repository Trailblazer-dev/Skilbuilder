document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("addNew-btn");
  const form = document.getElementById("frm");

  btn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });
});
