document.addEventListener('DOMContentLoaded', function () {
    function isMobile() {
        return window.innerWidth <= 768;
    }

    document.querySelectorAll('.img').forEach(function (img) {
        img.addEventListener('mouseover', function () {
            if (!isMobile()) {
                document.querySelectorAll('.img').forEach(function (i) {
                    i.classList.remove('active');
                });
                img.classList.add('active');
            }
        });

        img.addEventListener('mouseout', function () {
            // Nếu bạn muốn làm gì đó khi chuột rời khỏi ảnh, thêm mã vào đây
        });
    });

    window.addEventListener('resize', function () {
        if (isMobile()) {
            document.querySelectorAll('.img').forEach(function (i) {
                i.classList.remove('active');
            });
        }
    });
});



// JavaScript để mở và đóng menu dropdown
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        console.log("okokok");
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Đóng menu dropdown nếu người dùng nhấp ra ngoài
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});

// Date picker
// $("#datepicker").datepicker({
//     firstDay: 1,
//     showOtherMonths: true,
//     changeMonth: true,
//     changeYear: true,
//     dateFormat: "dd/mm/yy"
// });

// $(".date").mousedown(function () {
//     $(".ui-datepicker").addClass("active");
// });