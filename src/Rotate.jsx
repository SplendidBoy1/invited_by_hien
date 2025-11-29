import { useEffect, useState } from "react";

export default function RotateOverlay() {
  const [isPortrait, setIsPortrait] = useState(false);

  const check = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!isPortrait) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
        zIndex: 9999,
      }}
    >
      Please rotate your device to landscape.
    </div>
  );
}