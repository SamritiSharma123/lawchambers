import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Disclaimer from "./components/Disclaimer";
import Home from "./pages/Home";

function App() {

  const [loading, setLoading] = useState(true);
  const [agreed, setAgreed] = useState(false);

  /* Loader timer */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  /* 🔥 SCROLL CONTROL (MAIN FIX) */
  useEffect(() => {
    if (loading || !agreed) {
      document.body.style.overflow = "hidden";  // lock scroll
    } else {
      document.body.style.overflow = "auto";    // unlock scroll ✅
    }
  }, [loading, agreed]);

  return (
    <>
      {loading && <Loader />}

      {!loading && !agreed && (
        <Disclaimer onAgree={() => setAgreed(true)} />
      )}

      {!loading && agreed && <Home />}
    </>
  );
}

export default App;
