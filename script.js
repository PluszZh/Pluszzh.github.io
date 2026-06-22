const root = document.documentElement;
const button = document.getElementById('lang-toggle');
const year = document.getElementById('year');

function setLanguage(lang) {
  root.dataset.lang = lang;
  root.lang = lang === 'en' ? 'en' : 'zh-CN';
  button.textContent = lang === 'en' ? '中文' : 'EN';
  button.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
  localStorage.setItem('pluszzh-language', lang);
}

button.addEventListener('click', () => {
  setLanguage(root.dataset.lang === 'en' ? 'zh' : 'en');
});

year.textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('pluszzh-language') || 'zh');
