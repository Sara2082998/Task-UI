$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: 
      ["<div class='owl-prev' style='margin-right:-50px'>  <img src='../Images/prev-icon.png' style='width:100px'></div>",
       "<div class='owl-next' > <img src='../Images/next-icon.png' style='width:100px '></div>"],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })