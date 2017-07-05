$(function() {
	window.addEventListener('message', function(event) {
        var item = event.data;

        if (item.command && item.command == 'activateLoading') {
    		$('html').remove();
        }
    }, false);
});