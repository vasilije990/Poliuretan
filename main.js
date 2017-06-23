// var scrollDoc= window.addEventListener('onscroll', fixNav)
// var Slike={ lezaj:[{ slika:'IMG_201617.jpg', ime:'lezaj', width:'2262',Height:'454' },{ slika:'IMG_201617.jpg', ime:'lezaj', width:'2262',Height:'454' }],
// 			tockovi:[{ slika:'IMG_201617.jpg', ime:'lezssaj' }]




// }
// console.log(Slike.lezaj[0].slika)


// var galerija=document.createElement("div");
// galerija.setAttribute('data-nanogallery2','{"itemsBaseURL": "img/galerija/","thumbnailWidth": "300","thumbnailHeight": "300","thumbnailBorderVertical": 0,"thumbnailBorderHorizontal": 0,"thumbnailDisplayTransitionDuration": 400,"thumbnailDisplayInterval": 30,"thumbnailLabel": {"position": "overImageOnMiddle"},"thumbnailHoverEffect2": "imageScaleIn80|descriptionSlideUp|labelAppear75","thumbnailGutterWidth": 7,"thumbnailGutterHeight": 7,"gallerySorting": "reversed","galleryFilterTags": true,"thumbnailLevelUp": true}')
// Slike.lezaj.map(ubaci)
// function ubaci (el) {
// var slika=document.createElement("a");
// slika.setAttribute('href',""+el.slika+"");
// slika.setAttribute('data-ngimageWidth',"'"+el.width+"'");
// slika.setAttribute('data-ngimageHeight',"'"+el.Height+"'");
// slika.setAttribute("data-ngdesc","Tocak");
// slika.setAttribute('data-ngthumb',""+el.slika+"");
// slika.innerHTML='vasa'
// galerija.appendChild(slika)
// }
// navBar.appendChild(galerija)
var navBar=document.querySelector('header');
var navBar=document.querySelector('header');
var kocka=document.querySelector('.kocka');
var navLogo=document.querySelector('nav div img');
var navFont=Array.from(document.querySelectorAll('nav ul li a'));
// console.log(navFont)
function skrol() {
	if (window.scrollY>100) {
		
		navBar.classList.add('navColor')
		navLogo.classList.add('navLogo')
		// navFont.map(dodaj);
		kocka.classList.add('width0')


	}
	else {
		navBar.classList.remove('navColor')
		navLogo.classList.remove('navLogo')
		// navFont.map(izbaci);
		kocka.classList.remove('width0')
	}
}

// function izbaci (el) {
// 	el.classList.remove('red')
// }
// 				function dodaj (el) {
// 	el.classList.add('red')
// 	console.log(navFont)
// }
// Galerija
