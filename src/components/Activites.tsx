import React from 'react';
import { Activity, Music, Heart, Calendar } from 'lucide-react';

const categories = [
  {
    icon: Activity,
    title: "Sportives",
    activities: [
      {
        name: "Safari Photo",
        description: "Observation de la faune dans les parcs nationaux",
        duration: "1-3 jours",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
      },
      {
        name: "Randonnée",
        description: "Exploration des sentiers forestiers",
        duration: "4-8 heures",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306"
      }
    ]
  },
  {
    icon: Music,
    title: "Culturelles",
    activities: [
      {
        name: "Visite des Villages",
        description: "Découverte des traditions locales",
        duration: "1 jour",
        image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21"
      },
      {
        name: "Musée National",
        description: "Histoire et art du Gabon",
        duration: "2-3 heures",
        image: "https://images.unsplash.com/photo-1566127992631-137a642a90f4"
      }
    ]
  },
  {
    icon: Heart,
    title: "Bien-être",
    activities: [
      {
        name: "Spa Tropical",
        description: "Soins et massages traditionnels",
        duration: "2-4 heures",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
      },
      {
        name: "Yoga en Nature",
        description: "Sessions en plein air",
        duration: "1-2 heures",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
      }
    ]
  },
  {
    icon: Calendar,
    title: "Manifestations",
    activities: [
      {
        name: "Festival de Musique",
        description: "Célébration de la musique gabonaise",
        duration: "3 jours",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
      },
      {
        name: "Fête de l'Indépendance",
        description: "Célébrations nationales",
        duration: "1 jour",
        image: "https://images.unsplash.com/photo-1533230387233-b4dc0cd05c38"
      }
    ]
  }
];

export default function Activites() {
  return (
    <section id="activites" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Activity className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Activités</h2>
          <p className="text-xl text-gray-600">Découvrez nos expériences uniques</p>
        </div>

        {categories.map((category) => (
          <div key={category.title} className="mb-16">
            <div className="flex items-center mb-8">
              <category.icon className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.activities.map((activity) => (
                <div key={activity.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h4>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-600">{activity.duration}</span>
                      <button className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors">
                        Réserver
                      </button>
                    </div>
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