import React, { useState, useEffect } from "react";
import "./App.css";
import AllServers from "./components/pages/AllServers";
import Connected from "./components/pages/Connected";
import Connecting from "./components/pages/Connecting";
import Onboarding from "./components/pages/Onboarding";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 2000);
  }, []);

  return (
    <div>
      {showComponent || (
        <Connecting
          title="00:00:00"
          subtitle="Connecting..."
          kilpersec="00 kb/s"
          megpersec="00 mb/s"
        />
      )}
      <Connected
        title="00:00:01"
        subtitle="Connected"
        kilpersec="256 kb/s"
        megpersec="192 mb/s"
      />
      <Connected
        title="00:00:01"
        subtitle="Connected"
        kilpersec="256 kb/s"
        megpersec="192 mb/s"
      />

      <Onboarding />

      <AllServers />
    </div>
  );
}

export default App;
