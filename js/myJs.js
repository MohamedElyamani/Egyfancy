// to scroll top
$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll > 300){
        $('.toScroll i').fadeIn(300);
    }else{
        $('.toScroll i').fadeOut(300)
    }
})
$('.toScroll i').click(()=>{
    $(window).scrollTop(0);
})
// code for loading screen
$(document).ready(()=>{
    $('#loading').fadeOut(1000, ()=>{
        $('body').css('overflow-y','auto')
    })
})
// ================================================================
// loop for image under header
let tours = [
    {img:'img/under-header-1.jpg', title:'Balloon Flights'},
    {img:'img/under-header-2.jpg', title:'Mountain Holiday'},
    {img:'img/under-header-3.jpg', title:'Beach Holidays'},
]
otherTour();
function otherTour(){
    let tourItem= ``;
    for(let i = 0; i < tours.length; i++){
        tourItem += `
        <div class="col-md-4">
                    <div class="item position-relative overflow-hidden">
                        <img src="${tours[i].img}" alt="tourism image" loading="lazy" class="w-100">
                        <div class="layer text-center text-white position-absolute w-100 h-100 top-0 end-0">
                            <div class="title d-flex justify-content-center align-items-end h-100">
                                <h2>${tours[i].title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('toursRowData').innerHTML = tourItem
}

// code for tabs when click show content
$('.tabs-list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content > div').hide() && $($(this).data('target')).fadeIn();
}); 

// loop for service
services();
function services(){
    let servItem = ``;
    for(let i = 0; i < 6; i++){
        servItem += `
        <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="service-content p-3 border border-dark-subtle mb-3">
                    <h3><i class="fa-regular fa-file-lines me-2"></i>Title of Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque commodi quam magni tempora optio est libero sed itaque a unde!</p>
                </div>
            </div>
        `
    }
    document.getElementById('serviceRowData').innerHTML = servItem;
}

// loop for hot tour
let hotTour = [
    {img:'img/hot-tour-1.jpg', title:'Benidorm, Spain', price:'800$'},
    {img:'img/hot-tour-2.jpg', title:'Mauritius Island, Africa', price:'750$'}
]
hot();
function hot(){
    let tour=``
    for(let i = 0; i < hotTour.length; i++){
        tour += `
        <div class="col-lg-12">
        <div class="tour-content border border-dark-subtle mb-3 d-flex justify-content-between">
            <img src="${hotTour[i].img}" alt="island image" loading="lazy" class="w-50">
            <div class="content ms-5 mt-5">
                <h3>${hotTour[i].title}</h3>
                <p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    4 customer reviews
                </p>
                <p>Lorem Ipsum is simply dummy text of the pr int ing and
                    typeset t ing indust ry. Lorem Ipsum has been the indust ry's
                    standard dummy text ever since the 1500s, when an
                    unknown pr inter took a gal ley of type and scrambled i t to
                    make a type</p>
                    <div class="click py-4">
                        <a href="#">Book Now</a>
                    </div>
            </div>
            <div class="price">
                <span>${hotTour[i].price}</span>
            </div>
        </div>
    </div>        
        `
    }
    document.getElementById('hotTourRowData').innerHTML = tour
}

// loop for team
 let teams = [
    {img:'img/team-1.jpg', name:'name', job:'job title', phone:'+0123456789'},
    {img:'img/team-2.jpg', name:'name', job:'job title', phone:'+0123456789'},
    {img:'img/team-3.jpg', name:'name', job:'job title', phone:'+0123456789'},
    {img:'img/team-4.jpg', name:'name', job:'job title', phone:'+0123456789'},   
]
team();
function team(){
let team = ``
for (let i = 0; i < teams.length; i++) {
    team +=`
    <div class="col-lg-3 col-md-6 mb-3">
    <div class="member p-3 shadow-sm bg-white text-center position-relative">
        <img src="${teams[i].img}" alt="team member" loading="lazy">
        <h4>${teams[i].name}</h4>
        <h6>${teams[i].job}</h6>
        <p>${teams[i].phone}</p>
    </div>
</div>
                `
        }
         document.getElementById('teamRowData').innerHTML = team
} 

// owl carsoul for image gallery
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  new VenoBox({
    selector: '.venobox'
  });