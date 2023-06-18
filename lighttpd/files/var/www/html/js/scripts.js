/* private scripts */
function changeLocale() {
    survey.locale = document.getElementById('selLocales').value;
      if (!!window.survey) {
          survey.locale = document.getElementById('selLocales').value;
        }
    }
changeLocale();