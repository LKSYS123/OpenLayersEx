import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSMSource from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import { Attribution, defaults as defaultControls, OverviewMap, ZoomSlider, ZoomToExtent } from 'ol/control';
import Overlay from 'ol/Overlay';
import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import HotelIcon from '@mui/icons-material/Hotel';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const FloatingMenu = () => {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    const square = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5e6, 6e6],
            [-3e6, 6e6],
            [-3e6, 8e6],
            [-5e6, 8e6],
            [-5e6, 6e6]
        ] ])
    })

    const polygon2 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-11330916.556581097, 5322450.680402423],
            [-13395804.91453172, 3406574.6914819833],
            [-9585340.863450546, 3427861.3709265906],
            [-11330916.556581097, 5322450.680402423]
        ] ])
    })

    const polygon3 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5711014.279405352, 2853098.574250458],
            [-3135225.0340850614, 2810523.9680461474],
            [-2943637.435193017, 979798.4388494259],
            [-5370413.687825574, 958509.888432174],
            [-5711014.279405352, 2853098.574250458]
        ] ])
    })

    const polygon4 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [9722432.018441591, 1802361.1161488397],
            [10935820.14475787, 1866223.649112855],
            [10850668.437719055, 610259.6692771688],
            [9679856.164922182, 546397.1363131534],
            [9722432.018441591, 1802361.1161488397]
        ] ])
    })
    const polygon5 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [11489293.7673592, 5471462.4257750595],
            [10510069.093454376, 4321936.832422796],
            [12809120.280158903, 4407087.292146514],
            [11489293.7673592, 5471462.4257750595]
        ] ])
    })
    const polygon6 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [11723457.219770651, 3811036.5687106783],
            [14661133.736115325, 3832324.4954703823],
            [12936845.34608693, 2363485.6136404965],
            [11723457.219770651, 3811036.5687106783]
        ] ])
    })
    const polygon7 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [15321045.745200079, 5982362.689487177],
            [14150233.47240321, 4705112.030206883],
            [16704734.790963795, 4768974.563170899],
            [15321045.745200079, 5982362.689487177]
        ] ])
    })

    const polygon8 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-1363531.4501686394, -41111.320413058624],
            [1054604.6294516698, -94374.78732296452],
            [1150478.6553294174, -1447252.2567491457],
            [-1235699.7732651066, -1457905.164691206],
            [-1363531.4501686394, -41111.320413058624]
        ] ])
    })

    const polygon9 = new Feature({
        name: 'polygon',
        geometry: new Polygon([ [
            [-5933488.420460526, -381994.7193554174],
            [-3685794.040311397, -403299.4624391403],
            [-4942799.0930604255, -1862702.7928847354],
            [-5933488.420460526, -381994.7193554174]
        ] ])
    })

    const point1 = new Feature({
        name: 'point',
        geometry: new Point([8721916.92314687, 2193186.565165706])
    });

    const vectorSource = new VectorSource({});

    const vectorLayer = new VectorLayer({
        source: vectorSource
    });

    // onClick에 연결해줄 함수 : Map에 도형 표시
    const addVectorSrc = () => {
        vectorSource.addFeature(polygon);
    };
    const addVectorSrc2 = () => {
        vectorSource.addFeature(square);
    };
    const addVectorSrc3 = () => {
        vectorSource.addFeature(polygon3);
    };
    const addPolygon1 = () => {
        vectorSource.addFeature(polygon2);
    };
    const addPolygon2 = () => {
        vectorSource.addFeature(polygon4);
    };
    const addPolygon3 = () => {
        vectorSource.addFeature(polygon5);
    };
    const addPolygon4 = () => {
        vectorSource.addFeature(polygon6);
    };
    const addPolygon5 = () => {
        vectorSource.addFeature(polygon7);
    };
    const addPolygon6 = () => {
        vectorSource.addFeature(polygon9);
    };
    const addPolygon7 = () => {
        vectorSource.addFeature(polygon8);
    };
    const addPoint1 = () => {
        vectorSource.addFeature(point1);
    };

    const popupContainerElement = document.getElementById('popup-coordinates');
    const popup = new Overlay({
        element:popupContainerElement,
        positioning: 'center-left'
    })

    const buttons1 = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
        <Button key="four">Four</Button>,
        <Button key="five">Five</Button>,
        <Button key="six">Six</Button>
    ];
    const buttons2 = [
        <Button key="point" onClick={addPoint1}>Point</Button>,
        <Button key="line" onClick={addPolygon1}>Polygon1</Button>,
        <Button key="polygon" onClick={addPolygon2}>Polygon2</Button>
    ];
    const buttons3 = [
        <Button startIcon={<CreditCardIcon />} key="corona" onClick={addVectorSrc}>국민지원금</Button>,
        <Button startIcon={<HealthAndSafetyIcon />} key="hospital" onClick={addVectorSrc2}>선별진료소</Button>,
        <Button startIcon={<RestaurantIcon />} key="restaurant" onClick={addVectorSrc3}>음식점</Button>,
        <Button startIcon={<LocalCafeIcon />} key="cafe" onClick={addPolygon7}>카페</Button>,
        <Button startIcon={<PhoneIcon />} key="order" onClick={addPolygon6}>네이버주문</Button>,
        <Button startIcon={<HomeIcon />} key="camp" onClick={addPolygon5}>캠핑장</Button>,
        <Button startIcon={<HotelIcon />} key="pension" onClick={addPolygon4}>팬션</Button>,
        <Button startIcon={<LocalConvenienceStoreIcon />} key="shop" onClick={addPolygon3}>편의점</Button>
    ];

    const options = [
        <Button startIcon={<LocalParkingIcon />} key="parking">주차장</Button>,
        <Button startIcon={<MedicationIcon />} key="pharmacy">약국</Button>,
        <Button startIcon={<LocalGasStationIcon />} key="gas">주유소</Button>,
        <Button startIcon={<LocalGroceryStoreIcon />} key="market">마트</Button>
      ];

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
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
                vectorLayer
            ],
            controls: defaultControls({ zoom: true, attribution: false }).extend([
                new ZoomSlider(),
                new ZoomToExtent(),
                new OverviewMap({
                    layers: [
                        new TileLayer({
                            source: new OSMSource()
                        })                        
                    ],
                }),
                new Attribution({
                    collapsible: true,
                })
            ]),
            target: 'map',
            projection: 'EPSG:3857'
        })

        map.addOverlay(popup);

        map.on('click', function(e) {
            const clickedCoordinate = e.coordinate;
            popup.setPosition(undefined);
            popup.setPosition(clickedCoordinate);
            console.log('clicked', clickedCoordinate);
        })

    }, [])
    
    return (
        <>
            <div id='popup-container'>
                <p id='popup-coordinates'></p>
            </div>
            <div id="map" className='map' style={{ width: '98vw', height: '89vh' }}>
                  
            </div>
            <div>
                <StyleBoxNaver>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <ButtonGroup variant="text" size="large" color="inherit" aria-label="outlined button group">
                            {buttons3}
                        </ButtonGroup>
                <IconStyle>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={openAnchor ? 'long-menu' : undefined}
                            aria-expanded={openAnchor ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClickAnchor}
                        >
                            <MoreVertIcon />
                        </IconButton>
                </IconStyle>
                        <Menu
                            id="long-menu"
                            MenuListProps={{ 'aria-labelledby': 'long-button' }}
                            anchorEl={anchorEl}
                            open={openAnchor}
                            onClose={handleCloseAnchor}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch'
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleCloseAnchor}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                </StyleBoxNaver>
                    
            </div>
            <div>
                <BtnStyle2>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <ButtonGroup variant="outlined" size="large" color="primary" aria-label="outlined button group">
                            {buttons2}
                        </ButtonGroup>
                    </Box>
                </BtnStyle2>
            </div>
            <div>
                <BtnStyle1>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <ButtonGroup orientation="vertical" variant="contained" size="large" color="primary" aria-label="large button group">
                            {buttons1}
                        </ButtonGroup>
                    </Box>
                </BtnStyle1>

            </div>
            
            <div>
                <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial controlled open example"
                        sx={{ position: 'absolute', bottom: 50, right: 70 }}
                        icon={<SpeedDialIcon />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                        ))}
                    </SpeedDial>
                </Box>
            </div>
            
        </>

    );
};

const StyleBoxNaver = styled(Box)`
    position: absolute;
    z-index: 1;
    top: 130px;
    left: 60px;
    background-color: white;
    color: black;
`;

const BtnStyle1 = styled(Box)`
    position: absolute;
    z-index: 1;
    top: 200px;
    right: 65px;
`;

const BtnStyle2 = styled(Box)`
    position: absolute;
    z-index: 1;
    top: 150px;
    right: 65px;
`;

const IconStyle = styled(IconButton)`
    bottom: 7px;
`;

export default FloatingMenu;