
// this will store the last checked input 
var lastChecked;

var handlecheck = function (e) {

    // only execute the code if the input is checked, because the event will fire when the click event occure!
    if (this.checked) {

        // check if the shift key is in hold also the last checked element that we have stored is checked 
        if (e.shiftKey && lastChecked.checked) {

            // it will be switched when we find the checked elements
            let checkit = false;

            // loop through the inputs array and switch the flag each time we arrive to the checked element, to check the in between inputs
            
            inputs.forEach((input)=>{

                console.log(input.checked);

                if(input.checked)
                    checkit = !checkit;

                if(checkit)
                    input.checked = true;

            });
        }
        lastChecked = this;
    }
};

// get all the checkboxs and add a click EventListener to each one!
const inputs = document.querySelectorAll("input[type='checkbox'");
inputs.forEach(input => input.addEventListener("click", handlecheck));