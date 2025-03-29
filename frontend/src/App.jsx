import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./pages/Authentication";
import LandingPages from "./pages/LandingPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoMeetComponent from "./pages/VideoMeet"
import HomeComponent from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPages />} />            
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/history" element={<History />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/:url" element={<VideoMeetComponent/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
