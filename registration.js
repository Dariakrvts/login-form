document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
  });
});
