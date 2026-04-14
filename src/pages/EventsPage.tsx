import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsIntroSection from '../sections/events/EventsIntroSection';
import EventsWorkshopsSection from '../sections/events/EventsWorkshopsSection';

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <EventsIntroSection />
        <EventsWorkshopsSection />
      </main>
      <Footer />
    </>
  );
}

