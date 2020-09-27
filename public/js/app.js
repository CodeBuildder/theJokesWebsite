console.log('Client fact side is working kk!')
console.log('Sachi is yours')

$(document).ready(function() {

    $(window).scroll(function(){
 
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
            }else{
             $(".navbar").removeClass("sticky");
             $(".goTop").fadeOut();
            }
    }); 

   $('.menu-toggler').click(function(){
 
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");

    });

    const jokesMessage = document.querySelector('#jokesMessage')

    jokesMessage.textContent = ''

    //alert("Success")

        fetch('/jokes').then((response)=> {
            response.json().then((data) => {

                    jokesMessage.textContent = data.joke
                    

        
            })


    })

});
