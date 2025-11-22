const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('slide-down');
});
const checkboxes = document.querySelectorAll('.todo-checkbox');

checkboxes.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    if (saved === 'true') {
        cb.checked = true;
        cb.nextElementSibling.classList.add('line-through', 'text-gray-400');
    }
    cb.addEventListener('change', () => {
        localStorage.setItem(cb.id, cb.checked);
        if (cb.checked) {
            cb.nextElementSibling.classList.add('line-through', 'text-gray-400');
        } else {
            cb.nextElementSibling.classList.remove('line-through', 'text-gray-400');
        }
    });
});