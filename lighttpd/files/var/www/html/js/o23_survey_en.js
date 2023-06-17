const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log("DATA: "+JSON.stringify(sender.data, null, 3));
});

survey.supportedLocales = ["en", "de"];
survey.locale = "en";
survey.locales = ["de", "en"];
survey.defaultLocale = "de";
survey.currentLocale = "en";

$("#surveyElement").Survey({ model: survey}, {locale: "en"});