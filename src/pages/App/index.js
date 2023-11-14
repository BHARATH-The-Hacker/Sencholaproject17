import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import GenresProvider from "../../contexts/genres-provider";
import SearchProvider from "../../contexts/search-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import AllRoutes from "../../config/all-routes";


const App = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
          setTimeout(() => setLoading(false), 1000);
    }, []);
  
  return loading ? (
    <Loading/>
  ) : (
    <BrowserRouter>
        <SearchProvider>
          <GenresProvider>
            <Header />
            <AllRoutes />
          </GenresProvider>
        </SearchProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
