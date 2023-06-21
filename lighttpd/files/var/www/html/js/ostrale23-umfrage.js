const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log("DATA: "+JSON.stringify(sender.data, null, 3));
});
survey.onStarted.add(() => {
    survey.showNavigationButtons = false;
});

survey.supportedLocales = ["en", "de"];
survey.defaultLocale = "en";

/*
survey.locale = "de";
survey.currentLocale = "en";
*/


 
/*
$("#surveyElement").PopupSurvey({ model: survey, isExpanded: true });
*/
$("#surveyElement").Survey({ model: survey, locale: "de" });