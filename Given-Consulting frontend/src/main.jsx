import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { FaWhatsapp } from "react-icons/fa";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
    <div className="fixed bottom-5 right-5">
      <a
        href="https://wa.me/923005589959"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-5xl sm:text-5xl bg-white rounded-full p-1 sm:p-1" />
      </a>
    </div>
  </StrictMode>
);
