/* import { surveyLocalization } from 'survey-core'; */

const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log("DATA: "+JSON.stringify(sender.data, null, 3));
});
survey.supportedLocales = ["en", "de"];

/*survey.locale = "de";*/

survey.defaultLocale = "en";
/*
survey.currentLocale = "en";
*/
/*
ko.applyBindings({
    model: survey
}, document.getElementById("surveyElement_de"));
*/
 
/*
$("#surveyElement_de").PopupSurvey({ model: survey_de, isExpanded: true });
*/
$("#surveyElement").Survey({ model: survey, locale: "en" });