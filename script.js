function OpenMenu(){
	menu = document.querySelector('.mobile_menu')
	close_burger_icon = document.querySelector('.menu_burger_header_close')
	burger_icon = document.querySelector('.menu_burger_header_open')
	menu.style.display = 'flex'
	burger_icon.style.display = 'none'
	close_burger_icon.style.display = 'block'
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}
function CloseMenu(){
	burger_icon = document.querySelector('.menu_burger_header_open')
	close_burger_icon = document.querySelector('.menu_burger_header_close')
	menu = document.querySelector('.mobile_menu')
	burger_icon.style.display = 'block'
	menu.style.display = 'none'
	close_burger_icon.style.display= 'none'
	document.getElementsByTagName("body")[0].style.overflowY = "auto";
}