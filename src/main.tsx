import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Providers } from "./hooks/ContextProviders.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>,
);
