import './App.css';
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutLogin from './layouts/LayoutLogin'
import PaginaLogin from './pages/paginaLogin'
import Ventas from './pages/admin/ventas';
import Productos from './pages/admin/productos';
import Usuarios from './pages/admin/usuarios';
import Home from './pages/admin/home';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Auth0Provider domain="ventas-misiontic.us.auth0.com" clientId="3rfEJuOcWXxkmNFsQJXjZ06p2VCNjYPl" redirectUri='https://polar-sea-28372.herokuapp.com'>
      <div>
        <Router>
          <Switch>
            <Route path ={['/Home','/Home/productos','/Home/ventas','/Home/usuarios']}>
              <LayoutAdmin>
                <Switch>
                  <Route path = '/Home/productos'>
                    <Productos/>
                  </Route>
                  <Route path = '/Home/ventas'>
                    <Ventas/>
                  </Route>
                  <Route path = '/Home/usuarios'>
                    <Usuarios/>
                  </Route>
                  <Route path = '/Home'>
                    <Home/>
                  </Route>
                </Switch>
              </LayoutAdmin>
            </Route>
            <Route path = '/'>
              <LayoutLogin>
                <Switch>
                  <Route path = '/'>
                  <PaginaLogin/>
                  </Route>
                </Switch>
              </LayoutLogin>
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}
export default App;
