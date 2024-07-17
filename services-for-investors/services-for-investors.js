$(document).ready(function () {
    $('.icon-wrap').click(function () {
        var contentBox = $(this).siblings('.in-box-content-body').find('.content-in-box');
        contentBox.slideToggle();
        $(this).find('.plus-icon').toggle();
        $(this).find('.minus-icon').toggle();
    });
});

// document.querySelectorAll('.toggle-content').forEach(svg => {
//     svg.addEventListener('click', function () {
//         const contentBox = this.closest('.box-content-img');
//         const content = contentBox.querySelector('.in-box-content-img');
//         content.classList.toggle('show');
//         this.classList.toggle('active');
//     });
// });

document.querySelectorAll('.toggle-content').forEach(svg => {
    svg.addEventListener('click', function () {
        const contentBox = this.closest('.box-content-img');
        const content = contentBox.querySelector('.in-box-content-img');
        this.classList.toggle('active');

        // Toggle the visibility of .in-box-content-img
        content.classList.toggle('show');

        // Expand or contract .img-our-services based on .in-box-content-img visibility
        const imgServices = contentBox.querySelector('.img-our-services');
        imgServices.style.transform = content.classList.contains('show') ? 'translateY(70%)' : 'translateY(0)';
    });
});


