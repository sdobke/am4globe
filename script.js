/**
* @license
* Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
*
* This sofware is provided under multiple licenses. Please see below for
* links to appropriate usage.
*
* Free amCharts linkware license. Details and conditions:
* https://github.com/amcharts/amcharts4/blob/master/LICENSE
*
* One of the amCharts commercial licenses. Details and pricing:
* https://www.amcharts.com/online-store/
* https://www.amcharts.com/online-store/licenses-explained/
*
* If in doubt, contact amCharts at contact@amcharts.com
*
* PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
* @hidden
*/
am4internal_webpackJsonp(["ab45"], { lhmh: function (t, e, i) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var n = i("aCit"), a = function (t) { Object(n.b)(t, "SpriteState") && (t.transitionDuration = 400), Object(n.b)(t, "Component") && (t.rangeChangeDuration = 500, t.interpolationDuration = 500, t.sequencedInterpolation = !1, Object(n.b)(t, "SankeyDiagram") && (t.sequencedInterpolation = !0), Object(n.b)(t, "FunnelSeries") && (t.sequencedInterpolation = !0)), Object(n.b)(t, "Chart") && (t.defaultState.transitionDuration = 2e3, t.hiddenState.transitionDuration = 1e3), Object(n.b)(t, "Tooltip") && (t.animationDuration = 400, t.defaultState.transitionDuration = 400, t.hiddenState.transitionDuration = 400), Object(n.b)(t, "Scrollbar") && (t.animationDuration = 500), Object(n.b)(t, "Series") && (t.defaultState.transitionDuration = 1e3, t.hiddenState.transitionDuration = 700, t.hiddenState.properties.opacity = 1, t.showOnInit = !0), Object(n.b)(t, "MapSeries") && (t.hiddenState.properties.opacity = 0), Object(n.b)(t, "PercentSeries") && (t.hiddenState.properties.opacity = 0), Object(n.b)(t, "FunnelSlice") && (t.defaultState.transitionDuration = 800, t.hiddenState.transitionDuration = 1e3, t.hiddenState.properties.opacity = 1), Object(n.b)(t, "Slice") && (t.defaultState.transitionDuration = 700, t.hiddenState.transitionDuration = 1e3, t.hiddenState.properties.opacity = 1), Object(n.b)(t, "Preloader") && (t.hiddenState.transitionDuration = 2e3), Object(n.b)(t, "Column") && (t.defaultState.transitionDuration = 700, t.hiddenState.transitionDuration = 1e3, t.hiddenState.properties.opacity = 1), Object(n.b)(t, "Column3D") && (t.hiddenState.properties.opacity = 0) }; window.am4themes_animated = a } }, ["lhmh"]);
//# sourceMappingURL=animated.js.map

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
var interfaceColors = new am4core.InterfaceColorSet();

try {
  chart.geodata = am4geodata_worldLow;
}
catch (e) {
  chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
}


// var label = chart.createChild(am4core.Label)
// label.text = "12 months rolling measles\nincidence per 1'000'000 total population. \n Bullet size uses logarithmic scale. \n Data: World Health Organization";
// label.fontSize = 12;
// label.align = "left";
// label.valign = "bottom"
// label.fill = am4core.color("#000000");
// label.background = new am4core.RoundedRectangle()
// label.background.cornerRadius(10,10,10,10);
// label.padding(10,10,10,10);
// label.marginLeft = 30;
// label.marginBottom = 30;
// label.background.strokeOpacity = 0.3;
// //label.background.stroke =am4core.color("#FFFFFF");
// //label.background.fill = am4core.color("#FCF3F3");
// label.background.fillOpacity = 0.6;

// Set projection
chart.projection = new am4maps.projections.Orthographic();


// Add zoom control
/*
chart.zoomControl = new am4maps.ZoomControl();
chart.seriesContainer.cursorOverStyle = am4core.MouseCursorStyle.grab;
chart.seriesContainer.cursorDownStyle = am4core.MouseCursorStyle.grabbing;
*/
/*
var homeButton = new am4core.Button();
homeButton.events.on("hit", function(){
chart.goHome();
});
*/

// homeButton.icon = new am4core.Sprite();
// homeButton.padding(7, 5, 7, 5);
// homeButton.width = 30;
// homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
// homeButton.marginBottom = 10;
// homeButton.parent = chart.zoomControl;
// homeButton.insertBefore(chart.zoomControl.plusButton);

chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#006b95");
chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;


// Create map polygon series

var shadowPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
shadowPolygonSeries.geodata = am4geodata_continentsLow;

try {
  shadowPolygonSeries.geodata = am4geodata_continentsLow;
}
catch (e) {
  shadowPolygonSeries.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
}

shadowPolygonSeries.useGeodata = true;
shadowPolygonSeries.dx = 2;
shadowPolygonSeries.dy = 2;
shadowPolygonSeries.mapPolygons.template.fill = am4core.color("#000");
shadowPolygonSeries.mapPolygons.template.fillOpacity = 0.2;
shadowPolygonSeries.mapPolygons.template.strokeOpacity = 0;
shadowPolygonSeries.fillOpacity = 0.1;
shadowPolygonSeries.fill = am4core.color("#000");


// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

polygonSeries.calculateVisualCenter = true;
polygonSeries.tooltip.background.fillOpacity = 0.2;
polygonSeries.tooltip.background.cornerRadius = 15;

var template = polygonSeries.mapPolygons.template;
template.nonScalingStroke = true;
template.fill = am4core.color("#d6f9fb");
template.stroke = am4core.color("#d6f9fb");

polygonSeries.calculateVisualCenter = true;
template.propertyFields.id = "id";
template.tooltipPosition = "fixed";
template.fillOpacity = 1;

template.events.on("over", function (event) {
  if (event.target.dummyData) {
    event.target.dummyData.isHover = true;
  }
})
template.events.on("out", function (event) {
  if (event.target.dummyData) {
    event.target.dummyData.isHover = false;
  }
})

var hs = polygonSeries.mapPolygons.template.states.create("hover");
hs.properties.fillOpacity = 1;
hs.properties.fill = am4core.color("#5BCFEC");


var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
graticuleSeries.fitExtent = false;
graticuleSeries.mapLines.template.strokeOpacity = 0.2;


var measelsSeries = chart.series.push(new am4maps.MapPolygonSeries())
measelsSeries.tooltip.background.fillOpacity = 1;
measelsSeries.tooltip.background.cornerRadius = 8;
measelsSeries.tooltip.getStrokeFromObject = false
/*measelsSeries.tooltip.stroke.fill = am4core.color("#033767");*/
measelsSeries.tooltip.getFillFromObject = false;
measelsSeries.tooltip.background.fill = am4core.color("#033767");
measelsSeries.tooltip.autoTextColor = false;
measelsSeries.tooltip.dy = -5;

var measelTemplate = measelsSeries.mapPolygons.template;
measelTemplate.fill = am4core.color("#FFF"); // Color del círculo
measelTemplate.strokeOpacity = 1;
measelTemplate.strokeWidth = 8;
measelTemplate.stroke = am4core.color("#3AAC55");
measelTemplate.fillOpacity = 0.75;
measelTemplate.tooltipPosition = "fixed";


/*
var hs2 = measelsSeries.mapPolygons.template.states.create("hover");
hs2.properties.fillOpacity = 1;
hs2.properties.fill = am4core.color("#123e6b");
*/

polygonSeries.events.on("inited", function () {
  polygonSeries.mapPolygons.each(function (mapPolygon) {
    var dato = data[mapPolygon.id];
    if (dato != undefined) {
      var polygon = measelsSeries.mapPolygons.create();
      polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, 2);
      //polygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": " + dato;
      var datos = dato.split("*");
      var pais = datos[0];
      var nombre = datos[1];
      var foto = datos[2];

      polygon.tooltipHTML = '<div style="min-height:90px; min-width:200px; padding:10px;background-color:#033767"><table><tr><td><table><tr><td style="border-bottom:1px solid #fff;padding-bottom:10px;color:white">' + pais + '</td></tr><tr><td style="color:white">' + nombre + '</td></tr></table></td><td><img width="80" src="fotos/'+foto+'.png"></td></tr></table></div>';

      mapPolygon.dummyData = polygon;
      polygon.events.on("over", function () {
        mapPolygon.isHover = true;
      })
      polygon.events.on("out", function () {
        mapPolygon.isHover = false;
      })
    }
    else {
      //mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": no data";
      //mapPolygon.fillOpacity = 0.9;
    }
  })
})

var data = {
  "BR": "Brasil*Bruno<br>Marigoni*Brazil",
  "CR": "Costa Rica*Renato<br>Souza*costarica",
  "MX": "Mexico*Alejandra<br>Solis*Mexico",
  "CO": "Colombia*Marcelo<br>Burbano*Colombia",
  "EC": "Ecuador*Oliver<br>Klopfstein*Ecuator",
  "ES": "España*Andrés<br>Cardó*Spain",
  "US": "Estados Unidos*Hilario<br>Nuño*usa"
}


chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.chartContainer.wheelable = false;
chart.deltaLongitude = 55;
chart.panBehavior = "rotateLongLat";
//chart.padding(10,10,10,10);
chart.padding(0, 0, 0, 0);
chart.dx = 60;
chart.homeZoomLevel = 1.8;
chart.homeGeoPoint = {
  latitude: 14,
  longitude: 125
}