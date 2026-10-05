import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El sitio se sirve desde la raíz del dominio (lcacciatore.com) en Vercel.
// En public/ viven los dos sitios que NO se procesan con React y Vite copia
// tal cual a dist/:
//   public/blog/        -> https://lcacciatore.com/blog/
//   public/consultoria/ -> https://lcacciatore.com/consultoria/
//   public/img/         -> https://lcacciatore.com/img/  (assets compartidos)
export default defineConfig({
  plugins: [react()],
  base: '/',
});
