const button = document.getElementById("button");
function debounce(fn, delay) {
    let timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn();
        }, delay);
    };
}

button.addEventListener("click", debounce(function() {
    console.log("Button clicked");
},2000));


