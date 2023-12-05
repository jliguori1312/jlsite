$(document).ready(function () {
	//$("#resultText").hide();
	
  $("form").submit(function (event) {
    var formData = {
      name: $("#Name-4").val(),
      email: $("#Email-8").val(),
      message: $("#field-4").val(),
    };

    $.ajax({
      method: "POST",
      url: "https://formspree.io/f/mjvqnbre",
      data: formData,
      dataType: "json",
      Headers: {"Accept": "application/json"},
      encode: true,
    }).done(function (response) {
		
		if (response.ok) {		
			$("#form-done").css("display", "block");
		}else{
			$("#form-fail").css("display", "block");
		}
    });
    event.preventDefault();
  });

   // event.preventDefault();
});
