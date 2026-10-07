import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="bg-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full pt-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
}