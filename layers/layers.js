ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([108.620484, 0.039538, 109.899157, 0.827038]);
var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaPontianak_2 = new ol.format.GeoJSON();
var features_KotaPontianak_2 = format_KotaPontianak_2.readFeatures(json_KotaPontianak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_KotaPontianak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPontianak_2.addFeatures(features_KotaPontianak_2);
var lyr_KotaPontianak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPontianak_2, 
                style: style_KotaPontianak_2,
                popuplayertitle: "Kota Pontianak",
                interactive: true,
                title: '<img src="styles/legend/KotaPontianak_2.png" /> Kota Pontianak'
            });
var format_Permukiman_3 = new ol.format.GeoJSON();
var features_Permukiman_3 = format_Permukiman_3.readFeatures(json_Permukiman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Permukiman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_3.addFeatures(features_Permukiman_3);
var lyr_Permukiman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_3, 
                style: style_Permukiman_3,
                popuplayertitle: "Permukiman",
                interactive: true,
                title: '<img src="styles/legend/Permukiman_3.png" /> Permukiman'
            });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_4.png" /> Bangunan'
            });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_6_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_6_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_6_2.png" /> Jalan Lokal<br />'
        });
var format_Sekolah_7 = new ol.format.GeoJSON();
var features_Sekolah_7 = format_Sekolah_7.readFeatures(json_Sekolah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Sekolah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_7.addFeatures(features_Sekolah_7);
var lyr_Sekolah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_7, 
                style: style_Sekolah_7,
                popuplayertitle: "Sekolah",
                interactive: true,
                title: '<img src="styles/legend/Sekolah_7.png" /> Sekolah'
            });

lyr_ESRIImagery_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KotaPontianak_2.setVisible(true);lyr_Permukiman_3.setVisible(true);lyr_Bangunan_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_Sekolah_7.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_OpenStreetMap_1,lyr_KotaPontianak_2,lyr_Permukiman_3,lyr_Bangunan_4,lyr_Sungai_5,lyr_Jalan_6,lyr_Sekolah_7];
lyr_KotaPontianak_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Permukiman_3.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Bangunan_4.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_5.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_6.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sekolah_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'JJGPDF': 'JJGPDF', });
lyr_KotaPontianak_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Permukiman_3.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Bangunan_4.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_5.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_6.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Sekolah_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'JJGPDF': 'TextEdit', });
lyr_KotaPontianak_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Permukiman_3.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Bangunan_4.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sekolah_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'JJGPDF': 'no label', });
lyr_Sekolah_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});