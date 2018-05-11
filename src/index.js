import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';



//<IndexRoute component={Home} />
// let routes = (
//     <Router >
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//             <Route exact path="/" component={App} />
//             <Route path="/home" component={Home} />
//             <Route path="/about" component={About} />
//         </div>
//     </Router>
// )

// const Routes = () => {

// }

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);