import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import "./App.css";

const alanKey =
  "f42ef3dc0cfea4b5a41b8cd591da401e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
