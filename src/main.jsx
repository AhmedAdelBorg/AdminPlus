import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { App } from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/Form';
import Calender from './pages/calender/Calender';
// import FAQ from './pages/faq/FAQ';
import BarChart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Geograghy from './pages/geograghy/Geograghy';
import NotFound from './pages/notFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Invoices />} />
      <Route path='invoices' element={<Contacts />} />
      <Route path='form' element={<Form />} />
      <Route path='Calender' element={<Calender />} />
      {/* <Route path='faq' element={<FAQ />} /> */}
      <Route path='bar' element={<BarChart />} />
      <Route path='pie' element={<PieChart />} />
      <Route path='line' element={<LineChart />} />
      <Route path='geograghy' element={<Geograghy />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
