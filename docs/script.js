let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};


// Modal functions
function openModal(courseName) {
  document.getElementById('modalCourseTitle').textContent = courseName;
  document.getElementById('enrollModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('enrollModal').classList.add('hidden');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('enrollModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Search functionality
document.getElementById('courseSearch').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const categories = document.querySelectorAll('.course-category');
  
  categories.forEach(category => {
    const items = category.querySelectorAll('li');
    let hasVisibleItems = false;
    
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'flex';
        hasVisibleItems = true;
      } else {
        item.style.display = 'none';
      }
    });
    
    // Show/hide entire category based on visible items
    category.style.display = hasVisibleItems ? 'block' : 'none';
  });
});