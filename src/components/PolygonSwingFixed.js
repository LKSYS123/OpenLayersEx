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
// import ImageWMS from 'ol/source/ImageWMS';
// import ImageLayer from 'ol/layer/Image';

const PolygonSwingFixed = () => {

    // const ImagesourceWMS = new ImageWMS({
    //     ratio: 1,
    //     url:'http://localhost:8080/geoserver/OlSample1Geo/wms',
    //     params: {
    //         'FORMAT': 'image/png',
    //         LAYERS: 'OlSample1Geo:Z_NGII_N3A_G0010000'
    //     },
    //     projection: 'EPSG:4326'
    // })

    const polygon = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [ -1232776.3921833225, 4392988.889605651 ],
            [ 5342031.032794397, 4392988.889605651 ],
            [ 5342031.032794397, 1320831.8487678468 ],
            [ -1232776.3921833225, 1320831.8487678468 ],
            [ -1232776.3921833225, 4392988.889605651 ]
        ] ])
    })

    const select = new Select()
    select.getFeatures().extend([ polygon ])
    
    const rotate = new RotateFeatureInteraction({
        features: select.getFeatures(),
        angle: -90 * Math.PI / 180
    })

    const insideSwingClick = () => {
        rotate.setAnchor([ 834897.7733876407, 2831879.7579151895 ]);
    };
    const outsideSwingClick = () => {
        rotate.setAnchor([ -3300489.7803449426, 2831879.7579151895 ]);
    };

    useEffect(() => {
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
                }),
                // new ImageLayer({
                //     source: ImagesourceWMS
                // })
            ],
            target: 'map',
            projection: 'EPSG:4326'
        })
                 
        rotate.on('rotatestart', evt => console.log('rotate start', evt))
        rotate.on('rotating', evt => console.log('rotating', evt))
        rotate.on('rotateend', evt => console.log('rotate end', evt))
        // rotate.on('rotateend', evt => console.log('rotate end', evt.anchor))
    
        map.addInteraction(select)
        map.addInteraction(rotate)
  
    }, [])
    
    return (
        <>
            <br></br>
            <button onClick={outsideSwingClick}>Outside Swing</button>
            <button onClick={insideSwingClick}>Inside Swing</button>
            <div id="map" className='map' style={{ width: '98vw', height: '89vh' }}>
            </div>
        </>
    );
};

export default PolygonSwingFixed;