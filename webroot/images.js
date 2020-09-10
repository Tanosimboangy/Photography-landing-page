console.log("it works");

// const images = document.querySelectorAll('.galleries');
// const firstGallery = document.querySelectorAll('.firs_gallery');
// const secondGallery = document.querySelectorAll('.second_gallery');
// const gallery = Array.from(gallery.querySelectorAll(".gallery"));
// console.log(images);
// console.log(firstGallery);
// console.log(secondGallery);
// console.log(gallery);





















// function Gallery(gallery) {
//   if (!gallery) {
//       throw Error('No Gallery Found!!!')
//   }
  



//   // const images = Array.from(gallery.querySelectorAll('img'));
//   // const modal = document.querySelector('.modal');
//   // const prevButton = modal.querySelector('.prev');
//   // const nextButton = modal.querySelector('.next');
//   // let currentImage;
//   // function handleClickOutside(e) {
//   //     if (e.currentTarget === e.target) {
//   //         closeModal();
//   //     }
//   // }
//   // function openModal() {  
//   //     if (modal.matches('.open')) {
//   //         return;
//   //     }
//   //     modal.classList.add('open');
//   //     window.addEventListener('keyup', hanEscapeButon);
//   //     modal.addEventListener("click", handleClickOutside);
//   //     nextButton.addEventListener("click", showNextImage);
//   //     prevButton.addEventListener("click", showPreviousImage);
//   // }

//   // function closeModal() {
//   //     modal.classList.remove('open');
//   //     window.removeEventListener('keyup', hanEscapeButon);
//   //     modal.removeEventListener("click", handleClickOutside);
//   //     nextButton.removeEventListener("click", showNextImage);
//   //     prevButton.removeEventListener("click", showPreviousImage);
//   // }
//   // function showNextImage(e) {
//   //     showImage(currentImage.nextElementSibling || gallery.firstElementChild);
//   // }
//   // function showPreviousImage(e) {
//   //     showImage(currentImage.previousElementSibling || gallery.lastElementChild)
//   // }

//   // function showImage(el) {
//   //     if (!el) {
//   //         console.info('no image to show');
//   //         return;
//   //     }
//   //     console.log(el);
//   //     modal.querySelector('img').src = el.src;
//   //     modal.querySelector('h2').textContent = el.title;
//   //     modal.querySelector('figure p').textContent = el.dataset.description;
//   //     currentImage = el;
//   //     openModal();
//   // }

//   // function hanEscapeButon(e) {
//   //     if (e.key === 'Escape') return closeModal();
//   //     if (e.key === 'ArrowRight') return showNextImage();
//   //     if (e.key === 'ArrowLeft') return showPreviousImage();
//   //     };
//   // images.forEach(image => {
//   //     image.addEventListener('click', e => showImage(event.currentTarget));
//   // });
//   // images.forEach(image => {
//   //     image.addEventListener('keyup', e => {
//   //         if (e.key === 'Enter') {
//   //             showImage(e.currentTarget);
//   //         }
//   //     });
//   // })
// }

// const gallery1 = Gallery(document.querySelector('.gallery1')); 
