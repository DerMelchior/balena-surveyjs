/* private scripts */
function changeLocale() {
    survey.locale = document.getElementById('selLocales').value;
      if (!!window.survey) {
          survey.locale = document.getElementById('selLocales').value;
        }
    }
changeLocale();


/* scripts called after dom content loaded */
document.addEventListener("DOMContentLoaded", function() {
    var ostrale_survey_locale = "de";

    var btnDE1 = document.getElementById("Btn_DE1");
    var btnDE2 = document.getElementById("Btn_DE2");
    var btnEN1 = document.getElementById("Btn_EN1");
    var btnEN2 = document.getElementById("Btn_EN2");
    var SurveyModal = new bootstrap.Modal(document.getElementById("ModalSurveyContent"));

    SurveyModal.addEventListener("show.bs.modal", function(event){        
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        // Extract value from the custom data-* attribute
        var ostrale_survey_locale = button.getAttribute("data-language");
        // Change survey language
        //myModal.querySelector(".modal-title").innerText = titleData;
        survey.locale = language;
        console.log('language: '+language);
    });

    btnDE1.addEventListener("click", function() {SurveyModal.show(); });
    btnDE2.addEventListener("click", function() {SurveyModal.show(); });
    btnEN1.addEventListener("click", function() {SurveyModal.show(); });
    btnEN2.addEventListener("click", function() {SurveyModal.show(); });



    


});