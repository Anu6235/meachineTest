// 1. Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // 2. Get the elements we need
  const toggler = document.querySelector('.navbar-toggler');
  const navbarContent = document.querySelector('.navbar-content');
  
  // 3. Add click listener to the toggle button
  toggler.addEventListener('click', function() {
    // 4. Toggle the 'active' class on both elements
    this.classList.toggle('active');
    navbarContent.classList.toggle('active');
    
    // 5. Optional: Close menu when menu items are clicked
    const menuItems = document.querySelectorAll('.navbar-menu li');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        toggler.classList.remove('active');
        navbarContent.classList.remove('active');
      });
    });
  });
});