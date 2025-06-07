
// boquet
window.addEventListener('DOMContentLoaded', () => {
    // Tambahkan class 'relative' ke parent .col sesuai kelas z-index
    document.querySelectorAll('.z-index-1, .z-index-2, .z-index-3, .z-index-4, .z-index-5, .z-index-6, .z-index-7, .z-index-8, .z-index-9, .z-index-10')
        .forEach(el => {
            const parentCol = el.closest('.col');
            if (parentCol) {
                parentCol.classList.add('relative');
            }
        });

    // Tambahkan kelas dasar ke boquet
    const right = document.getElementById('boquet-right');
    const left = document.getElementById('boquet-left');

    right.classList.add('boquet', 'right');
    left.classList.add('boquet', 'left');

    // Pasang 1 event scroll saja untuk handle semua efek scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;

        // Scale dan opacity toggle
        if (scrollPercent > 0.1) {
            right.classList.add('active');
            left.classList.add('active');
            updateTransform(right, 'right', 1);
            updateTransform(left, 'left', 1);
        } else {
            right.classList.remove('active');
            left.classList.remove('active');
            updateTransform(right, 'right', 5);
            updateTransform(left, 'left', 5);
        }

        // Reverse toggle
        if (scrollPercent > 0.3) {
            right.classList.add('reverse');
            left.classList.add('reverse');
        } else {
            right.classList.remove('reverse');
            left.classList.remove('reverse');
        }
    });

    coupleHandler();
    lottieFlowerHandler();
    coupleGroomAndBrideHandler();

});




// helper supaya transform gabung scale + translate + rotate tanpa konflik
function updateTransform(el, side, scaleValue) {
    let translateX = side === 'right' ? '70%' : '-80%';
    let rotateDeg = side === 'right' ? -20 : 20;

    el.style.transform = `translateX(${translateX}) rotate(${rotateDeg}deg) scale(${scaleValue})`;
}


// jam
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.wpo-wedding-time');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.4 // 30% visible triggers animation
    });

    sections.forEach(section => observer.observe(section));
});

// groom & bride
window.addEventListener('DOMContentLoaded', () => {
    const groomBrideCols = document.querySelectorAll('.groom, .bride');



    // Pasang kelas awal 'slide-up'
    groomBrideCols.forEach(el => el.classList.add('slide-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    groomBrideCols.forEach(el => observer.observe(el));
});

function coupleHandler() {
    const image = document.getElementById("coupleImage");

    // Pastikan elemen ada
    if (!image) {
        console.warn("Element #coupleImage not found");
        return;
    }

    // Observer untuk animasi muncul
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    image.classList.add("visible");
                } else {
                    image.classList.remove("visible");
                }
            });
        },
        {
            root: null,
            threshold: 1
        }
    );

    // Observe parent wrapper, bukan elemen fixed-nya
    const wrapper = image.parentElement;
    observer.observe(wrapper);

    // Parallax effect tetap aktif saat scroll
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        image.style.transform = `translateY(${scrollY * 0.2}px) scale(1.05)`;
    });
}

function lottieFlowerHandler(){
     const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-flower'), // container div
        renderer: 'svg', // atau 'canvas', 'html'
        loop: true,      // true untuk animasi berulang
        autoplay: true,  // langsung play
        path: '/assets/lottie/flower-animation.json' // path ke file JSON
    });

    const target = document.getElementById('lottie-flower');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add('visible');
                flowerAnimation.play(); // mulai animasi
            } else {
                target.classList.remove('visible');
                flowerAnimation.stop(); // bisa pakai pause() kalau mau berhenti tapi tetap di frame terakhir
            }
        });
    }, {
        threshold: 0.5 // terlihat 50% baru aktif
    });

    observer.observe(target);
}


function coupleGroomAndBrideHandler(){
     const animation = lottie.loadAnimation({
        container: document.getElementById('bride-and-groom'), // container div
        renderer: 'svg', // atau 'canvas', 'html'
        loop: false,      // true untuk animasi berulang
        autoplay: true,  // langsung play
        path: '/assets/lottie/brideAndGroom.json' // path ke file JSON
    });

    // const target = document.getElementById('lottie-flower');

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             target.classList.add('visible');
    //             flowerAnimation.play(); // mulai animasi
    //         } else {
    //             target.classList.remove('visible');
    //             flowerAnimation.stop(); // bisa pakai pause() kalau mau berhenti tapi tetap di frame terakhir
    //         }
    //     });
    // }, {
    //     threshold: 0.5 // terlihat 50% baru aktif
    // });

    // observer.observe(target);
}