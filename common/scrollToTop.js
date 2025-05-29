const scrollToTop = () => {
  let offset = 150;
  let progressWrap = document.querySelector(".progress-wrap");

  if (progressWrap) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    });

    progressWrap.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    });
  }
};

export default scrollToTop;
