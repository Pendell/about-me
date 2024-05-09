/* Add listener so the screen scrolls when the guest clicks the
 * arrows on the bottom of the header section
 */
const arrowLink = document.getElementById('arrow-container');
arrowLink.addEventListener('click', (event)=> {
    /* No section-2 currently */
    /* document.getElementById('section-2-container').scrollIntoView(); */
    console.log("Selected the arrows");
    document.getElementById('check-me-out').innerHTML = "Jk I don't have anything here yet";
});