const arrowLink = document.getElementById('arrow-box');

/* Add listener so the screen scrolls when the guest clicks the
 * arrows on the bottom of the header section
 */
arrowLink.addEventListener('click', (event)=> {
    document.getElementById('section-2').scrollIntoView();
});