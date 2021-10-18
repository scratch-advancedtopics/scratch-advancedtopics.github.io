if (matchMedia('prefers-color-scheme: dark') && localStorage.getItem('theme') != 'light') {
  setTheme('dark');
}

document.getElementById('themeSwitcher').addEventListener('click', (e) => {
  e.preventDefault()
  if (!localStorage.getItem('theme')) {
    console.log('previously unset theme')
    if (matchMedia('prefers-color-scheme: dark')) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  } else {
    if (localStorage.getItem('theme') == 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }
});

function setTheme(theme) {
  if (theme == 'dark') {
    document.getElementsByTagName('html')[0].classList.add('dark');
  } else {
    document.getElementsByTagName('html')[0].classList.remove('dark');
  }
}