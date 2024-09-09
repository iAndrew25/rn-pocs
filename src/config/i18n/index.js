import i18n from 'i18next';
import 'intl-pluralrules';
import {initReactI18next} from 'react-i18next';

import resources from './resources';

i18n.use(initReactI18next).init({
  // debug: true,
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
});

export default i18n;
