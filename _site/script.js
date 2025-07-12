let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
