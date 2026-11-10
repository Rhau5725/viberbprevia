const filters = document.querySelectorAll('.filter-chip');
const products = document.querySelectorAll('.product-card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    products.forEach((product) => {
      product.classList.toggle('hidden', selected !== 'todos' && product.dataset.category !== selected);
    });
  });
});

const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('#modal-title');
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ''; };
document.querySelectorAll('[data-product]').forEach((button) => {
  button.addEventListener('click', () => {
    modalTitle.textContent = button.dataset.product;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
