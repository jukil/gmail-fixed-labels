function hashCheck() {
    if (/^#inbox\/.*/.test(location.hash)) {
        document.documentElement.classList.add('toggleClassaeH');
    } else {
        document.documentElement.classList.remove('toggleClassaeH');
    }
    if (/^#search\/.*/.test(location.hash)) {
        document.documentElement.classList.add('toggleClassiH');
    } else {
        document.documentElement.classList.remove('toggleClassiH');
    }
}
window.addEventListener('hashchange', hashCheck);
hashCheck();