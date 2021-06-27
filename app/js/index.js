
const btnhambuger = document.querySelector('#btnhambuger') //grabs the ham buger menu.
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

    btnhambuger.addEventListener('click',function(){ //closes
        //function checks to see if the element has class.
        if(header.classList.contains('open')){
            //if it has the class open then it removes it.
            header.classList.remove('open')
            overlay.classList.remove('fade-in')
            overlay.classList.add('fade-out')
        }
        else {
            //else adds open class. 
            header.classList.add('open') // opens menu 
            overlay.classList.remove('fade-out')
            overlay.classList.add('fade-in')
        }
    })