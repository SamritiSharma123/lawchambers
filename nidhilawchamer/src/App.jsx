import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Disclaimer from "./components/Disclaimer";
import Home from "./pages/Home";

function App() {

  // loader state
  const [loading, setLoading] = useState(true);

  // disclaimer agreement state
  const [agreed, setAgreed] = useState(false);

  /* Loader timer */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* STEP 1 — Loader */}
      {loading && <Loader />}

      {/* STEP 2 — Disclaimer */}
      {!loading && !agreed && (
        <Disclaimer onAgree={() => setAgreed(true)} />
      )}

      {/* STEP 3 — Website */}
      {!loading && agreed && <Home />}
    </>
  );
}

export default App;