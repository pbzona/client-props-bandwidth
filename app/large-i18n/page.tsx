import DataDisplay from '@/components/DataDisplay';
import Link from 'next/link';

function generateLargeI18nObject() {
  const languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ru', 'zh', 'ja'];
  const keys = [
    'greeting',
    'welcome',
    'about',
    'contact',
    'login',
    'signup',
    'footer',
    'home',
    'products',
    'services',
    'blog',
    'faq',
    'terms',
    'privacy',
    'search',
    'categories',
    'profile',
    'settings',
    'notifications',
    'messages',
    'checkout',
    'payment',
    'shipping',
    'returns',
    'support',
    'feedback',
    'newsletter',
    'social_media',
    'share',
    'like',
    'comment',
    'follow',
    'trending',
    'popular',
    'new_arrivals',
    'sale',
    'discount',
    'promo_code',
    'wishlist',
    'compare',
    'reviews',
    'ratings',
    'specifications',
    'details',
    'add_to_cart',
    'buy_now',
    'continue_shopping',
    'apply',
    'cancel',
    'save',
  ];

  const translations: Record<string, Record<string, string>> = {};

  languages.forEach(lang => {
    translations[lang] = {};
    keys.forEach(key => {
      translations[lang][key] = `${lang.toUpperCase()} translation for ${key}`;
    });
  });

  return translations;
}

export default function LargeI18nPage() {
  const largeI18nObject = generateLargeI18nObject();

  const unusedProps = [
    'home',
    'products',
    'services',
    'blog',
    'faq',
    'terms',
    'privacy',
    'search',
    'categories',
    'profile',
    'settings',
    'notifications',
    'messages',
    'checkout',
    'payment',
    'shipping',
    'returns',
    'support',
    'feedback',
    'newsletter',
    'social_media',
    'share',
    'like',
    'comment',
    'follow',
    'trending',
    'popular',
    'new_arrivals',
    'sale',
    'discount',
    'promo_code',
    'wishlist',
    'compare',
    'reviews',
    'ratings',
    'specifications',
    'details',
    'add_to_cart',
    'buy_now',
    'continue_shopping',
    'apply',
    'cancel',
    'save',
  ];

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Large I18n Object Transfer</h1>
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">This is an example of inefficient i18n data transfer.</p>
        <p>
          This page demonstrates a large i18n object transfer where more translations than necessary
          are passed to the client component. The object contains translations for many languages
          and keys that are not used in rendering (highlighted in red), which increases the amount
          of data transferred unnecessarily.
        </p>
        <p className="mt-2">
          <strong>How this can happen:</strong> Developers might include all available translations
          for all pages in a single object, or might not remove unused translations when refactoring
          or removing features.
        </p>
        <p className="mt-2">
          <strong>How to avoid:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Only pass translations for the current language or a small set of languages</li>
          <li>Split translations into smaller chunks based on pages or components</li>
          <li>Implement lazy loading for additional languages or translations</li>
          <li>
            Use a translation management system that allows for selective loading of translations
          </li>
        </ul>
      </div>
      <div className="border p-4 rounded mt-4">
        <DataDisplay
          data={largeI18nObject}
          objectType="Large"
          unusedProps={unusedProps}
        />
      </div>
    </main>
  );
}
