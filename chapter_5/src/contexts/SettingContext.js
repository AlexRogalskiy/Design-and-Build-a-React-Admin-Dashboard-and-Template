import { createContext, useEffect, useState } from "react";
import { THEMES } from "theme";

const defaultSettings = {
  theme: THEMES.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem("settings");

    if (storedData) settings = JSON.parse(storedData);
  } catch (err) {
    console.error(err);
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

export const SettingContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});

export const SettingProvider = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState( defaultSettings );

  const handleSaveSettings = (update = {}) => {
    setCurrentSettings(update);
    storeSettings(update);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  return (
    <SettingContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
