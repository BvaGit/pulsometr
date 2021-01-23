$(document).ready(function(){
    $('.corusel__slide').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/leftArrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/rightArrow.png" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
});

let details = document.querySelectorAll(".catalog-cards__link");
let back = document.querySelectorAll(".catalog-cards__back");
let content = document.querySelectorAll(".catalog-cards__content");
let list = document.querySelectorAll(".catalog-cards__list");
let tabs = document.querySelectorAll(".catalog__tab");
let tabItem = document.querySelectorAll(".catalog-cards__tabItems");

function showList(it){
    it.forEach((item,i)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            content[i].classList.toggle("catalog-cards__content_active");
            list[i].classList.toggle("catalog-cards__list_active");
        });
        
    });
}

showList(details);
showList(back);

tabs.forEach((item, i)=>{
item.addEventListener("click", ()=>{
    tabs.forEach((item, i)=>{
        if(item.classList.contains("catalog__tab_active")){
            item.classList.remove("catalog__tab_active");
            tabItem[i].classList.remove("catalog-cards__tabItems_active");
        }
    });
    if(!(tabs[i].classList.contains("catalog__tab_active"))){
        tabs[i].classList.add("catalog__tab_active");
        tabItem[i].classList.add("catalog-cards__tabItems_active");
    }
});
});


