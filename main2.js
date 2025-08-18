// 2. Copy to clipboard


function copyToClipBoard(str) {
    const element = document.createElement('textarea');
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
}



function handleClick() {
    const text = document.querySelector("#text");
    copyToClipBoard(text.innerText);
}