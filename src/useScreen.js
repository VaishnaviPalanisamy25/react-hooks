import React from "react";

export default function useScreen() {
  const [size, setSize] = React.useState("");
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSize("mobile");
      } else if (window.innerWidth < 1024) {
        setSize("tablet");
      } else {
        setSize("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return [size];
}
