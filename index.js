import './theme.css';

// Observer: Make the sidebar transparent again on every DOM change
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
