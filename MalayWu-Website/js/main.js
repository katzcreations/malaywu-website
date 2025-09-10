document.addEventListener("DOMContentLoaded", () => {
  const contactModal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openContact");
  const closeBtn = document.querySelector(".close-btn");

  if (openBtn && contactModal && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      contactModal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      contactModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = "none";
      }
    });
  }
});
