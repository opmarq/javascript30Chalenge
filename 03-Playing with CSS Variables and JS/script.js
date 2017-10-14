var inputs = document.querySelectorAll("input");

inputs.forEach(function(elem){
    

    elem.addEventListener("change",function(){

        console.log("ok");

        let sizing = this.dataset.sizing || '';

        console.log(`${this.name} ${this.value}${sizing}`);

        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${sizing}`);

    });

});