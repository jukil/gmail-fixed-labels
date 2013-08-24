function hashCheck() {
    if (/^#inbox\/.*/.test(location.hash)) {
        document.documentElement.classList.add('toggleClass');
    } else {
        document.documentElement.classList.remove('toggleClass');
    }
}
window.addEventListener('hashchange', hashCheck);
hashCheck();