document.querySelectorAll('.side-bar').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.id;
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
