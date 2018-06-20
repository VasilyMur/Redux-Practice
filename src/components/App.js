import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';

import store from '../store';

class App extends React.Component {

  render() {
   
    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <div className="container">
                <Counter store={store}/>
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default App;