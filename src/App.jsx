import './App.css';
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutLogin from './layouts/LayoutLogin'
import PaginaLogin from './pages/paginaLogin'
import Vendedores from './pages/admin/vendedores';
import Ventas from './pages/admin/ventas';
import Productos from './pages/admin/productos';
import Usuarios from './pages/admin/usuarios';
import Home from './pages/admin/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path ={['/Home','/Home/Vendedores','/Home/productos','/Home/ventas','/Home/usuarios']}>
            <LayoutAdmin>
              <Switch>
                <Route path = '/Home/Vendedores'>
                  <Vendedores/>
                </Route>
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
  );
}
export default App;
