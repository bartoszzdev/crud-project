import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// @ts-ignore
import AddNewUser from './pages/AddNewUserPage/AddNewUser.tsx' 
// @ts-ignore
import EditUser from "./pages/EditUser/EditUser.tsx"
import './globalStyle.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContextProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<AddNewUser />} />      
        <Route path="/user/:id" element={<EditUser />} />   
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
