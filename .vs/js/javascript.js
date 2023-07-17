let dropdown = document.querySelector('.dropdown');
const dropcont = document.querySelector('.dropcont');

function show() {
    dropdown.classList.toggle('active');
}

function showAndToggle() {
    show2();
    togui();
}
let dropdown2 = document.querySelector('.dropdown2');
function show2() {
    dropdown2.classList.toggle('active');

}
function togui() {
    var keyframesCSS
    if (dropdown2.classList.contains('active')) {
        keyframesCSS = `
      
        @keyframes dropdownAnimation {
          from {
            height: 100px;
            opacity:0;
          }
          to {
            height: 170px;
            opacity:1;
          }
        }    
      `;
    }
    else {
        keyframesCSS = `
        @keyframes dropdownAnimation {
          from {
            height: 0px;
            opacity:;
          }
          to {
            height: 100px;
            opacity:1;
          }
        }    
      `;
    }

    var styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(keyframesCSS));

    document.head.appendChild(styleElement);


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