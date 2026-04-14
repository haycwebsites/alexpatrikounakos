import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HaycProvider } from './hayc/config-context';
import ScrollToTop from './components/ScrollToTop';
import IndexPage from './pages/IndexPage';
import ReikiSessionsPage from './pages/ReikiSessionsPage';
import SelfAwarenessSessionsPage from './pages/SelfAwarenessSessionsPage';
import CacaoCeremonyPage from './pages/CacaoCeremonyPage';
import DanceWithYourHeartPage from './pages/DanceWithYourHeartPage';
import GroupMeditationPage from './pages/GroupMeditationPage';
import SeminarsPage from './pages/SeminarsPage';
import EventsPage from './pages/EventsPage';
import {
  reikiSessionsPath,
  selfAwarenessSessionsPath,
  cacaoCeremonyPath,
  danceWithYourHeartPath,
  groupMeditationPath,
  seminarsPath,
} from './routes';
// HAYC Pipeline: Additional page imports are added
// here automatically during project creation.

function AosManager() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <HaycProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AosManager />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path={reikiSessionsPath} element={<ReikiSessionsPage />} />
          <Route
            path={selfAwarenessSessionsPath}
            element={<SelfAwarenessSessionsPage />}
          />
          <Route path={cacaoCeremonyPath} element={<CacaoCeremonyPage />} />
          <Route path={danceWithYourHeartPath} element={<DanceWithYourHeartPage />} />
          <Route path={groupMeditationPath} element={<GroupMeditationPage />} />
          <Route path={seminarsPath} element={<SeminarsPage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* HAYC Pipeline: Additional routes are
              added here during project creation. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HaycProvider>
  );
}

export default App;
