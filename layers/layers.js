var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

    var projection_CartografadelIGN_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartografadelIGN_1 = projection_CartografadelIGN_1.getExtent();
    var size_CartografadelIGN_1 = ol.extent.getWidth(projectionExtent_CartografadelIGN_1) / 256;
    var resolutions_CartografadelIGN_1 = new Array(14);
    var matrixIds_CartografadelIGN_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartografadelIGN_1[z] = size_CartografadelIGN_1 / Math.pow(2, z);
        matrixIds_CartografadelIGN_1[z] = z;
    }
    var lyr_CartografadelIGN_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://www.ign.es/wmts/mapa-raster",
    attributions: ' ',
                                "layer": "MTN",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartografadelIGN_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartografadelIGN_1),
                resolutions: resolutions_CartografadelIGN_1,
                matrixIds: matrixIds_CartografadelIGN_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Cartografía del IGN",
                            opacity: 1.0,
                            
                            
                          });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                interactive: true,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_TORRESINCENDIOS_3 = new ol.format.GeoJSON();
var features_TORRESINCENDIOS_3 = format_TORRESINCENDIOS_3.readFeatures(json_TORRESINCENDIOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TORRESINCENDIOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TORRESINCENDIOS_3.addFeatures(features_TORRESINCENDIOS_3);
var lyr_TORRESINCENDIOS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TORRESINCENDIOS_3, 
                style: style_TORRESINCENDIOS_3,
                interactive: true,
                title: '<img src="styles/legend/TORRESINCENDIOS_3.png" /> TORRES INCENDIOS'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_CartografadelIGN_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_TORRESINCENDIOS_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CartografadelIGN_1,lyr_Provincias_2,lyr_TORRESINCENDIOS_3];
lyr_Provincias_2.set('fieldAliases', {'ID': 'ID', 'CODINE': 'CODINE', 'NOMBRE': 'NOMBRE', });
lyr_TORRESINCENDIOS_3.set('fieldAliases', {'TORRE': 'TORRE', 'PROVINCIA': 'PROVINCIA', 'ID': 'ID', 'X_25830': 'X_25830', 'Y_25830': 'Y_25830', });
lyr_Provincias_2.set('fieldImages', {'ID': 'TextEdit', 'CODINE': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_TORRESINCENDIOS_3.set('fieldImages', {'TORRE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ID': 'TextEdit', 'X_25830': 'TextEdit', 'Y_25830': 'TextEdit', });
lyr_Provincias_2.set('fieldLabels', {'ID': 'no label', 'CODINE': 'no label', 'NOMBRE': 'no label', });
lyr_TORRESINCENDIOS_3.set('fieldLabels', {'TORRE': 'header label', 'PROVINCIA': 'no label', 'ID': 'no label', 'X_25830': 'header label', 'Y_25830': 'header label', });
lyr_TORRESINCENDIOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});