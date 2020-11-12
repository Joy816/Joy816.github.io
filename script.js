
var navAnchorTag = document.querySelectorAll('.nav-menu a ');

for ( var i =0 ; i< (navAnchorTag.length)-1 ; i++){
    navAnchorTag[i].addEventListener('click', function (event){

        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var scrollInterval = setInterval (function (){

            var targetdistance = targetSection.getBoundingClientRect();

         
            if ( targetdistance.top <=50){

                clearInterval(scrollInterval);

            }

            window.scrollBy(0,50);

        },20);
        


    });

}