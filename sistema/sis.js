const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})

});



// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})





document.addEventListener('DOMContentLoaded', function() {
	// Recupere a imagem base64 do localStorage
	const base64String = localStorage.getItem('profilePicBase64');
	
	// Verifique se a imagem existe no localStorage
	if (base64String) {
		// Encontre o elemento de imagem na segunda página e defina a imagem
		document.getElementById('profile-pic').src = base64String;
	}
	});

let inputFile = document.getElementById('input-file');

	inputFile.onchange = function() {
		const file = inputFile.files[0];
		const reader = new FileReader();

		reader.onload = function() {
			const base64String = reader.result;
			// Salvar a imagem base64 no localStorage
			localStorage.setItem('profilePicBase64', base64String);

			document.getElementById('profile-pic').src = base64String;
		};

		reader.readAsDataURL(file);

		// Lê e salva a segunda imagem base64
		const file2 = inputFile.files[0];
		const reader2 = new FileReader();

		reader2.onload = function() {
			const base64String2 = reader2.result;

			// Salve a segunda imagem base64 no localStorage
			localStorage.setItem('profilePicBase64Copy', base64String2);

			// Defina a imagem carregada como a nova imagem de perfil para o segundo elemento
			document.getElementById('profile-pic2').src = base64String2;
		};

		if (file2) {
			reader2.readAsDataURL(file2);
		}
	};

	let profilePic = document.getElementById('profile-pic');


	const base64String = localStorage.getItem('profilePicBase64');

	if (base64String) {


	profilePic.src = base64String;
	} else {


	profilePic.src = '../assets/profile.png';
	}

	let profilePic2 = document.getElementById('profile-pic2');


	const base64StringCopy = localStorage.getItem('profilePicBase64Copy');

	if (base64StringCopy) {


	profilePic2.src = base64StringCopy;
	} else {


	profilePic2.src = '../assets/profile.png';
	}




	











