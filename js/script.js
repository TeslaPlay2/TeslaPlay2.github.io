$(function(){
	$('#datepicker').datepicker({
		dateFormat: "yy-mm-dd",
		changeMonth: true,
		changeYear: true,
		buttonImage: "../img/ic_date_range.png",
		buttonImageOnly: true,
		minDate: 0,
		maxDate: "+1M +5D"
	});
});

	$(function(){
		var from = $ ('#fromDate')
		.datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
		})	
		.on( 'change', function() {
			to.datepicker('option','minDate', getDate(this));
		}),
		to = $('#toDate').datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true
		})
		.on('change', function(){
			from.dateFormat('option','minDate', getDate(this));
		});

		function getDate (element) {
			var	date;
			var dateFormat = "yy-mm-dd";
			try {
				date = $.datepicker.parseDate(dateFormat, element.value);
			} catch(error) {
				date = null;
			}
			return date;
		}
	});