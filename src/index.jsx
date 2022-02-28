import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import Apk from './Apk';


ReactDOM.render(
  <React.StrictMode>
<App/>
</React.StrictMode>,
document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Apk/>
  </React.StrictMode>,
  document.getElementById("doc")
);
