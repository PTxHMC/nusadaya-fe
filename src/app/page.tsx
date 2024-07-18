import Footer from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';
import LandingPage from '@/features/LandingPage';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <LandingPage />
      <Footer />
    </main>
  );
}
