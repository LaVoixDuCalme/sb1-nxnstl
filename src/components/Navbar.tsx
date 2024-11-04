import { Menu, X, Compass, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    {
      title: t('nav.home'),
      href: '#',
    },
    {
      title: t('nav.accommodation'),
      href: '#hebergement',
      submenu: [
        { title: 'Hôtels', href: '#hotels' },
        { title: 'Eco-lodges', href: '#eco-lodges' },
        { title: 'Restauration', href: '#restauration' },
      ],
    },
    {
      title: t('nav.transport'),
      href: '#transport',
      submenu: [
        { title: 'Aérien', href: '#aerien' },
        { title: 'Maritime et Fluvial', href: '#maritime' },
        { title: 'Ferroviaire', href: '#ferroviaire' },
        { title: 'Terrestre', href: '#terrestre' },
      ],
    },
    {
      title: t('nav.agencies'),
      href: '#agences',
      submenu: [
        { title: 'États-Unis', href: '#usa' },
        { title: 'Canada', href: '#canada' },
        { title: 'Amérique Latine', href: '#amerique-latine' },
        { title: 'Europe', href: '#europe' },
        { title: 'Asie', href: '#asie' },
        { title: 'Océanie', href: '#oceanie' },
        { title: 'Afrique', href: '#afrique' },
      ],
    },
    {
      title: t('nav.activities'),
      href: '#activites',
      submenu: [
        { title: 'Sportives', href: '#sportives' },
        { title: 'Culturelles', href: '#culturelles' },
        { title: 'Bien-être', href: '#bien-etre' },
        { title: 'Manifestations', href: '#manifestations' },
      ],
    },
    {
      title: t('nav.contact'),
      href: '#contact',
    },
  ];

  const NavItem = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <a
          href={item.href}
          className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors px-3 py-2 text-sm font-medium"
        >
          {item.title}
          {item.submenu && (
            <ChevronDown className="ml-1 h-4 w-4" />
          )}
        </a>

        {item.submenu && isDropdownOpen && (
          <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu">
              {item.submenu.map((subItem) => (
                <a
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  role="menuitem"
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const MobileNavItem = ({ item }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    return (
      <div>
        <div className="flex items-center justify-between">
          <a
            href={item.href}
            className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
            onClick={() => !item.submenu && setIsOpen(false)}
          >
            {item.title}
          </a>
          {item.submenu && (
            <button
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-600"
            >
              <ChevronDown className={`h-4 w-4 transform transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

        {item.submenu && isSubmenuOpen && (
          <div className="pl-4 space-y-1">
            {item.submenu.map((subItem) => (
              <a
                key={subItem.href}
                href={subItem.href}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">Gabon Voyages</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-2">
            {menuItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
            <LanguageSwitcher />
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {menuItems.map((item) => (
              <MobileNavItem key={item.href} item={item} />
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}