$(document).ready(function() {
    $(".menu-icon").on("click", function() {
    	$("nav ul").toggleClass("showing");
	});
});

      // Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('blue');
    }
    else {
    	$('nav').removeClass('blue');
    }
})

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
