import React, {Component, PropTypes} from 'react';
import { Map as olMap, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM as OSMSource } from 'ol/source'
import { fromLonLat } from 'ol/proj';


class Map extends Component {
	constructor(props) {
        super(props);

	    // Define base layer
  	    this.baseLayer = new TileLayer({ source: new OSMSource() });
    
        // Define base view
        this.baseView = new View({
            center: fromLonLat([37.41, 8.82]),
            zoom: 4
        });

		// Add map, base view and layer
        this.map = new olMap({
            layers: [this.baseLayer],
            view: this.baseView,
            target:'container'
        });
    }
  
    static childContextTypes = {
        map: PropTypes.object
    }
  
    getChildContext() {
        return {
        map: this.map
        }
    }
  
    componentDidMount() {
        // set map target element
        this.map.setTarget(this.refs.map);
    }
	
    render() {
        return <div ref="map">
        {this.props.children}
        </div>;
    }
}

export default Map;