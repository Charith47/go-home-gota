import axios from "axios";
import { i18n } from "@/i18n";

const Translate = {
	get defaultLocale() {
		return process.env.VUE_APP_I18N_LOCALE;
	},
	get supportedLocales() {
		return process.env.VUE_APP_I18N_SUPPORTED_LOCALES.split(',');
	},
	get currentLocale() {
		return i18n.locale;
	},
	set currentLocale(locale) {
		i18n.locale = locale;
	},
	isLocaleSupported(locale) {
		return Translate.supportedLocales.includes(locale)
	},
	setI18nLocaleInServices(locale) {
		Translate.currentLocale = locale;
		axios.defaults.headers.common['Accept-Language'] = locale;
		window.localStorage.setItem('locale', locale);
		document.querySelector('html').setAttribute('lang', locale)
		return locale
	},
	loadLocaleFile(locale) {
		return import(`../locales/${locale}.json`)
	},
	routeMiddleware(to, from, next) {
		const locale = to.params.locale
		if (!Translate.isLocaleSupported(locale)) return next(`${Translate.getUserSupportedLocale()}/home`)
		if (to.name === undefined) return next(`${Translate.getUserSupportedLocale()}/home`)
		return Translate.changeLocale(locale).then(() => next())
	},
	i18nRoute(to) {
		return {
			...to,
			params: { locale: this.currentLocale, ...to.params }
		}
	},
	changeLocale(locale) {
		if (!Translate.isLocaleSupported(locale)) return Promise.reject(new Error('Locale not supported'));
		if (i18n.locale === locale) return Promise.resolve(locale);

		return Translate.loadLocaleFile(locale).then(messages => {
			i18n.setLocaleMessage(locale, messages.default || messages)
			return Translate.setI18nLocaleInServices(locale)
		})
	},
	getUserSupportedLocale() {
		const userPreferredLocale = Translate.getUserLocale();

		if (Translate.isLocaleSupported(userPreferredLocale.locale)) {
			return userPreferredLocale.locale;
		}

		if (Translate.isLocaleSupported(userPreferredLocale.localeNoISO)) {
			return userPreferredLocale.localeNoISO;
		}

		return Translate.defaultLocale;
	},
	getUserLocale() {
		const locale = window.navigator.language || window.navigator.userLanguage || Translate.defaultLocale;

		return {
			locale: locale,
			localeNoISO: locale.split('-')[0]
		}
	}
}




export { Translate }