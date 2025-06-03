window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const btn = document.getElementById("backToTop");

  // Navbar transparan saat scroll
  if (window.scrollY > 100) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }

  // Tampilkan tombol "back to top"
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function showSidebar() {
  console.log("Sidebar triggered");
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  console.log("Sidebar disembunyikan"); // tambahkan untuk debug
  sidebar.style.display = 'none';
}


