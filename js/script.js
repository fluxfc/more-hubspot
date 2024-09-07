// Accordion
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
    } else {
        content.style.display = "block";
        icon.textContent = "-";
    }
}


// Tabs

document.addEventListener('DOMContentLoaded', function () {
    function setupTabs(containerId) {
        const container = document.getElementById(containerId);
        const tabHeaders = container.querySelectorAll('.tab-header');
        const tabContents = container.querySelectorAll('.tab-content');

        tabHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const target = this.getAttribute('data-tab');

                tabHeaders.forEach(h => h.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                this.classList.add('active');
                container.querySelector(`#${target}`).classList.add('active');
            });
        });
    }

    setupTabs('lodges');
    setupTabs('hotels');
});



