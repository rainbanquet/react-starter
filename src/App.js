import React                        from 'react';
import { HashRouter, Route, Link }  from 'react-router-dom';

// component
import  AsyncTest   from './module/Test';
import  AsyncTest2  from './module/Test2';

// css
import 'antd/lib/date-picker/style/css';

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/"     >Test</Link></li>
                        <li><Link to="/test2">Test2</Link></li>
                    </ul>
                    <Route path="/"         component={AsyncTest}   exact/>
                    <Route path="/test2"    component={AsyncTest2}  />
                </div>
            </HashRouter>
        );
    }
}
export default App;