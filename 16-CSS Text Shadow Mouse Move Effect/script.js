const container = document.querySelector(".container");
const textMoving = document.querySelector(".text-moving");

let walk = 40;

let moveShadow = function (e) {

    let { offsetHeight: height, offsetWidth: width } = container;
    let { offsetX: x, offsetY: y } = e;

    if (this != e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    let xwalk = ((x / width) * walk) - (walk / 2);
    let ywalk = ((y / height) * walk) - (walk / 2);

    textMoving.style.textShadow = `${xwalk}px ${ywalk}px 0px #555,
                                    ${ywalk}px ${xwalk}px 0px #555,
                                    ${xwalk * -1 }px ${ywalk * -1}px 0px #555`;

};

container.addEventListener("mousemove", moveShadow);