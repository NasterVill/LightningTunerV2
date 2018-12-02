import I18n from 'react-native-i18n';
import en from './locales/en';
import de from './locales/de';
import ru from './locales/ru';
import es from './locales/es';

I18n.fallbacks = true;

I18n.translations = {
    en,
    de,
    ru,
    es
};

export default I18n;