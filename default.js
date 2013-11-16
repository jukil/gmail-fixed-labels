(function(){

    function hashCheck() {
        if (/^#inbox\/.*/.test(location.hash)) {
            document.documentElement.classList.add('toggleClassaeH');
        } else {
            document.documentElement.classList.remove('toggleClassaeH');
        }
        if (/^#all\/.*/.test(location.hash)) {
            document.documentElement.classList.add('toggleClassiH');
        } else {
            document.documentElement.classList.remove('toggleClassiH');
        }
        if (/^#search\/.*/.test(location.hash)) {
            document.documentElement.classList.add('toggleClassaeH');
        } else {
            document.documentElement.classList.remove('toggleClassaeH');
        }
        if (/^#sent\/.*/.test(location.hash)) {
            document.documentElement.classList.add('toggleClassiH');
        } else {
            document.documentElement.classList.remove('toggleClassiH');
        }
    };

    window.addEventListener('hashchange', hashCheck);
    hashCheck();

    var fixedLabels = function() {

        var $mailContainer,
            currentTopPosition = 0,
            lastTopPosition = 1;

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
            if(currentTopPosition!== lastTopPosition) {
                lastTopPosition = currentTopPosition;

                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = 'body .ha { top: ' + currentTopPosition + 'px ; }';
                document.getElementsByTagName('head')[0].appendChild(style);
            }

        };

        var init = function() {

            // get the main gmail container
            $mailContainer = document.querySelector('.nH .nn');

            // reposition the widget when the page resizes
            window.addEventListener('resize', position);

            // check top position every 5 seconds
            // set position when the view type (compact, cozy, etc.) changes
            setInterval(position, 5000);

        };

        return {
            init: init
        }

    }();

    // wait for the Gmail ui to load
    // http://anurag-maher.blogspot.ro/2012/12/developing-google-chrome-extension-for.html
    (function () {
        var head;
        var max_retry = 200;

        // Check if Gmail UI frame is ready
        function isGmailUIFrame(doc) {
            try {
                return document.getElementsByClassName('aic').length > 0;
            } catch (e) {
                return false;
            }
        }

        // Loop to check if the Gmail UI is loaded
        var waitForGmailToLoad = function() {
            var top_frame, canvas_frame;
            try {
                top_frame = window.top.document;
                if (top_frame.getElementById('canvas_frame')) {
                }
            } catch (e) {}
            top_frame = window.document;

            if(top_frame && isGmailUIFrame(top_frame))
            {
                head = top_frame;

                // Gmail UI is loaded
                fixedLabels.init();

                return head;
            }
            else{
                max_retry = max_retry -1;
                if(max_retry > 0)
                    window.setTimeout(waitForGmailToLoad, 500);
            }
            return (head !== undefined);
        };
        waitForGmailToLoad();
    }());


}());
