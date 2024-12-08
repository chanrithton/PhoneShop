let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

function openSearchBar() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Display the search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = 'flex';
}

function closeSearchBar() {
    // Hide the search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = 'none';
}



function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

function closeSearchBarOnClickOutside(event) {
    const searchBar = document.getElementById('searchBar');

    // Check if the click is outside the search bar
    if (searchBar.style.display === 'block' && !searchBar.contains(event.target)) {
        searchBar.style.display = 'none';
    }
}

function performSearch() {
    const searchInput = document.querySelector('#searchBar input').value;
    if (searchInput.trim()) {
        alert(`Searching for: ${searchInput}`);
        // Add your search logic here (e.g., redirect to a search results page)
    } else {
        alert('Please enter a search term.');
    }
}


const dropdowns = document.querySelectorAll(".menu-item.dropdown");
dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    let hideTimeout;

    dropdown.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        dropdownMenu.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            dropdownMenu.classList.remove("show");
        }, 100);
    });

    dropdownMenu.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });

    dropdownMenu.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            dropdownMenu.classList.remove("show");
        }, 500);
    });
});