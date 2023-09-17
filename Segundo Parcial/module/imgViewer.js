function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg() {
    fulImgBox.style.display = "none";
}
export { openFulImg, closeImg };