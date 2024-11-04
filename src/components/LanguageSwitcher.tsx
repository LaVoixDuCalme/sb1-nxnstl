import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'zh', name: '中文' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{languages.find(lang => lang.code === i18n.language)?.name || 'Français'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1" role="menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === lang.code ? 'text-emerald-600 bg-gray-50' : 'text-gray-700'
              } hover:bg-gray-50`}
              role="menuitem"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}