import { BrowserRouter, Routes, Route, Navigate }
  from 'react-router-dom';
import { HaycProvider } from './hayc/config-context';
import ScrollToTop from './components/ScrollToTop';
import IndexPage from './pages/IndexPage';
import ReikiSessionsPage from './pages/ReikiSessionsPage';
import SelfAwarenessSessionsPage from './pages/SelfAwarenessSessionsPage';
import CacaoCeremonyPage from './pages/CacaoCeremonyPage';
import DanceWithYourHeartPage from './pages/DanceWithYourHeartPage';
import GroupMeditationPage from './pages/GroupMeditationPage';
import SeminarsPage from './pages/SeminarsPage';
import {
  reikiSessionsPath,
  selfAwarenessSessionsPath,
  cacaoCeremonyPath,
  danceWithYourHeartPath,
  groupMeditationPath,
  seminarsPath,
} from './config';
// HAYC Pipeline: Additional page imports are added
// here automatically during project creation.

function App() {
  return (
    <HaycProvider>
      <BrowserRouter>
        <ScrollToTop />
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
          {/* HAYC Pipeline: Additional routes are
              added here during project creation. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HaycProvider>
  );
}

export default App;
