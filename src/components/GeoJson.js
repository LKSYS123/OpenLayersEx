import { useEffect } from 'react';
import Circle from 'ol/geom/Circle';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Attribution, defaults as defaultControls, FullScreen, MousePosition, OverviewMap, ZoomSlider, ZoomToExtent } from 'ol/control';
import 'ol/ol.css';
import { createStringXY } from 'ol/coordinate';
import { Select, Translate, defaults as defaultInteractions } from 'ol/interaction';

const GeoJson = () => {
    useEffect(() => {
        const image = new CircleStyle({
            radius: 5,
            fill: null,
            stroke: new Stroke({ color: 'red', width: 1 }),
        });

        const styles = {
            'Point': new Style({
                image: image,
            }),
            'LineString': new Style({
                stroke: new Stroke({
                    color: 'green',
                    width: 1,
                }),
            }),
            'MultiLineString': new Style({
                stroke: new Stroke({
                    color: 'green',
                    width: 1,
                }),
            }),
            'MultiPoint': new Style({
                image: image,
                width: 20,
            }),
            'MultiPolygon': new Style({
                stroke: new Stroke({
                    color: 'yellow',
                    width: 1,
                }),
                fill: new Fill({
                    color: 'rgba(255, 255, 0, 0.1)',
                }),
            }),
            'Polygon': new Style({
                // 테두리
                stroke: new Stroke({
                    color: 'blue',
                    lineDash: [50],
                    width: 2,
                }),
                // 내부 색상
                fill: new Fill({
                    color: 'rgba(0, 0, 255, 0.1)',
                }),
                // 주석
                text: new Text({
                    font: '20px Calibri,sans-serif',
                    fill: new Fill({
                        color: 'rgba(255, 255, 255, 1)',
                    }),
                    backgroundFill: new Fill({
                        color: 'rgba(100, 0, 0, 0.7)',
                    }),
                    scale: [1,1],
                    padding: [5, 5, 5, 5],
                    offsetX: 0,
                    offsetY: 0,
                    text: '텍스트 입력',
                }),
            }),
            'GeometryCollection': new Style({
                stroke: new Stroke({
                    color: 'magenta',
                    width: 2,
                }),
                fill: new Fill({
                    color: 'magenta',
                }),
                image: new CircleStyle({
                    radius: 10,
                    fill: null,
                    stroke: new Stroke({
                        color: 'magenta',
                    }),
                }),
            }),
            'Circle': new Style({
                stroke: new Stroke({
                    color: 'red',
                    width: 2,
                }),
                fill: new Fill({
                    color: 'rgba(255,0,0,0.2)',
                }),
            }),
        };
        // const styleFunction = function (feature) {
        //     const styles = [styles];
        //     const geometry = feature.getGeometry();
        //     const type = geometry.getType();
        //     let point;

        //     point = geometry.getInteriorPoint;
        //     labelStyle.setGeometry(point);
        //     labelStyle.setText('가나다라마바사');
        //     styles.push(labelStyle);

        //     return styles[type];
        //     // return styles;
        // };

        const styleFunction = function (feature) {
            return styles[feature.getGeometry().getType()];
        };

        // const geojsonObject1 = {
        //     'type': 'FeatureCollection',
        //     'crs': {
        //         'type': 'name',
        //         'properties': {
        //             'name': 'EPSG:3857',
        //         },
        //     },
        //     'features': [
        //         {
        //             'type': 'Feature',
        //             'geometry': {
        //                 'type': 'Polygon',
        //                 'coordinates': [
        //                     [
        //                         [-2e6, 6e6],
        //                         [0e6, 6e6],
        //                         [0e6, 8e6],
        //                         [-2e6, 8e6],
        //                         [-2e6, 6e6],
        //                     ],
        //                 ],
        //             },
        //         },
        //     ]
        // };

        const geojsonObject = {
            'type': 'FeatureCollection',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'EPSG:3857',
                },
            },
            'features': [
                // {
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'Polygon',
                //         'coordinates': [
                //             [
                //                 [-5e6, -1e6],
                //                 [-3e6, -1e6],
                //                 [-4e6, 1e6],
                //                 [-5e6, -1e6],
                //             ],
                //         ],
                //     },
                // },
                // {
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'MultiLineString',
                //         'coordinates': [
                //             [
                //                 [-1e6, -7.5e5],
                //                 [-1e6, 7.5e5],
                //             ],
                //             [
                //                 [1e6, -7.5e5],
                //                 [1e6, 7.5e5],
                //             ],
                //             [
                //                 [-7.5e5, -1e6],
                //                 [7.5e5, -1e6],
                //             ],
                //             [
                //                 [-7.5e5, 1e6],
                //                 [7.5e5, 1e6],
                //             ],
                //         ],
                //     },
                // },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [-5e6, 6e6],
                                [-3e6, 6e6],
                                [-3e6, 8e6],
                                [-5e6, 8e6],
                                [-5e6, 6e6],
                            ],
                        ],
                    },
                },
                // {
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'Polygon',
                //         'coordinates': [
                //             [
                //                 [-2e6, 6e6],
                //                 [0e6, 6e6],
                //                 [0e6, 8e6],
                //                 [-2e6, 8e6],
                //                 [-2e6, 6e6],
                //             ],
                //         ],
                //     },
                // },
                // {
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'Polygon',
                //         'coordinates': [
                //             [
                //                 [1e6, 6e6],
                //                 [3e6, 6e6],
                //                 [3e6, 8e6],
                //                 [1e6, 8e6],
                //                 [1e6, 6e6],
                //             ],
                //         ],
                //     },
                // },
                // {
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'GeometryCollection',
                //         'geometries': [
                //             {
                //                 'type': 'LineString',
                //                 'coordinates': [
                //                     [-5e6, -5e6],
                //                     [0, -5e6],
                //                 ],
                //             },
                //             {
                //                 'type': 'Point',
                //                 'coordinates': [4e6, -5e6],
                //             },
                //             {
                //                 'type': 'Polygon',
                //                 'coordinates': [
                //                     [
                //                         [1e6, -6e6],
                //                         [3e6, -6e6],
                //                         [2e6, -4e6],
                //                         [1e6, -6e6],
                //                     ],
                //                 ],
                //             },
                //         ],
                //     },
                // },
            ],
        };

        const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(geojsonObject),
        });

        // 빨간 원형
        vectorSource.addFeature(new Feature(new Circle([5e6, 7e6], 1e6)));

        const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: styleFunction,
        });

        const select = new Select();

        const translate = new Translate({
            features: select.getFeatures(),
        });

        const map = new Map({
            interactions: defaultInteractions().extend([select, translate]),
            controls: defaultControls({ zoom: true, attribution: false }).extend([
                new FullScreen({}),
                new ZoomSlider(),
                new ZoomToExtent(),
                new OverviewMap({
                    layers: [
                        new TileLayer({
                            source: new OSM()
                        })
                    ],
                }),
                new Attribution({
                    collapsible: true,
                })
            ]),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer,
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        const mousePosition = new MousePosition({
            coordinateFormat: createStringXY(4),
            projection: 'EPSG:3857',
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position'),
        });

        const projectionSelect = document.getElementById('projection');
        projectionSelect.addEventListener('change', function (event) {
            mousePosition.setProjection(event.target.value);
        });

        const precisionInput = document.getElementById('precision');
        precisionInput.addEventListener('change', function (event) {
            const format = createStringXY(event.target.valueAsNumber);
            mousePosition.setCoordinateFormat(format);
        });
        map.controls.push(mousePosition);

    }, [])
    return (
        <>
            <div id="map" className='map' style={{ width: '98vw', height: '89vh' }}>
                <div style={{ marginBottom: 10 }}>
                    <form style={{ position: 'absolute' }}>
                        <label htmlFor="projection">Projection </label>
                        <select id="projection">
                            <option value="EPSG:4326">EPSG:4326</option>
                            <option value="EPSG:3857">EPSG:3857</option>
                        </select>
                        <label htmlFor="precision">Precision</label>
                        <input id="precision" type="number" min="0" max="12" value="4" readOnly/>
                    </form>
                    <div id="mouse-position" style={{ position: 'absolute', zIndex: 100, width: '100%', margin: '0 auto', textAlign: 'center', fontSize: 20, fontWeight: 600 }}></div>
                </div>
            </div>
        </>
    );
};

export default GeoJson;