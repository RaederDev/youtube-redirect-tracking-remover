(function () {

    var setLinkListeners = function () {

        //get tracking links
        var nodes = document.getElementsByClassName("yt-uix-redirect-link");
        var links = Array.prototype.slice.call(nodes, 0);

        //now attach event listener to prevent YouTube from
        //hijacking clicks on the links
        links.forEach(function (node) {
            node.addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                window.open(node.href, '_blank');
            });
        });

    };

    //YouTube has AJAX support so we have to listen when the dom changes
    document
        .getElementById('page')
        .addEventListener('DOMNodeInserted', function (ev) {
            if (ev.target.id === 'watch7-main-container') {
                setLinkListeners();
            }
        });

    //we have to check when the page is loaded the first time
    setLinkListeners();

})();