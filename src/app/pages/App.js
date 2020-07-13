import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const { t, i18n } = useTranslation();
  const [langKey, setLangKey] = useState(i18n.language);

  const changeLanguage = (lang) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
      setLangKey(i18n.language);
    }
  };

  return (
    <div className="container">
      <h1>Hello World !!!</h1>
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </div>
  );
};

export default App;
