import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import {  HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          {" "}
       <HelmetProvider>   <RouterProvider router={router}></RouterProvider></HelmetProvider>
        </TooltipProvider>

        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
