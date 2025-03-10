$(document).ready(function(){

    (function($) {
        "use strict";

    // validate contactForm form
    $(function() {
        $('#attendanceForm').validate({
            rules: {
                firstGuestName: {
                    required: true,
                    minlength: 2
                },
                contact: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                firstGuestName: {
                    required: "Należy podać imię i nazwisko",
                    minlength: "Imię i nazwisko musi składać się z co najmniej 2 znaków"
                },
                contact: {
                    required: "Należy podać email lub numer telefonu",
                    minlength: "Kontakt musi składać się z co najmniej 2 znaków"
                }
            },
            submitHandler: function(form) {
                $('#attendanceForm :input[type="submit"]').prop('disabled', true);
                $('#rsvp-success').hide();
                $('#rsvp-error').hide();
                const formData = {
                    willAttend: $('#attendInput').prop('checked'),
                    firstGuestName: $('#firstGuestNameInput').val(),
                    secondGuestName: $('#secondGuestNameInput').val(),
                    contact: $('#contactInput').val(),
                    foodIntolerance: $('#foodIntoleranceInput').val(),
                    accommodation: $('#accommodationInput').val(),
                    transportDetails: $('#transportDetailsInput').val(),
                    additionalInfo: $('#additionalInfoInput').val(),

                };

                $.ajax({
                    type:"POST",
                    contentType: 'application/json',
                    data: JSON.stringify(formData),
                    url: import.meta.env.VITE_RSVP_FORM_URL,
                    // url:"http://localhost:8080/api/v1/attendance",
                    success: function() {
                        $('#attendInput').prop('checked', true).change()
                        $('#attendanceForm :input').val('');

                        $('#attendanceForm :input[type="submit"]').prop('disabled', false);
                        $('#rsvp-success').show();
                    },
                    error: function() {
                        $('#attendInput').prop('checked', true).change()
                        $('#attendanceForm :input').val('');

                        $('#attendanceForm :input[type="submit"]').prop('disabled', false);
                        $('#rsvp-error').show();
                    }
                })
            }
        })
    })
        
 })(jQuery)
})
