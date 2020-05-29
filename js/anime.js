

 function changeColor(color) {
    const colors = ['purple', 'blue', 'turquoise', 'green', 'yellow', 'orange', 'red', 'pink', 'black', 'grey', 'brown', 'white'];
    const colorIndex = colors.indexOf(color);
    const otherColors = colors.filter((s) => s !== color);
    otherColors.forEach(c => {
        const selectors = document.querySelectorAll(' header');
            selectors.forEach(selector => {
                selector.classList.remove(c);
            });
    });
    const selectors = document.querySelectorAll(' header');
        selectors.forEach(selector => {
            selector.classList.add(color);
    });
 }