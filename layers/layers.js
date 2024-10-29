ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.788006, 8.498524, 76.974411, 8.608417]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TRIVANDRUM_1 = new ol.format.GeoJSON();
var features_TRIVANDRUM_1 = format_TRIVANDRUM_1.readFeatures(json_TRIVANDRUM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TRIVANDRUM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRIVANDRUM_1.addFeatures(features_TRIVANDRUM_1);
var lyr_TRIVANDRUM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRIVANDRUM_1, 
                style: style_TRIVANDRUM_1,
                popuplayertitle: "TRIVANDRUM",
                interactive: false,
                title: '<img src="styles/legend/TRIVANDRUM_1.png" /> TRIVANDRUM'
            });
var format_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_2 = format_GEOMORPHOLOGY_2.readFeatures(json_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_2.addFeatures(features_GEOMORPHOLOGY_2);
var lyr_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_2, 
                style: style_GEOMORPHOLOGY_2,
                popuplayertitle: "GEOMORPHOLOGY",
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_1.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_2.png" /> Coastal Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_3.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_4.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_5.png" /> Residual Hill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_6.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_7.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_8.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_2_9.png" /> Water Body<br />'
        });
var format_JUNCTIONS_3 = new ol.format.GeoJSON();
var features_JUNCTIONS_3 = format_JUNCTIONS_3.readFeatures(json_JUNCTIONS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JUNCTIONS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNCTIONS_3.addFeatures(features_JUNCTIONS_3);
var lyr_JUNCTIONS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNCTIONS_3, 
                style: style_JUNCTIONS_3,
                popuplayertitle: "JUNCTIONS",
                interactive: false,
                title: '<img src="styles/legend/JUNCTIONS_3.png" /> JUNCTIONS'
            });
var format_DRAINAGE_4 = new ol.format.GeoJSON();
var features_DRAINAGE_4 = format_DRAINAGE_4.readFeatures(json_DRAINAGE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DRAINAGE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_4.addFeatures(features_DRAINAGE_4);
var lyr_DRAINAGE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_4, 
                style: style_DRAINAGE_4,
                popuplayertitle: "DRAINAGE",
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_4.png" /> DRAINAGE'
            });
var format_TOURISTSPOT_5 = new ol.format.GeoJSON();
var features_TOURISTSPOT_5 = format_TOURISTSPOT_5.readFeatures(json_TOURISTSPOT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TOURISTSPOT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOURISTSPOT_5.addFeatures(features_TOURISTSPOT_5);
var lyr_TOURISTSPOT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOURISTSPOT_5, 
                style: style_TOURISTSPOT_5,
                popuplayertitle: "TOURIST SPOT",
                interactive: true,
                title: '<img src="styles/legend/TOURISTSPOT_5.png" /> TOURIST SPOT'
            });
var format_RAILWAY_6 = new ol.format.GeoJSON();
var features_RAILWAY_6 = format_RAILWAY_6.readFeatures(json_RAILWAY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RAILWAY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAY_6.addFeatures(features_RAILWAY_6);
var lyr_RAILWAY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAY_6, 
                style: style_RAILWAY_6,
                popuplayertitle: "RAILWAY",
                interactive: false,
                title: '<img src="styles/legend/RAILWAY_6.png" /> RAILWAY'
            });
var format_ROAD_7 = new ol.format.GeoJSON();
var features_ROAD_7 = format_ROAD_7.readFeatures(json_ROAD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ROAD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_7.addFeatures(features_ROAD_7);
var lyr_ROAD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_7, 
                style: style_ROAD_7,
                popuplayertitle: "ROAD",
                interactive: false,
                title: '<img src="styles/legend/ROAD_7.png" /> ROAD'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TRIVANDRUM_1.setVisible(true);lyr_GEOMORPHOLOGY_2.setVisible(true);lyr_JUNCTIONS_3.setVisible(true);lyr_DRAINAGE_4.setVisible(true);lyr_TOURISTSPOT_5.setVisible(true);lyr_RAILWAY_6.setVisible(true);lyr_ROAD_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TRIVANDRUM_1,lyr_GEOMORPHOLOGY_2,lyr_JUNCTIONS_3,lyr_DRAINAGE_4,lyr_TOURISTSPOT_5,lyr_RAILWAY_6,lyr_ROAD_7];
lyr_TRIVANDRUM_1.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:en': 'name:en', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_GEOMORPHOLOGY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_JUNCTIONS_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PLACE_NAME': 'PLACE_NAME', 'PLACE_NA_1': 'PLACE_NA_1', 'THIRUVANAN': 'THIRUVANAN', 'THIRUVAN_1': 'THIRUVAN_1', 'PLACE_NA_2': 'PLACE_NA_2', 'PLACE_NA_3': 'PLACE_NA_3', 'SETNAME': 'SETNAME', 'POLYGONID': 'POLYGONID', 'SCALE': 'SCALE', 'ANGLE': 'ANGLE', 'POLYGONI_1': 'POLYGONI_1', 'SCALE_1': 'SCALE_1', 'ANGLE_1': 'ANGLE_1', 'LAT0': 'LAT0', 'LONG': 'LONG', });
lyr_DRAINAGE_4.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_TOURISTSPOT_5.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'LAT LONG_L': 'LAT LONG_L', 'LAT LONG_1': 'LAT LONG_1', 'IMAGE': 'IMAGE', });
lyr_RAILWAY_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_ROAD_7.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_TRIVANDRUM_1.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:en': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_GEOMORPHOLOGY_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_JUNCTIONS_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PLACE_NAME': 'Range', 'PLACE_NA_1': 'Range', 'THIRUVANAN': 'TextEdit', 'THIRUVAN_1': 'TextEdit', 'PLACE_NA_2': 'Range', 'PLACE_NA_3': 'Range', 'SETNAME': 'TextEdit', 'POLYGONID': 'Range', 'SCALE': 'TextEdit', 'ANGLE': 'TextEdit', 'POLYGONI_1': 'Range', 'SCALE_1': 'TextEdit', 'ANGLE_1': 'TextEdit', 'LAT0': 'TextEdit', 'LONG': 'TextEdit', });
lyr_DRAINAGE_4.set('fieldImages', {'ORDER1': 'Range', });
lyr_TOURISTSPOT_5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'LAT LONG_L': 'TextEdit', 'LAT LONG_1': 'TextEdit', 'IMAGE': 'ExternalResource', });
lyr_RAILWAY_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_ROAD_7.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_TRIVANDRUM_1.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:en': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_GEOMORPHOLOGY_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'inline label - visible with data', 'TYPE2': 'no label', });
lyr_JUNCTIONS_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PLACE_NAME': 'no label', 'PLACE_NA_1': 'inline label - always visible', 'THIRUVANAN': 'no label', 'THIRUVAN_1': 'no label', 'PLACE_NA_2': 'no label', 'PLACE_NA_3': 'no label', 'SETNAME': 'inline label - always visible', 'POLYGONID': 'no label', 'SCALE': 'no label', 'ANGLE': 'no label', 'POLYGONI_1': 'no label', 'SCALE_1': 'no label', 'ANGLE_1': 'no label', 'LAT0': 'no label', 'LONG': 'no label', });
lyr_DRAINAGE_4.set('fieldLabels', {'ORDER1': 'no label', });
lyr_TOURISTSPOT_5.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'LAT LONG_L': 'no label', 'LAT LONG_1': 'no label', 'IMAGE': 'no label', });
lyr_RAILWAY_6.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'no label', 'type': 'no label', });
lyr_ROAD_7.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_ROAD_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});