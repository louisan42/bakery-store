


const activePage = () => {
  let pageLoad = document.getElementById("navigation").getElementsByTagName("a");
  for(let i=0;i < pageLoad.length; i++) {
      pageLoad[i].addEventListener("click", function()  {
        let currentPage = document.getElementsByClassName("activePage");
        if(currentPage.length > 0){
            currentPage[0].className = currentPage[0].className.replace("activePage", "");
        }
          this.className += "activePage";
        });
  
  };
};
// Login dropdown 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onload = activePage;

