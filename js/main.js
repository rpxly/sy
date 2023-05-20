// 监听窗口滚动事件
window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored');
    }
}

// 为导航栏添加点击事件
var navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var current = document.querySelector('.active');
        current.classList.remove('active');
        this.classList.add('active');
    });
});

// 为首页轮播图添加自动切换效果
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // 切换间隔为5秒
}

// 为作品集添加过滤效果
var filterButtons = document.querySelectorAll('.filter button');
filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var filterValue = this.getAttribute('data-filter');
        var items = document.querySelectorAll('.grid-item');
        items.forEach(function(item) {
            if (filterValue === 'all') {
                item.style.display = 'block';
            } else if (item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 为模态框添加打开和关闭效果
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll('.grid-item img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});