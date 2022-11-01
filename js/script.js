// Remove the transition class
const squares = document.querySelectorAll('.whenscrolling');
squares.forEach((square) => {
    square.classList.remove('slide-in-animation');
    square.classList.remove('slide-in-reverse-animation');

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (square.classList.contains('slide-in')) {
                    square.classList.add('slide-in-animation');
                    // square.classList.add('scrolling-shadow');

                }
                if (square.classList.contains('slide-in-reverse')) {
                    square.classList.add('slide-in-reverse-animation');
                    // square.classList.add('scrolling-shadow');
                }
                return;
            }

            square.classList.remove('slide-in-animation');
            square.classList.remove('slide-in-reverse-animation');
            // square.classList.remove('scrolling-shadow');

        });
    });


    observer.observe(square);
})