//copyright year
document.querySelector('.copyright .year').innerHTML = new Date().getFullYear();

//back to top button
var up = document.querySelector("#up");
document.addEventListener('scroll', function() {
	scrollpos = window.scrollY;

    if(scrollpos > 100){
      up.classList.add("show-up");
    }
    else {
	  up.classList.remove("show-up");
    }
})

//toggle the mobile menu
document.querySelector('#mobiNavBtn').onclick = function(){
	document.querySelector("#mobiNav").classList.toggle("show-mobi");
	document.querySelector("#mobiNavBtn").classList.toggle("mobi-btn");
}

//document.documentElement.scrollTop = document.body.scrollTop = 0;


//add current class to current links
var link = document.querySelectorAll("nav a"),
	i=0, len=link.length,
	full_path = location.href.split('#')[0]; 

for(; i<len; i++) {
	if(full_path.indexOf(link[i].href.split("#")[0]) != -1){
		link[i].parentNode.classList.add('current'); //add class to parent of current link
		link[i].href = link[i].href + '#'; //add a hash to current links to prevent uneccessary page reloads
		}	
	}

//hides image titles (personal preference, not needed)
function DisableToolTip(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.onmouseover = function() {
            this.setAttribute("aria-label", this.title);
            this.title = "";
        };
        element.onmouseout = function() {
            this.title = this.getAttribute("aria-label");
        };
    }
}


DisableToolTip(link);
var image = document.querySelectorAll("img");
DisableToolTip(image);

	
