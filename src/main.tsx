import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './utils/Store'
import App from './App'
import './style/index.css'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Selected from './pages/Selected'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="selected" element={<Selected />} />
                 </Routes>
                 </BrowserRouter>   
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
)
