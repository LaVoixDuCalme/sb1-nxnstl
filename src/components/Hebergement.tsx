import { Hotel, Tent, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const categories = [
  {
    icon: Hotel,
    title: "Hôtels",
    items: [
      {
        name: "Le Méridien Re-Ndama",
        location: "Libreville",
        rating: 5,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        description: "Hôtel de luxe au cœur de Libreville avec vue sur l'océan"
      },
      {
        name: "Radisson Blu Okoume Palace",
        location: "Libreville",
        rating: 5,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        description: "Excellence hôtelière avec services premium"
      }
    ]
  },
  {
    icon: Tent,
    title: "Eco-lodges",
    items: [
      {
        name: "Pongara Lodge",
        location: "Parc National de Pongara",
        rating: 4,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        description: "Éco-lodge au sein du parc national, expérience authentique"
      },
      {
        name: "Lope Hotel",
        location: "Parc National de la Lopé",
        rating: 4,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        description: "Vue imprenable sur la savane et la forêt tropicale"
      }
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration",
    items: [
      {
        name: "Le Marseillais",
        location: "Libreville",
        rating: 4,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        description: "Cuisine française raffinée et fruits de mer"
      },
      {
        name: "Chez Tantine",
        location: "Port-Gentil",
        rating: 4,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        description: "Spécialités gabonaises traditionnelles"
      }
    ]
  }
];

export default function Hebergement() {
  const { t } = useTranslation();

  return (
    <section id="hebergement" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Hotel className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('accommodation.title')}</h2>
          <p className="text-xl text-gray-600">{t('accommodation.subtitle')}</p>
        </div>

        {categories.map((category) => (
          <div key={category.title} className="mb-16">
            <div className="flex items-center mb-8">
              <category.icon className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                      <div className="flex">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{item.location}</p>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
                      {t('accommodation.book')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}