// IIFE -- Immediately Invoked Fuction Expression
(function(){

    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/business_contacts-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
    
})();