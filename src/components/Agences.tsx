import React from 'react';
import { Building2, MapPin, Calendar, Clock, Star } from 'lucide-react';

const circuits = [
  {
    region: "États-Unis",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    departs: [
      {
        city: "New York",
        packages: [
          {
            name: "Découverte Complète du Gabon",
            duration: "15 jours",
            price: "À partir de $4,500",
            highlights: [
              "Parc National de la Lopé (UNESCO)",
              "Plages de Pongara",
              "Libreville culturelle",
              "Observation des gorilles"
            ],
            rating: 5,
            nextDeparture: "15 Juin 2024"
          },
          {
            name: "Safari & Plage Premium",
            duration: "10 jours",
            price: "À partir de $3,800",
            highlights: [
              "Safari photo à Ivindo",
              "Détente à Port-Gentil",
              "Observation des baleines",
              "Village traditionnel"
            ],
            rating: 4,
            nextDeparture: "22 Juillet 2024"
          }
        ]
      }
    ]
  },
  {
    region: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    departs: [
      {
        city: "Paris",
        packages: [
          {
            name: "Gabon Authentique",
            duration: "12 jours",
            price: "À partir de 3.500€",
            highlights: [
              "Parc National d'Akanda",
              "Marché artisanal de Libreville",
              "Traditions Bwiti",
              "Îles Corisco"
            ],
            rating: 5,
            nextDeparture: "10 Août 2024"
          },
          {
            name: "Écotourisme & Culture",
            duration: "14 jours",
            price: "À partir de 3.900€",
            highlights: [
              "Parc de Moukalaba-Doudou",
              "Mangroves de Port-Gentil",
              "Cérémonies traditionnelles",
              "Artisanat local"
            ],
            rating: 4,
            nextDeparture: "5 Septembre 2024"
          }
        ]
      }
    ]
  },
  {
    region: "Asie",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    departs: [
      {
        city: "Tokyo",
        packages: [
          {
            name: "Trésors Naturels du Gabon",
            duration: "16 jours",
            price: "À partir de ¥480,000",
            highlights: [
              "Plateaux Batéké",
              "Chutes de Kongou",
              "Observation des éléphants",
              "Plages sauvages"
            ],
            rating: 5,
            nextDeparture: "12 Octobre 2024"
          }
        ]
      }
    ]
  },
  {
    region: "Océanie",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    departs: [
      {
        city: "Sydney",
        packages: [
          {
            name: "Aventure Gabonaise",
            duration: "18 jours",
            price: "À partir de $5,200 AUD",
            highlights: [
              "Parc des Monts de Cristal",
              "Réserve de la Mondah",
              "Culture forestière",
              "Sports nautiques"
            ],
            rating: 4,
            nextDeparture: "20 Juillet 2024"
          }
        ]
      }
    ]
  },
  {
    region: "Amérique Latine",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    departs: [
      {
        city: "São Paulo",
        packages: [
          {
            name: "Expérience Afro-Latine",
            duration: "13 jours",
            price: "À partir de R$19.900",
            highlights: [
              "Festival culturel",
              "Parc de Minkébé",
              "Gastronomie locale",
              "Artisanat traditionnel"
            ],
            rating: 4,
            nextDeparture: "15 Août 2024"
          }
        ]
      }
    ]
  },
  {
    region: "Afrique",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
    departs: [
      {
        city: "Casablanca",
        packages: [
          {
            name: "Connexion Africaine",
            duration: "11 jours",
            price: "À partir de 3.200 MAD",
            highlights: [
              "Parc de Mayumba",
              "Villages côtiers",
              "Pêche traditionnelle",
              "Marchés locaux"
            ],
            rating: 5,
            nextDeparture: "1 Septembre 2024"
          }
        ]
      }
    ]
  }
];

export default function Agences() {
  return (
    <section id="agences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Building2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Circuits Internationaux</h2>
          <p className="text-xl text-gray-600">Découvrez nos circuits au départ de votre région</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {circuits.map((region) => (
            <div key={region.region} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img src={region.image} alt={region.region} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{region.region}</h3>
                  </div>
                </div>
              </div>
              
              {region.departs.map((depart) => (
                <div key={depart.city} className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-lg font-semibold text-gray-900">Au départ de {depart.city}</span>
                  </div>
                  
                  <div className="space-y-6">
                    {depart.packages.map((pack) => (
                      <div key={pack.name} className="border-l-4 border-emerald-600 pl-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{pack.name}</h4>
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {pack.duration}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {pack.nextDeparture}
                          </div>
                          <div className="flex items-center">
                            {[...Array(pack.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <ul className="mb-3 space-y-1">
                          {pack.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-semibold text-emerald-600">{pack.price}</span>
                          <button className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
                            Réserver
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}