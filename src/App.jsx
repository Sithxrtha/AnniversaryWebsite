import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import MessagePage from "./pages/MessagePage/MessagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/message" element={<MessagePage />} />
    </Routes>
  );
}

export default App;
