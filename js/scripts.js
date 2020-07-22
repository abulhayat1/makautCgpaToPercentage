jQuery(document).ready(function() {
	jQuery('.button a').click(function() {
		var gpa = jQuery('#dgpa').val();
		var gpa = parseFloat(gpa - 0.75) * 10;
		jQuery('.output label').text(gpa);
		jQuery('.output').show();
	});

});

