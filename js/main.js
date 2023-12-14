document.addEventListener('DOMContentLoaded', () =>  {
    // Mobile Menu animation
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));

    //TODO: inactive hamburger menu on any other click
    
    
    // Project Card animation
    function toggleActive() {            
        
        //activate related project elements
        var activateElements = document.querySelectorAll('#' + this.id);
        for (var i = 0; i < activateElements.length; i++) {
            activateElements[i].classList.toggle('active');
        }
    

        //inactive any unrelated active project-card elements
        var projectCards = document.getElementsByClassName('project-card');
        for (var i = 0; i < projectCards.length; i++) {
            if  (projectCards[i].id != this.id && projectCards[i].classList[1] == 'active'){
                projectCards[i].classList.toggle('active');
            }
        }

        //inactive any unrelated active project-description elements 
        var projectDescription = document.getElementsByClassName('project-description');
        for (var i = 0; i < projectDescription.length; i++) {
            if  (projectDescription[i].id != this.id && projectDescription[i].classList[1] == 'active'){
                projectDescription[i].classList.toggle('active');
            }
        }

    }

    var projectCards = document.getElementsByClassName('project-card');

    for (var i = 0; i < projectCards.length; i++) {
        // projectCards[i].addEventListener('click', () => projectCards[i].classList.toggle('active'));
        projectCards[i].addEventListener('click', toggleActive, false);
    }

    

});


