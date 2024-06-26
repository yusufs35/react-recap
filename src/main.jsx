import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>
);
