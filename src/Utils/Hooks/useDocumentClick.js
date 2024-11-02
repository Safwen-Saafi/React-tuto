import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("UseDocumentClick !")
    const handleDocumentClick = () => {
      console.log("Clicked Document");
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
}
