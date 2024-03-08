function update() {
    const scroll = window.scrollY;
    const anchors = $('.navbar-nav a');
    let section = 0;

    anchors.each((i, anchor) => {
        const obj = $(anchor);
        obj.attr('class', 'nav-link');
        
        const y = $(obj.attr('href')).offset().top;
        if (scroll > y - window.innerHeight / 2) section = i;
    });
    
    $(anchors[section]).attr('class', 'nav-link active');

    requestAnimationFrame(update);
}

$(document).ready(() => {
    requestAnimationFrame(update);
});