const arrowLink = document.getElementById('arrow-box');

/* Add listener so the screen scrolls when the guest clicks the
 * arrows on the bottom of the header section
 */
arrowLink.addEventListener('click', (event)=> {
    document.getElementById('section-2-container').scrollIntoView();
});

const panelItems = document.querySelectorAll('.panel');

panelItems.forEach((panel) => {
    panel.addEventListener('click', (event) => {
        console.log("You clicked " + panel.id + ".");
    });
    
});