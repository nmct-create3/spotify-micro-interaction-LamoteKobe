


function main(){
    let button = document.querySelector('.album__action');
    button.addEventListener('click', function() {
        button.classList.toggle("checked")
    // let album = document.querySelector('.album');
    // album.classList.toggle('album--selected');
    console.log('button clicked');
});
}











document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    main();
    console.log('DOM fully loaded and parsed');
});