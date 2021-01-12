const toggleSidebar = document.querySelector('.nav-icon .toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const toggleLists = sidebar.querySelectorAll('.toggler');
const closeSidebar = document.querySelector('.sidebar-item .fa-times');
console.log(closeSidebar);
let hideSidebar = true;
toggleSidebar.addEventListener('click',function(){
	console.log(1);
	if(hideSidebar){
		sidebar.style.transform = 'translateX(0)';
		hideSidebar = false;
	}else {
		sidebar.style.transform = 'translateX(-100%)';
		hideSidebar = true;
	}
});

closeSidebar.addEventListener('click', function(){
	console.log(1);
	sidebar.style.transform = 'translateX(-100%)';
		hideSidebar = true;
});

Array.from(toggleLists).forEach((toggleList) => {
	toggleList.addEventListener('click',function(){
		if(this.nextElementSibling.style.display == 'none'){
			this.nextElementSibling.style.display = 'block';
			this.classList.add('box-shadow-bottom');
			this.parentNode.nextElementSibling.firstElementChild.classList.add('box-shadow-top');
		}else {
			toggleList.nextElementSibling.style.display = 'none';
			this.classList.remove('box-shadow-bottom');
			this.parentNode.nextElementSibling.firstElementChild.classList.remove('box-shadow-top');
		}
	});
});


// BANNER START 
var banners = document.querySelectorAll('.banner');
var banner_i = 0;
setInterval(function(){
	if(banner_i < 0) {
		banner_i = 2;
	}
	if(banner_i > 2) {
		banner_i = 0;
	}
	Array.from(banners).forEach(banner => {
		banner.style.display = 'none';
	});
	banners[banner_i].style.display = 'block';
	banners[banner_i].style.animation = 'fadeIn .3s ease-in-out';
	banner_i++;
},3000);

// BANNER END 



// CAROUSEL START
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = Array.from(document.querySelectorAll('.carousel-slide img'));
var counter = 2;
const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');

const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
carouselImages[counter].style.opacity = '1';
nextBtn.addEventListener('click',()=>{
	nextBtn.disabled = true;
	carouselSlide.style.transition = 'transform .3s ease-in-out';
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	carouselImages[counter].style.opacity = '1';
	carouselImages[counter-1].style.opacity = '0.1';
	
});

prevBtn.addEventListener('click',()=>{
	prevBtn.disabled = true;
	carouselSlide.style.transition = 'transform .3s ease-in-out';
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	carouselImages[counter].style.opacity = '1';
	carouselImages[counter+1].style.opacity = '0.1';
	
});

carouselSlide.addEventListener('transitionend', function(){
	nextBtn.disabled = false;
	prevBtn.disabled = false;
	if (carouselImages[counter].id == 'lastClone'){
		carouselSlide.style.transition = 'none';
		carouselImages[counter].style.opacity = '0.1';
		counter = carouselImages.length - 3;
		carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

		carouselImages[counter].style.opacity = '1';
	}
	if (carouselImages[counter].id == 'firstClone'){
		carouselSlide.style.transition = 'none';
		carouselImages[counter].style.opacity = '0.1';
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
		carouselImages[counter].style.opacity = '1';
	}
});


const newArrivesSlide = document.querySelector('.newarrives-slide');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
const sizeSlide = document.querySelector('.newarrives-slide div').offsetWidth;
let counterSlide = 0;

nextSlide.addEventListener('click',function(){
	if(counterSlide == 2) return;
	counterSlide++;
	newArrivesSlide.style.transition = 'transform .2s ease-in-out';
	newArrivesSlide.style.transform = 'translateX('+(-sizeSlide*counterSlide) + 'px)';
	this.disabled = true;
});

prevSlide.addEventListener('click',function(){
	if(counterSlide == 0) return;
	counterSlide--;
	newArrivesSlide.style.transition = 'transform .2s ease-in-out';
	newArrivesSlide.style.transform = 'translateX('+(-sizeSlide*counterSlide) + 'px)';
	this.disabled = true;
});

newArrivesSlide.addEventListener('transitionend',function(){
	nextSlide.disabled = false;
	prevSlide.disabled = false;
});



const advSlide = document.querySelector('.adv-slide');
const prevAdv = document.querySelector('.prev-adv');
const nextAdv = document.querySelector('.next-adv');
const advSlideSize = advSlide.clientWidth;

prevAdv.addEventListener('click',function(){
	prevAdv.classList.add('active');
	nextAdv.classList.remove('active');
	advSlide.style.transition = 'all .3s ease-in-out';
	advSlide.style.transform = 'translateX(0)';
});

nextAdv.addEventListener('click',function(){
	prevAdv.classList.remove('active');
	nextAdv.classList.add('active');
	advSlide.style.transition = 'all .3s ease-in-out';
	advSlide.style.transform = 'translateX('+(-advSlideSize)+'px)';
});


// ACCORDION START

const toggleAccordions = Array.from(document.querySelectorAll('.accordion button'));
// const accordionContents = Array.from(document.querySelectorAll('.accordion p'));
toggleAccordions.forEach(button => {
	button.addEventListener('click', function(){
		toggleAccordions.forEach(btn => btn.classList.remove('active'));
		this.classList.add('active');
	});
});

// ACCORDION END

// SCROLL TO TOP BUTTON START

const scrollToTop = document.querySelector('.scroll-top');
window.addEventListener('scroll',function(){
	if(window.pageYOffset>=300){
		scrollToTop.style.display = 'inline-block';
	}else {
		scrollToTop.style.display = 'none';
	}
})

scrollToTop.addEventListener('click',function(){
	let position = window.pageYOffset;
	console.log(position);
	function scrollToTop(){
		position -= 100;
		window.scrollTo(0,position);
		if(position >= 0){
			window.requestAnimationFrame(scrollToTop);
		}
	}
	window.requestAnimationFrame(scrollToTop);
});

// SCROLL TO TOP BUTTON END

// ADD TO CART BUTTON START

const addToBtns = Array.from(document.querySelectorAll('.add-to-btn'));
addToBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0.9)';
	const div = e.target.parentNode.parentNode.parentNode;
	div.querySelector('.overlay-add-to-cart-outer').style.display = 'flex';
	console.log(div);
	const src = e.target.parentNode.previousElementSibling.previousElementSibling.src;
	div.querySelector('.overlay-add-to-cart-img').src = src;
	});
});

// ADD TO CART BUTTON END

