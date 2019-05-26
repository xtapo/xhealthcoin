(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
		enableAllSteps: true,
        labels: {
            previous : 'Prev',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
        titleTemplate : '<h3 class="title">#title#</h3>',
        onFinished: function (event, currentIndex)
        {
            var form = $('#signup-form');
			var url = form.attr('action');
		
			$.ajax({
				   type: "POST",
				   url: url,
				   data: form.serialize(), // serializes the form's elements.
				   success: function(data)
				   {
					   if(data === 'OK'){
						   alert('Success.');
						   window.location.replace('/buyingcoin');
					   }else{
					  	 alert(data); // show response from the php script.
					   }
				   }
				 });
        }
    });

    $('#boe').parent().append('<ul id="newboe" class="select-list" name="boe"></ul>');
    $('#boe option').each(function(){
        $('#newboe').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#boe').remove();
    $('#newboe').attr('id', 'boe');
    $('#boe li').first().addClass('init');
    $("#boe").on("click", ".init", function() {
        $(this).closest("#boe").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#boe").children('li:not(.init)');
    $("#boe").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#boe").children('.init').html($(this).html());
		$("#boe_val").val($(this).html());
		
        allOptions.toggle();
    });

   
    
    
})(jQuery);

function login(){
	
	$(".reg_p").hide();	
	$(".login").show();	
	$("#type").val('login');
}

function reg(){
	
	$(".reg_p").show();	
	$(".login").hide();	
	$("#type").val('reg');
}

