import React from "react";
import Routes from "./Routes";

// Font Awesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// create Font Awesome library
library.add(fab, fas);

const App = () => <Routes />;

export default App;
