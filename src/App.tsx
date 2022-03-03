import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Link, Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/Home';

import Cryptocurrencies from './pages/Cryptocurrencies/Cryptocurrencies';
import CryptoDetails from './pages/Cryptocurrencies/CryptoDetails';
import Exchanges from './pages/Exchanges/Exchange';
import Cryptocurrency from './pages/Cryptocurrencies/Cryptocurrency';
import New from './pages/News/New';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true} component={Home}>
            </Route>
            <Route path="/exchanges" exact={true} component={Exchanges}>
            </Route>
            <Route path="/cryptocurrency" exact={true} component={Cryptocurrency}>
            </Route>
            <Route path="/cryptocurrencies/:coinId" exact={true} component={CryptoDetails}>
            </Route>
            <Route path="/news" exact={true} component={New}>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>

    </IonApp>

  );
};

export default App;
