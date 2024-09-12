document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["I'm a student!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.querySelector("#project");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onScroll() {
    if (isInViewport(projectSection)) {
      projectSection.classList.add("active");
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});
