import { useState, useEffect } from 'react';
import { Map as OlMap, View } from 'ol';
import { Attribution, defaults as defaultControls } from 'ol/control';
import { Tile as TileLayer } from 'ol/layer';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';
import Overlay from 'ol/Overlay';

import MapContext from './MapContext';
import {
    FullScreenControl,
    MousePositionControl,
    OverviewControl,
    ZoomSliderControl
} from '../controls';
import 'ol/ol.css';
import '../components/Map.css';

const Map = ({ children }) => {
    const [mapObj, setMapObj] = useState({});
    const container = document.getElementById('popupContainer');
    const content = document.getElementById('popupContent');
    const closer = document.getElementById('popup-closer');

    useEffect(() => {
        const attribution = new Attribution({
            collapsible: true,
          });
        // Map 객체 생성 및 OSM 배경지도 추가
        const map = new OlMap({
            controls: defaultControls({attribution: false}).extend([attribution]),
            layers: [
                new TileLayer({
                    source: new OSM(),
                })
            ],
            target: 'map', // 하위 요소 중 id 가 map 인 element가 있어야함.
            view: new View({
                center: fromLonLat([126.886490, 37.515881]),
                zoom: 13,
            }),
        });

        // popup
        const popup = new Overlay({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250,
            }
        });
        
        map.addOverlay(popup);
        map.on('click', function (e) {
            const clickedCoordinate = e.coordinate;
            popup.setPosition(undefined);
            popup.setPosition(clickedCoordinate);
            content.innerHTML = '<p>You clicked here:</p><code>' + clickedCoordinate + '</code>';
        })

        closer.onclick = () => {
            popup.setPosition(undefined);
            closer.blur();
            return false;
        }

        setMapObj({ map });
        return () => map.setTarget(undefined);
    }, [closer, container, content]);

    // MapContext.Provider 에 객체 저장
    return (
        <MapContext.Provider value={mapObj}>
            {children}
            <FullScreenControl />
            <MousePositionControl />
            <OverviewControl />
            <ZoomSliderControl />
        </MapContext.Provider>
    );
};

export default Map;
