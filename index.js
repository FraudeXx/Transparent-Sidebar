import './theme.css';

// Gözlemci: Her DOM değişiminde sidebar'ı tekrar transparan yap
const observer = new MutationObserver(() => {
  const sidebar = document.querySelector('.rcp-fe-viewport-sidebar');
  if (sidebar) {
    sidebar.style.background = 'transparent';
    sidebar.style.backdropFilter = 'none';
  }
});

window.addEventListener('load', () => {
  const target = document.body;
  observer.observe(target, { childList: true, subtree: true });
});