//Parámetro options
var overviewoptions = {
   //Definimos la clase para asignar un estilo concreto al objeto
   className: 'ol-overviewmap ol-custom-overviewmap',

   //Capas que se mostrarán en el OverviewMap
   //Mantenemos la misma capa del mapa aunque podría ser distinta
   layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
        })
      })
    ],

  //Oculto por defecto
  collapsed: false,

  //ToolTip
  tipLabel: 'Mapa de referencia'
}

//Capa base
var tileLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})


var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON({featureProjection:"EPSG:3857"})).readFeatures(datosGeoJSON)    
}); 

console.log(vectorSource)

var vectorPoints = new ol.layer.Vector({
    source: vectorSource
});

console.log(vectorPoints)
//Definimos la variable map que alojará nuestro mapa
map = new ol.Map({
  target: 'map'
  ,
  view: new ol.View({
    center: [312807, 5156486],
    zoom: 14
  })
  ,
  layers: [
    tileLayer, vectorPoints
  ]

  //Añadimos a los del mapa el objeto OverviewMap
  
});