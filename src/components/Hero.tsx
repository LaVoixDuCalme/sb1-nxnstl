import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53"
            alt="Gabon Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              {t('hero.cta')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#hebergement"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Découvrir
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Climat Tropical</h3>
              <p className="text-sm text-gray-600">Température moyenne de 26°C</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">13 Parcs Nationaux</h3>
              <p className="text-sm text-gray-600">Une biodiversité exceptionnelle</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">885 km de Côtes</h3>
              <p className="text-sm text-gray-600">Plages paradisiaques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}