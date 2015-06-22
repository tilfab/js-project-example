'use strict';

import React from 'react';
import {module} from './module';
import Greetings from './components/greetings';

class HelloTilf extends React.Component {
    render() {
        return <Greetings />;
    }
}

React.render(<HelloTilf />, document.querySelector(".app"));