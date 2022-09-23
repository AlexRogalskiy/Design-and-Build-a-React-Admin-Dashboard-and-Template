import { useContext } from "react";
import { SettingContext } from "contexts/SettingContext";

const useSetting = () => useContext(SettingContext);

export default useSetting;
