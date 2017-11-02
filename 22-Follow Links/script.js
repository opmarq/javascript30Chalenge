(function(){

    const navli = document.querySelectorAll("a");
    const highlight = document.createElement("span");

    highlight.classList.add("highlight");
    document.body.appendChild(highlight);

    
    var highlightLink = function(e){

        let coords = {
            height: this.getBoundingClientRect().height,
            width: this.getBoundingClientRect().width,
            top: this.getBoundingClientRect().top + window.scrollY,
            left: this.getBoundingClientRect().left + window.scrollX - 5,
        }

        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;

        highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;

    };

    navli.forEach((li)=>{
        li.addEventListener("mouseenter",highlightLink);
    });

})();