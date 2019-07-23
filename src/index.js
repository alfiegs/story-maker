import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './js/store/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './js/components/App';
import Welcome from './js/components/Welcome';
import Nabvar from './js/components/Nabvar';
import Homepage from './js/components/Homepage';
import Register from './js/components/Register';
import MyWords from './js/components/MyWords';
import MyStories from './js/components/MyStories';


render(
    <Provider store={store}>
        <BrowserRouter>
            <Nabvar>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/register" component={Register} />
                    <Route path="/mywords" component={MyWords} />
                    <Route path="/mystories" component={MyStories} />
                </Switch>
            </Nabvar>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

