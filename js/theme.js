// ===== Theme Manager =====
const ThemeManager = {
  current: localStorage.getItem('PPAland_theme') || 'dark',

  apply() {
    if (this.current === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.theme === this.current) btn.classList.add('active');
    });
  },

  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('PPAland_theme', this.current);
    this.apply();
  },

  init() {
    this.apply();
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  }
};

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  if (typeof LangManager !== 'undefined') LangManager.init();
});
