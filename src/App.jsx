import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/video" element={<VideoPage />} />
    </Routes>
  );
}

export default App;
