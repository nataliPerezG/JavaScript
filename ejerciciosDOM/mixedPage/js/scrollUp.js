
export const scrollUpbtn = (btn) => {

  let botonScroll = document.querySelector(btn);

  window.addEventListener("scroll", e => {
    let scrollTop = document.documentElement.scrollTop;
    (scrollTop > 500)
      ? botonScroll.classList.remove("btHidden")
      : botonScroll.classList.add("btHidden")
  })

  document.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      })
    }
  })
}

