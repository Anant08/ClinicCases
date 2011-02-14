


$(document).ready(function(){
		
		$.idleTimeout('#idletimeout', '#idletimeout a', {
				idleAfter: 1200, //20 minutes
				pollingInterval: 60,
				keepAliveURL: 'lib/php/auth/keep_alive.php',
				serverResponseEquals: 'OK',
				onTimeout: function(){
					$(this).slideUp();
					window.location = "html/templates/Logout.php";
					},
						onIdle: function(){
						$(this).slideDown(); // show the warning bar
									},
						onCountdown: function( counter ){
						$(this).find("span").html( counter ); // update the counter
							},
						onResume: function(){
						$(this).slideUp(); // hide the warning bar
						}
				});

		$('#table_cases').dataTable( {
			"bProcessing": true,
			"bScrollInfinite": true,
			"bScrollCollapse": true,
			"sScrollY": "400px",
			"iDisplayLength": 50,
			"aaSorting": [[ 2, "asc" ]],
			"aoColumns": [
			{ "bSearchable": false, "bVisible":    false },
			null,
			null,
			null,
			null,
			null,
			null,
			null
			],
			"sDom": 'RTfilrtp',
			"oTableTools": {
						"sSwfPath": "lib/DataTables-1.7.5/extras/TableTools-2.0.0/media/swf/copy_cvs_xls_pdf.swf"
					},
			"sAjaxSource": 'lib/php/data/cases_load.php'
		} );
		
			
	})

