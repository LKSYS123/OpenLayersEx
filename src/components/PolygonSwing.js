import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSMSource from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Select from 'ol/interaction/Select';
import RotateFeatureInteraction from 'ol-rotate-feature';
import { useEffect } from 'react';

const PolygonSwing = () => {
    useEffect(() => {
        const polygon = new Feature({
            name: 'polygon',
            geometry: new Polygon([ [
                [ -14482348.171434438, 6661491.741627443 ],
                [ -9541458.663080638, 6221214.458704827 ],
                [ -11473786.738129886, 3300708.4819848104 ],
                [ -14482348.171434438, 6661491.741627443 ]
            ] ])
        })
        
        const map = new Map({
            view: new View({
                center: [ 0, 0 ],
                zoom: 2
            }),
            layers: [
                new TileLayer({
                    source: new OSMSource()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        projection: 'EPSG:3857',
                        features: [ polygon ]
                    })
                })
            ],
            target: 'map',
            projection: 'EPSG:3857'
        })
        
        const select = new Select()
        select.getFeatures().extend([ polygon ])

        const rotate = new RotateFeatureInteraction({
            features: select.getFeatures(),
            anchor: [ 0, 0 ],
            angle: -90 * Math.PI / 180
        })

        rotate.on('rotatestart', evt => console.log('rotate start', evt))
        rotate.on('rotating', evt => console.log('rotating', evt))
        rotate.on('rotateend', evt => console.log('rotate end', evt))

        map.addInteraction(select)
        map.addInteraction(rotate)

    }, [])
    return (
        <>
            <div id="map" className='map' style={{ width: '98vw', height: '89vh' }}>
            </div>
        </>
    );
};

export default PolygonSwing;