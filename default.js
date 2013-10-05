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

var position = function() {

        currentTopPosition = $mailContainer.offsetTop;

        /* In case we the usual container isn't there
         */
        if(currentTopPosition === 0) {
            var $gbox1 = document.getElementById('gbx1');

            /* Compatibility with Streak for Gmail, Chrome extension
             */
            var streakContainer = document.getElementsByClassName('pv_main_container')[0];
            if(streakContainer) {
                currentTopPosition = streakContainer.offsetTop;
            } else {
                currentTopPosition = $gbox1.offsetTop + $gbox1.clientHeight;
            }
        }

        // set the widget top to match the main container top
        if($tasksContainer && currentTopPosition!== lastTopPosition) {
            $tasksContainer.style.paddingTop = currentTopPosition + 'px';
            lastTopPosition = currentTopPosition;
        }

    };