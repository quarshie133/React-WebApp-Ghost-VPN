import "./App.css";
import Disconnected from "./components/pages/Disconnected";
import Onboarding from "./components/pages/Onboarding";

function App() {
  return (
    <div>
      <Onboarding />
      <Disconnected 
      title="00:00:00"
      subtitle="Disconnected"
      kilpersec="00 kb/s"
      megpersec="00 mb/s"
      />
    </div>
  );
}

export default App;
