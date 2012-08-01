//Scripts for Board

$(document).ready(function() {

	//Add new post button
    $('#board_nav button').button({icons: {primary: "fff-icon-add"},text: true})
		.click(function(event) {
			event.preventDefault();

			//Show hidden new post div
			$('div.new_post').show().animate({'width':'900','height':'500'});

			//Get the id of this post from server
			$.post('lib/php/data/board_process.php',{'action':'new'},function(data){
				var serverResponse = $.parseJSON(data);
				if (serverResponse.error === true)
					{
						notify(serverResponse.message,true);
					}
					else
					{
						$('div.new_post').attr('data-id',serverResponse.post_id);

						//handle attachment uploads
						var uploader = new qq.FileUploader({
							element: $('.board_upload')[0],
							action: 'lib/php/utilities/file_upload_board.php',
							params: {'post_id':serverResponse.post_id},
							template: '<div class="qq-uploader">' +
							'<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
							'<div class="qq-upload-button">Choose Files</div>' +
							'<ul class="qq-upload-list"></ul>' +
							'</div>'

						});
					}

			});

			//Create lwrte
            var arr = $('div.new_post').find('.post_edit').rte({
            css: ['lib/javascripts/lwrte/default2.css'],
            width: 900,
            height: 300,
            controls_rte: rte_toolbar
            });

            //Define post title
            $('input[name="post_title"]').focusin(function(event){
				event.stopPropagation();
				$(this).parent().unbind('click.sizePost');
				$(this).val('').css({'color':'black'});
            });

            //Add Chosen to select
            $('select[name="viewer_select"]').chosen();

            //Add post color chooser
            $('select[name="post_color"]').change(function(){
				var colorVal = 'rgba(' + $(this).val() + ',0.5)';
				$('div.rte-zone').css({'background-color': colorVal});

            });



    });

	$('#board_panel').load('lib/php/data/board_load.php',function(){


	});


	//Listeners
	$('.board_item').live('click.sizePost', function(){

		$(this).not('.new_post').animate({'width':'400','height':'300'},function(){
			$(this).css({'height':'auto','max-width':'400'});
			$('.board_item').not(this).animate({'width':'200','height':'200'});
		});
	});

});