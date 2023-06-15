const survey = new Survey.Model(json_de);
survey.StylesManager.applyTheme("bootstrap");
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElement_de").Survey({ model: survey });