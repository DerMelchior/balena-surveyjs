const json = {
  "locale": "de",
  "title": {
   "default": "Survey for Ostrale Biennale 2023",
   "de": "Umfrage zur Ostrale Biennale 2023"
  },
  "logo": "./images/OSTRALE_Logo_de.jpg",
  "logoWidth": "400px",
  "logoPosition": "right",
  "focusFirstQuestionAutomatic": false,
  "pages": [
   {
    "name": "Seite 1",
    "elements": [
     {
      "type": "imagepicker",
      "name": "frage01",
      "minWidth": "200px",
      "indent": 1,
      "title": {
       "de": "Wo kommen Sie her?",
       "default": "Where do you come from?"
      },
      "hideNumber": true,
      "valueName": "frage01_wohnort",
      "isRequired": true,
      "choices": [
       {
        "value": "Dresden",
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8dad5557-a392-4951-9c12-06d36d60b84c"
       },
       {
        "value": "Sachsen",
        "text": {
         "de": "Sachsen",
         "default": "Saxony"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ac5651ae-ded5-4733-a95c-064daf437ef9"
       },
       {
        "value": "Deutschland",
        "text": {
         "de": "Deutschland",
         "default": "Germany"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8d5818bb-2cc5-4f58-9321-de3fa58e11c8"
       },
       {
        "value": "International",
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15ba335f-b555-48f0-af1d-85fcdea34bd3"
       }
      ],
      "choicesOrder": "desc",
      "colCount": 4,
      "minImageWidth": 60,
      "minImageHeight": 60,
      "maxImageWidth": 350,
      "maxImageHeight": 350,
      "showLabel": true
     },
     {
      "type": "imagepicker",
      "name": "frage02",
      "minWidth": "200px",
      "indent": 1,
      "title": {
       "de": "Wie haben Sie von unserer Ausstellung erfahren?",
       "default": "How did you hear about our exhibition?"
      },
      "hideNumber": true,
      "valueName": "frage02_werbung",
      "isRequired": true,
      "choices": [
       {
        "value": "Social Media",
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ec3abb88-e3f7-46f4-922f-61e6b471aa6a"
       },
       {
        "value": "Freunde und Familie",
        "text": {
         "de": "Freunde und Familie",
         "default": "Friends and family"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0bb96696-cef5-4b1d-b253-acab6ef14742"
       },
       {
        "value": "Außenwerbung",
        "text": {
         "de": "Außenwerbung",
         "default": "Outdoor advertising"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dfc3723a-b2b4-4813-9aa5-9c48a515ff67"
       },
       {
        "value": "Flyer",
        "text": {
         "de": "Flyer",
         "default": "Advertising flyer"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=1ed5e3f6-40da-4199-a369-ec74e1fb9ccd"
       },
       {
        "value": "Internet",
        "text": {
         "de": "Webseite",
         "default": "Website"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dc0b51bc-1373-418f-b66f-ce3196851575"
       },
       {
        "value": "Zeitungsannoncen",
        "text": {
         "de": "Zeitungsannoncen",
         "default": "Newspaper ads"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d587d7fb-7ab2-4e16-bb5b-0345d3933be2"
       },
       {
        "value": "Kulturkalender",
        "text": {
         "de": "Kulturkalender",
         "default": "Culture Calender"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=24dd4987-7031-450f-ac1f-bbf07e9ddcb2"
       },
       {
        "value": "Funk und Fernsehen",
        "text": {
         "de": "Funk und Fernsehen",
         "default": "TV and radio spots"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d52ec3ff-e04b-4204-81d6-9c6787bb4443"
       }
      ],
      "colCount": 4,
      "minImageWidth": 60,
      "minImageHeight": 60,
      "maxImageWidth": 350,
      "maxImageHeight": 350,
      "showLabel": true
     },
     {
      "type": "imagepicker",
      "name": "frage03",
      "minWidth": "200px",
      "indent": 1,
      "title": {
       "de": "Wie sind Sie zu unserer Ausstellung angereist?",
       "default": "How did you travel to our exhibition?"
      },
      "hideNumber": true,
      "valueName": "frage03_anreise",
      "isRequired": true,
      "choices": [
       {
        "value": "Zu Fuß / Fahrrad",
        "text": {
         "de": "Zu Fuß / Fahrrad",
         "default": "by foot or bike"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=606af8a3-5c5c-40a8-a0c0-598695ed0e0e"
       },
       {
        "value": "ÖPNV",
        "text": {
         "de": "ÖPNV",
         "default": "by public transportation"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e12a8ce9-abe7-43de-b657-9a1689f363da"
       },
       {
        "value": "Auto",
        "text": {
         "de": "Auto",
         "default": "by Car"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=317770f2-69a6-41ba-b901-a2408ddc9a22"
       },
       {
        "value": "Andere",
        "text": {
         "de": "Andere",
         "default": "by others"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=39311f01-b133-42cf-b90d-cc23da5e7b7b"
       }
      ],
      "colCount": 4,
      "minImageWidth": 60,
      "minImageHeight": 60,
      "maxImageWidth": 350,
      "maxImageHeight": 350,
      "showLabel": true
     },
     {
      "type": "imagepicker",
      "name": "frage04",
      "state": "expanded",
      "minWidth": "200px",
      "indent": 1,
      "title": {
       "de": "Was würden Sie bei unserem Catering bevorzugen?",
       "default": "What would you prefer for our catering?"
      },
      "titleLocation": "top",
      "hideNumber": true,
      "valueName": "frage04_catering",
      "isRequired": true,
      "choices": [
       {
        "value": "Bio + FairTrade",
        "text": {
         "de": "Organic + FairTrade products"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a079e272-7cf5-457a-8062-03c5d9f63bc7"
       },
       {
        "value": "Bio Produkte",
        "text": {
         "de": "Bio Produkte",
         "default": "Organic products"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7b6fabd8-da64-48b8-aaaf-e1b1bcd1391b"
       },
       {
        "value": "Lokale Produkte",
        "text": {
         "de": "Lokale Produkte",
         "default": "local manufactured products"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=31a982e8-2fe8-4e34-8949-a88cfd416042"
       },
       {
        "value": "unverpackte Produkte",
        "text": {
         "de": "unverpackte Produkte",
         "default": "unpackaged products"
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=04e6ae8f-eda1-404f-83d6-6cd2ac57000c"
       },
       {
        "value": "einfach nur Hunger",
        "text": {
         "de": "einfach nur Hunger!",
         "default": "I'm to hungry to know ..."
        },
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=776c74bd-6270-4857-80af-58a03a6b5f54"
       }
      ],
      "choicesOrder": "desc",
      "colCount": 4,
      "minImageWidth": 60,
      "minImageHeight": 60,
      "maxImageWidth": 350,
      "maxImageHeight": 350,
      "showLabel": true,
      "multiSelect": true
     }
    ],
    "questionTitleLocation": "top",
    "navigationButtonsVisibility": "show",
    "maxTimeToFinish": 180
   }
  ],
  "triggers": [
   {
    "type": "runexpression"
   }
  ],
  "sendResultOnPageNext": true,
  "showTitle": false,
  "showPageTitles": false,
  "navigateToUrl": "https://07a2b28cffdec25ae447c46c7c91ec6e.balena-devices.com/",
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom",
  "goNextPageAutomatic": true,
  "allowResizeComment": false,
  "questionsOnPageMode": "questionPerPage",
  "maxTimeToFinish": 190,
  "maxTimeToFinishPage": 190,
  "widthMode": "responsive",
  "width": "100%"
 }