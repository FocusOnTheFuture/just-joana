// AdminContext.js
import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [textLabel, setTextLabel] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur imperdiet turpis in sodales.");
  const [imageSrc, setImageSrc] = useState("URL_DA_IMAGEM");

  const updateText = (newText) => {
    setTextLabel(newText);
  };

  const updateImage = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <AdminContext.Provider value={{ textLabel, imageSrc, updateText, updateImage }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
