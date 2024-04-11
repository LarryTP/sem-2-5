// Navbar scroll resize //
var navbar = document.querySelector(".navbar");
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Nav toggle //
const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle) {
        navToggle.addEventListener("click" , () => {
            navMenu.classList.toggle("active");
        })
      }

      const navLink = document.querySelectorAll(".nav-link");
      function linkAction() {
        const navMenu = document.querySelector(".menu");
        navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))

      const Section = document.querySelectorAll('section[id')
      function scrollActive() {
          const scrollY = window.pageYOffset 
          Section.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTOp - 50;
            sectionId = current.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
            }
            else {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
            }
          })
      }
      window.addEventListener('scroll', scrollActive)