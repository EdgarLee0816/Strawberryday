document.addEventListener("DOMContentLoaded", () => {

/* 슬라이드 이벤트 */
    const slide = document.querySelector("#layout #slideArea #slide")

    /* alert (slide); */

    const toleft = () => {

        slide.style.left = "-1600px";
        slide.style.transition = "0.5s";        
        setTimeout ( x, 1000);
    };

    const x = () => {

        slide.style.left = "0px";
        slide.style.transition = "none";
        slide.append(slide.firstElementChild);
    };

    setInterval( toleft, 3000);


/* 타이핑 이벤트 */
    const typing = document.getElementById("typing");
    const text = "딸기의 하루\n방문을 환영합니다!";

    let i=0; //text.length
 /* alert (text.length); */

    let t = "";

    const chat = () => {

    if ( i < text.length) {        
        
        t += text[i];
        typing.innerText = t;   
        i++;

        setTimeout(chat , 100);        
    };
 };

 setTimeout(chat , 300); 

/* 클릭 이벤트 */ 
    const click_a = document.querySelector("#click a");

    click_a.addEventListener("click", () => {

        infotop.classList.add('act');

    });


/* 휠 이벤트 */

    const infotop = document.getElementById("info-top");
    const strawtop = document.getElementById("straw-top");
    const potatotop = document.getElementById("potato-top");
    const kidtop = document.getElementById("kid-top");
    
    const info_top = Math.trunc(infotop.getBoundingClientRect().top);
    const straw_top  = Math.trunc(strawtop.getBoundingClientRect().top);
    const potato_top = Math.trunc(potatotop.getBoundingClientRect().top);
    const kid_top = Math.trunc(kidtop.getBoundingClientRect().top);

 window.addEventListener("wheel", e => {

    e.preventDefault();

    /* if (window.scrollY >= 100) {
        
        infotop.classList.add('act');
    }; */
    //휠을 아래로 내릴때
    
    if ( window.scrollY >= info_top - 1000) infotop.classList.add('act');
    /* if ( window.scrollY >= straw_top - 1000 ) strawtop.classList.add('act');
    if ( window.scrollY >= potato_top - 1000 ) potatotop.classList.add('act');
    if ( window.scrollY >= kid_top - 1000 ) kidtop.classList.add('act'); */

  });

});////////////////끝!