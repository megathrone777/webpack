import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "~/components";

const root = createRoot(document.getElementById("root")!);

if (module.hot) module.hot.accept();
root.render(<App />);
