import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes/routes'
import routeConfig from './routes'
import { LoadingComponent } from './components'
import './styles/custom/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
          <Suspense fallback={<LoadingComponent />}>
            <div>{routeConfig(routes)}</div>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
