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

const categoryToggles = Array.from(document.querySelectorAll('.category-toggle'));

categoryToggles.forEach(btn => {
	btn.addEventListener('click',function(){
		if(this.innerText == '+'){
			this.innerText = '-';
		}else {
			this.innerText = '+';
		}
		this.classList.toggle('active');
	});
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


const daysText = document.querySelector('#days');
const hoursText = document.querySelector('#hours');
const minText = document.querySelector('#min');
const secText = document.querySelector('#sec');


var countDownDate = new Date(2025,0,0);
var updateDate = setInterval(()=>{
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000*60*60*24));
	var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
	var min = Math.floor((distance % (1000*60*60))/ (1000*60));
	var sec = Math.floor((distance % (1000*60))/1000);
	daysText.innerText = days;
	hoursText.innerText = hours;
	minText.innerText = min;
	secText.innerText = sec;
},1000);


const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const inputPrice = document.querySelector('#input');
const price = document.querySelector('.subtotal .price');

increment.addEventListener('click',()=>{
	inputPrice.value = Number(inputPrice.value) + 1;
	updatePrice(Number(inputPrice.value));
});

decrement.addEventListener('click',()=>{
	if(inputPrice.value == '1') return ;
	inputPrice.value = Number(inputPrice.value) - 1;
	updatePrice(Number(inputPrice.value));
});


const updatePrice = (numberProduct) => {
	const singlePrice = parseInt(price.dataset.price,10);
	console.log(singlePrice);
	price.innerText = `$ ${singlePrice*numberProduct}.00`
}

const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
const tabContents = Array.from(document.querySelectorAll('.tab-item'));
tabBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		tabBtns.forEach(btn => btn.classList.remove('tab-active'));
		e.target.classList.add('tab-active');
		tabContents.forEach(tab => tab.classList.remove('tab-item-active'));
		document.querySelector(`${e.target.dataset.target}`).classList.add('tab-item-active');
	});
});



const relatedSlide = document.querySelector('.related-product .newarrives-slide');
const relatedprevSlide = document.querySelector('.related-product .prev-slide');
const relatednextSlide = document.querySelector('.related-product .next-slide');
const relatedsizeSlide = document.querySelector('.related-product .newarrives-slide div').offsetWidth;
let relatedcounterSlide = 0;

relatednextSlide.addEventListener('click',function(){
	if(relatedcounterSlide == 2) return;
	relatedcounterSlide++;
	relatedSlide.style.transition = 'transform .2s ease-in-out';
	relatedSlide.style.transform = 'translateX('+(-relatedsizeSlide*relatedcounterSlide) + 'px)';
	this.disabled = true;
});

relatedprevSlide.addEventListener('click',function(){
	if(relatedcounterSlide == 0) return;
	relatedcounterSlide--;
	relatedSlide.style.transition = 'transform .2s ease-in-out';
	relatedSlide.style.transform = 'translateX('+(-relatedsizeSlide*relatedcounterSlide) + 'px)';
	this.disabled = true;
});

relatedSlide.addEventListener('transitionend',function(){
	relatednextSlide.disabled = false;
	relatedprevSlide.disabled = false;
});


// SCROLL TO TOP BUTTON START 

const scrollToTop = document.querySelector('.scroll-top');
window.addEventListener('scroll',function(){
	if(window.pageYOffset>=300){
		scrollToTop.style.display = 'inline-block';
	}else {
		scrollToTop.style.display = 'none';
	}
});

scrollToTop.addEventListener('click',function(){
	let position = window.pageYOffset;
	function scrollToTop(){
		position -= 100;
		window.scrollTo(0,position);
		if(position >= 0){
			window.requestAnimationFrame(scrollToTop);
		}
	}
	window.requestAnimationFrame(scrollToTop);
});