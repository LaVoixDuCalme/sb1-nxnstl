import { Plane, Ship, Train, Car } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const transportCategories = [
  {
    icon: Plane,
    title: "Aérien",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    services: [
      "Air France - Vols directs depuis Paris",
      "Royal Air Maroc - Connexions via Casablanca",
      "Ethiopian Airlines - Connexions via Addis-Abeba",
      "Air Gabon Express - Vols intérieurs"
    ]
  },
  {
    icon: Ship,
    title: "Maritime et Fluvial",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166",
    services: [
      "Navettes maritimes vers les îles",
      "Transport fluvial sur l'Ogooué",
      "Croisières côtières",
      "Excursions en bateau dans les parcs nationaux"
    ]
  },
  {
    icon: Train,
    title: "Ferroviaire",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    services: [
      "Transgabonais Libreville-Franceville",
      "Train Express Owendo-Franceville",
      "Connexions régionales",
      "Transport de marchandises"
    ]
  },
  {
    icon: Car,
    title: "Terrestre",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    services: [
      "Location de 4x4 avec chauffeur",
      "Services de taxi à Libreville",
      "Bus intercités",
      "Excursions organisées en minibus"
    ]
  }
];

export default function Transport() {
  const { t } = useTranslation();

  return (
    <section id="transport" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Car className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('transport.title')}</h2>
          <p className="text-xl text-gray-600">{t('transport.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <category.icon className="h-12 w-12 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}