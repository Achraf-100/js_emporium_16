function carousel() {
    let cpt = 1;
    let carousel = document.querySelector('#carousel-contenu');
    let button = document.querySelectorAll('.button-carousel');
    let pos = ['0px', '-300px', '-580px', '-850px'];
    button[0].addEventListener('click', () => {
        carousel.style.left = '0px';
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        })
        button[0].classList.replace('bg-light', 'bg-secondary');
    });

    button[1].addEventListener('click', () => {
        carousel.style.left = '-300px';
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        })
        button[1].classList.replace('bg-light', 'bg-secondary');
    });

    button[2].addEventListener('click', () => {
        
        carousel.style.left = '-580px';
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        })
        button[2].classList.replace('bg-light', 'bg-secondary');
    });

    button[3].addEventListener('click', () => {
        carousel.style.left = '-850px';
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light')
        })
        button[3].classList.replace('bg-light', 'bg-secondary');
    });

    button.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = '#bebebe';
        });
        e.addEventListener('mouseout', () => {
            e.style.backgroundColor = '';
        })
    });
    setInterval(() => {
        cpt = (cpt + 1) % 4;
        carousel.style.left = pos[cpt];
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        });
        button[cpt].classList.replace('bg-light', 'bg-secondary');

    }, 5000);

    window.addEventListener('keydown', event => {
        if (event.which == '39') {
            cpt = (cpt + 1) % 4;
            carousel.style.left = pos[cpt];
        } else if (event.which == '37') {
            
            cpt = (cpt - 1) % 4;
            if (cpt < 0) {
                cpt = 3;
            }
            carousel.style.left = pos[cpt];
        }
        button.forEach(e => {
            e.classList.replace('bg-secondary', 'bg-light');
        });
        button[cpt].classList.replace('bg-light', 'bg-secondary');

    });
}

export {
    carousel
}