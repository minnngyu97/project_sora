// $(function(){

//     let lastScroll = 0;

//     $(window).scroll(function(){
//         curr = $(this).scrollTop();

//         if (curr > lastScroll) {
//             $('header').addClass('hide');
//         } else {
//             $('header').removeClass('hide');
//         }

//         lastScroll = curr;

//     })


//     // 헤더 목록 리스트 버튼
//     $('.nav-list li').hover(function(){
//         $(this).children('.sub').addClass('show');
//     },function(){
//         $(this).children('.sub').removeClass('show');
//     })

// })

// let lastScroll = 0;

// window.addEventListener('scroll', function () {
//     const curr = window.scrollY;
//     const header = document.querySelector('header');

//     if (curr > lastScroll) {
//         header.classList.add('hide');
//     } else {
//         header.classList.remove('hide');
//     }

//     lastScroll = curr;
// });