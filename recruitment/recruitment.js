document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button-dropdown2').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            let dropdownMenu = button.nextElementSibling;
            document.querySelectorAll('.dropdown-menu2').forEach(function (menu) {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            dropdownMenu.classList.toggle('show');
        });
    });

    document.querySelectorAll('.dropdown-search').forEach(function (input) {
        input.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        input.addEventListener('input', function () {
            let filter = input.value.toLowerCase();
            let dropdownItems = input.parentElement.querySelectorAll('.dropdown-item');
            dropdownItems.forEach(function (item) {
                if (item.textContent.toLowerCase().includes(filter)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
            let button = item.closest('.dropdown').querySelector('.text-button-dropdown2 .curren-value');
            button.textContent = item.textContent;
            item.parentElement.classList.remove('show');
        });
    });

    window.addEventListener('click', function () {
        document.querySelectorAll('.dropdown-menu2').forEach(function (menu) {
            menu.classList.remove('show');
        });
    });
});

