import "./i18n";

import React, { useState, useEffect } from "react";
import I18n from "i18n-js";
import useStorage from "../Services/SessionStorage";
import { LOCALES } from "../Constants";
import translateOrFallback from "./TranslateFallback";
import { getObjectById } from "../utils";

const LocaleContext = React.createContext();

export const LocaleContextProvider = props => {
	const userLang = navigator.language || navigator.userLanguage;
	// const languageCode=userLang.substr(0, 2);
	const initialLanguage= LOCALES.ENGLISH;
	const [locale, changeLocale] = useStorage("@language", initialLanguage);
	I18n.locale = locale.name;

	const _changeLocale = locale => {
		I18n.locale = locale.name;
		changeLocale(locale);
	};

	return (
		<LocaleContext.Provider
			value={{
				...I18n,
				localeProvider: locale,
				t: translateOrFallback,
				changeLocale: _changeLocale
			}}
		>
			{props.children}
		</LocaleContext.Provider>
	);
};

export default LocaleContext;
