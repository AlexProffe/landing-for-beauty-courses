const accordeon = () => {
    const controls = document.querySelectorAll('.question-control');
    controls.forEach(item => {
        item.addEventListener('click', _ => {
            item.parentNode.classList.toggle('active')
        })
    })
}

let swiper = new Swiper(".testimonials-slider", {
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20,
        },  
        320: {
            slidesPerView: 1,
        },
    },
  });


const modal = () => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const openModalButton = document.querySelectorAll('.open-modal');
    const modalForm = document.querySelector('.modal-form');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    modalForm.addEventListener('submit', evt => {
        evt.preventDefault();

        toggleModal();
    })

    openModalButton.forEach( item => {
        item.addEventListener('click', evt => {
            toggleModal();
        })
    })

    modal.addEventListener('click', evt => {
        toggleModal();
    })

    modalContent.addEventListener('click', evt => {
        evt.stopPropagation();
        evt.stopImmediatePropagation(); 
    });
}
modal();
accordeon();