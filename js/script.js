"use strict"
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
                }
                if (square.classList.contains('slide-in-reverse')) {
                    square.classList.add('slide-in-reverse-animation');
                }
                return;
            }
            square.classList.remove('slide-in-animation');
            square.classList.remove('slide-in-reverse-animation');

        });
    });


    observer.observe(square);
})

const delay = ms => new Promise(res => setTimeout(res, ms));
let show_letters = async (tag, i) => {
    let curr_show_len = 1;
    tag.style.color="red";
    
    do {
        await delay(200);

        tag.innerText = contact_infos[i].substring(0, curr_show_len++)
        curr_show_len=(curr_show_len>contact_infos[i].length)?0:curr_show_len;
    } while (true)

}
const i_tags = document.querySelectorAll('footer .contact-items .contact-item');
const contact_infos = ["(+1)639 560-****", "online2jerry@gmail.com", "www.online2jerry.ml", "New Minas, Nova Scotia, CA"];
for (let i = 0; i < i_tags.length; i++) {
    show_letters(i_tags[i], i);
}