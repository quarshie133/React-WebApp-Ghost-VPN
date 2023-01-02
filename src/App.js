import "./App.css";
import Connected from "./components/pages/Connected";
import Connecting from "./components/pages/Connecting";
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
      <Connecting
        title="00:00:00"
        subtitle="Connecting..."
        kilpersec="00 kb/s"
        megpersec="00 mb/s"
      />
      <Connected
        title="00:00:01"
        subtitle="Connected"
        kilpersec="256 kb/s"
        megpersec="192 mb/s"
      />
    </div>
  );
}

export default App;
