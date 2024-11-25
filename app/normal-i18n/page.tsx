import DataDisplay from '@/components/DataDisplay';
import Link from 'next/link';

function generateNormalI18nObject() {
  return {
    en: {
      greeting: 'Hello',
      welcome: 'Welcome to our site',
      about: 'About Us',
      contact: 'Contact',
      login: 'Log In',
      signup: 'Sign Up',
      footer: 'All rights reserved',
    },
    es: {
      greeting: 'Hola',
      welcome: 'Bienvenido a nuestro sitio',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      footer: 'Todos los derechos reservados',
    },
    fr: {
      greeting: 'Bonjour',
      welcome: 'Bienvenue sur notre site',
      about: 'À Propos',
      contact: 'Contact',
      login: 'Se Connecter',
      signup: "S'inscrire",
      footer: 'Tous droits réservés',
    },
  };
}

export default function NormalI18nPage() {
  const normalI18nObject = generateNormalI18nObject();

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Normal I18n Object Transfer</h1>
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div
        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">This is a good example of i18n data transfer.</p>
        <p>
          This page demonstrates a normal i18n object transfer where only the necessary translations
          are passed to the client component. The object contains a reasonable number of languages
          and translation keys, which helps to minimize the amount of data transferred while still
          providing multi-language support.
        </p>
      </div>
      <div className="border p-4 rounded mt-4">
        <DataDisplay
          data={normalI18nObject}
          objectType="Normal"
        />
      </div>
    </main>
  );
}
