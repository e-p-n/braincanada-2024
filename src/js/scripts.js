// // **** Carousel ****


// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// // const dotsNav = document.querySelector('.carousel__nav');
// // const dots = Array.from(dotsNav.children);



// let slideWidth = slides[0].getBoundingClientRect().width;

// const resetSlideWidthAndPos = (slideWidth, slides) => {
//     slideWidth = slides[0].getBoundingClientRect().width;
//     slides.forEach(setSlidePosition);
// }


// const setSlidePosition = (slide, index ) => {
//     slide.style.left = slideWidth * index + 'px';
// }

// // const updateDots = (currentDot, targetDot) => {
// //     targetDot.classList.add('current-slide');
// //     currentDot.classList.remove('current-slide');
// // }

// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
    
// }

// const hideShowArrows = (targetIndex, prevButton, nextButton, slides) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length -1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');  
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');  
        
//     }
// }


// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     moveToSlide(track, currentSlide, prevSlide);
//     // const currentDot = dotsNav.querySelector('.current-slide');
//     // const prevDot = currentDot.previousElementSibling;
//     // updateDots(currentDot, prevDot);
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);
//     hideShowArrows(prevIndex, prevButton, nextButton, slides);

// })

// nextButton.addEventListener('click', e => {
//     const currentSlide =track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling; 
//     moveToSlide(track, currentSlide, nextSlide);  
//     // const currentDot = dotsNav.querySelector('.current-slide');
//     // const nextDot = currentDot.nextElementSibling;
//     // updateDots(currentDot, nextDot);
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);
//     hideShowArrows(nextIndex, prevButton, nextButton, slides);
// })


// // dotsNav.addEventListener('click', e => {
// //     //what indicator was clicked on
// //     const targetDot = e.target.closest('button');
// //     const currentDot = dotsNav.querySelector('.current-slide');
// //     if(!targetDot || targetDot === currentDot) return;
// //     const currentSlide = track.querySelector('.current-slide');
// //     const targetIndex = dots.findIndex(dot => dot === targetDot);
// //     const targetSlide = slides[targetIndex];

// //     moveToSlide(track, currentSlide, targetSlide);
// //     updateDots(currentDot, targetDot);
// //     hideShowArrows(targetIndex, prevButton, nextButton, slides);
// // })


// window.addEventListener("resize", resetSlideWidthAndPos(slideWidth, slides));
    

// // **** Show / Hide text for Execs ****

function showHide(id, lang) {
    var more = "more >";
    var less = "less >";
    if (lang === "fr") {
        more = "Plus";
        less = "Moins";
    }
    var message = document.getElementById(id);
    

    let button = document.getElementById(id+'-button');
    let pic = document.getElementById(id+'-pic');
    let box = document.getElementById(id+'-box');
    if (message.className.indexOf("pp-show") == -1) {
        message.className += " pp-show"
        pic.className += " pp-pic-pos"
        box.className = box.className.replace("pp-column", "pp-column-extended pp-margin");
        console.log(box.className); 
        button.innerHTML = less;
    } else {
        message.className = message.className.replace(" pp-show", "");
        box.className = box.className.replace("pp-column-extended pp-margin", "pp-column");
        pic.className = pic.className.replace(" pp-pic-pos", "");
        console.log(pic.className);
        button.innerHTML = more;
        var url = location.href
        if (url.indexOf('#' + id + '-box') == -1) {
            url = location.href + '#' + id + '-box';
        }
        location.href = url;
    }
}


// // **** Accordion ****
// function accordion(id) {
//     var accElement = document.getElementById('study-' + id);
//     var studyDets = accElement.childNodes[1];
//     console.log(accElement);

//     if (accElement.className.indexOf("study__show") == -1) {
//         accElement.className += " study__show";
//         studyDets.className += " study__selected";
//     } else {
//         accElement.className = accElement.className.replace(" study__show", "");
//         studyDets.className = studyDets.className.replace("study__selected", "");
//     }
// }


// // **** Load Graph animation on View ****
// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('animation');
//       }
//     });
//   });

//   const observer2 = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('fadeIn');
//       }
//     });
//   });
  
//   observer.observe(document.querySelector('#graph1'));
//   observer.observe(document.querySelector('#graph2'));
//   observer2.observe(document.querySelector('#stats1'));
//   observer2.observe(document.querySelector('#stats2'));

