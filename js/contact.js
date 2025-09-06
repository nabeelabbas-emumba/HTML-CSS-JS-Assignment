document.addEventListener("DOMContentLoaded", () => {
  const bookTableBtn = document.getElementById("bookTableBtn");
  const form = document.querySelector(".form");

  if (bookTableBtn) {
    bookTableBtn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Your Name']").value;
    const email = form.querySelector("input[placeholder='Your Email']").value;
    const dateTime = form.querySelector(
      "input[placeholder='Date & Time']"
    ).value;
    const people = form.querySelector(
      "input[placeholder='No Of People']"
    ).value;
    const request = form.querySelector(
      "textarea[placeholder='Special request']"
    ).value;

    alert(
      `Name: ${name}\nEmail: ${email}\nDate & Time: ${dateTime}\nNo of People: ${people}\nSpecial Request: ${request}`
    );
  });
});
