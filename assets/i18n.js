import I18n from 'react-native-i18n';
import english from './i18n/en';
import deutsch from './i18n/de';
import albanian from './i18n/al';

I18n.fallbacks = true;

I18n.translations = {
  en: english,
  de: deutsch,
  al: albanian,
};

export const changeLanguage = languageKey => {
  console.log('i18-', languageKey);
  I18n.locale = languageKey;
};

export default I18n;
