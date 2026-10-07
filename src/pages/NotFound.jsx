import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-gutter py-space-xl text-center flex flex-col gap-space-md items-center">
      <span className="font-label-technical text-label-technical text-primary uppercase tracking-widest">
        Error 404
      </span>
      <h1 className="font-display text-display text-on-surface tracking-tight">
        Página no encontrada
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
        La página que buscás no existe o fue movida. Probá con alguna de estas.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-md">
        <Link
          to="/"
          className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-colors font-label-technical text-label-technical uppercase tracking-wider"
        >
          <Icon name="home" className="text-base" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-technical text-label-technical uppercase tracking-wider border border-outline-variant/40"
        >
          <Icon name="article" className="text-base" />
          <span>Leer el blog</span>
        </Link>
      </div>
    </div>
  );
}