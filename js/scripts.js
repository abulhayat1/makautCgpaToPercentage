jQuery(document).ready(function() {
	jQuery('.button a').click(function() {
		var gpa = jQuery('#dgpa').val();
		gpa = parseFloat(gpa).
		gpa = calculate(gpa);
		jQuery('.output label').text(gpa);
		jQuery('.output').show();
	});

});

const calculate = gpa => {
	if(!gpa) return "Please Input Your Cgpa";
	if(gpa > 10){
		return "CGPA CAN NOT BE GREATER THAN 10 😢";
	}else{
		return parseFloat(gpa - 0.75) * 10;
	}
}

