let dropdown = document.querySelector('.dropdown');
       function show(){
        dropdown.classList.toggle('active');
       }
       let dropdown2 = document.querySelector('.dropdown2');
       function show2(){
        dropdown2.classList.toggle('active');
       }
 
   
       let sections = document.querySelectorAll('.sec');
    let sectionPositions = Array.from(sections).map(sec => {
        const rect = sec.getBoundingClientRect();
        return {
            element: sec,
            offsetTop: rect.top + window.pageYOffset,
            offsetBottom: rect.bottom + window.pageYOffset
        };
    });

    function handleScroll() {
        const scrollPosition = window.pageYOffset + (window.innerHeight * 0.6);
        sectionPositions.forEach(({ element, offsetTop, offsetBottom }) => {
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                element.classList.add('show-animate');
            } else {
                element.classList.remove('show-animate');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);