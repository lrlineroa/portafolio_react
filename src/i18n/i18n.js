import I18n from "i18n-js";
import { LOCALES } from "../Constants/index";

//default locale
I18n.defaultLocale = LOCALES.ENGLISH.name;

// Enable fallbacks  to `en`
I18n.fallbacks = true;

//current locale
I18n.locale = LOCALES.ESPAÑOL.name;

I18n.translations = {
	en: require("./languages/english.json"),
	es: require("./languages/español.json"),
	de: require("./languages/german.json"),
};

let languageCode = I18n.locale.substr(0, 2)

//All other translations for the app goes to the respective language file:
switch (languageCode) {
	case 'es':
		I18n.translations.es = require('./languages/español.json')
		break
}
