import PolygonSwing from './components/PolygonSwing';
import PolygonSwingFixed from './components/PolygonSwingFixed';
import GeoJson from './components/GeoJson';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
        <>
            <div className='list' style={style}>
                <BrowserRouter>
                    <Link to='/geoJson'>좌표로 도형생성</Link><br></br>
                    <Link to='/polygonSwing'>도형 회전1</Link><br></br>
                    <Link to='/polygonSwingFixed'>도형 회전2</Link><br></br>
                    <Switch>
                        <Route path='/geoJson' component={GeoJson} />
                        <Route path='/polygonSwing' component={PolygonSwing}></Route>
                        <Route path='/polygonSwingFixed' component={PolygonSwingFixed}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

const style = {
    marginTop: '20px'
}

export default App;
