function preload() {
  
   loadJSON("https://api.mapbox.com/datasets/v1/arunkoshy18/cjt4107q10x2a33qsgwxt34mp/features?" +
            "access_token=pk.eyJ1IjoiYXJ1bmtvc2h5MTgiLCJhIjoiY2pxejNqMTl2MDdseTQ4cGNpdXN6OXE2ZiJ9.C9NoJtuiT9pDw5pyhYZxhQ",gotData) ;     
  }

function setup() {
  
  for (var i =0;i<=geojson['features'].length;i++){
     geojson['features'][i]['geometry']['type'] = "Polygon";
     geojson['features'][i]['properties']['year'] =parseInt(geojson['features'][i]['properties']['year'], 10); 
     geojson['features'][i]['properties']['number_of_jobs'] = parseInt(geojson['features'][i]['properties']['number_of_jobs'], 10); 
     geojson['features'][i]['properties']['job_density'] = parseFloat(geojson['features'][i]['properties']['job_density']); 
     var lat1 = geojson['features'][i]['geometry']['coordinates'][0];
     var lon1 = geojson['features'][i]['geometry']['coordinates'][1];
     var lat2 = lat1 + 0.01;
     var lon2 = lon1 + 0.01;
     var pol = [[[ lat1, lon1] , 
                 [ lat2, lon1] ,
                 [ lat2, lon2] ,
                 [ lat1, lon2] ,
                 [ lat1, lon1] ]];
    console.log(geojson['features'][i]['geometry']['coordinates']);    
    geojson['features'][i]['geometry']['coordinates'] = pol;     
     console.log(geojson['features'][i]['geometry']['coordinates']);   
     // console.log(i);
  }
  console.log(geojson);
  // console.log(geojson['features']);  
}

function draw(){    
}

function gotData(data){
  
  geojson = data; 
  
}



// var geojson1 = {
// 	"type": "FeatureCollection",
// 	"features": [{
// 				"type": "Feature",
// 				"geometry": {
// 					"type": "Point",
// 					"coordinates": [ -0.0919444,51.5161]
// 				}
// 				},
//         {
// 				"type": "Feature",
// 				"geometry": {
// 					"type": "Point",
// 					"coordinates": [ 0.152614, 51.5636]
// 				}
// 				}]
// 	};  
//   console.log(geojson);
  
  
//   data = loadTable(
//     'JobsAndJobsDensityWithGeoCords.csv',
//   'csv',
//   'header');
  
  // allTextLines = data.split('/\r\n|\n/');
  // console.log(data.split('\n'));

// var		geojson2 =  {
// 		"type": "FeatureCollection", 
// 		"features": 
// 					[
// 		{"id": 1,
// 		"type": "Feature", 
// 					"properties": 
// 							{"year": 2012, 
// 							"jobs": 361000,
// 		"jobsDensity" : 67.1
// 		}, 
// 					"geometry": 
// 							{"type": "Polygon",              
// 							"coordinates":[[ [-0.0919444, 51.5161],
// 		[-0.0819444, 51.5161],
// 		[-0.0819444, 51.5261],
// 		[-0.0919444, 51.5261]                             
// 		]]
// 		}
// 		}, 
// 					{"id": 2, 
// 					"type": "Feature", 
// 					"properties": 
// 							{"year": 2012, 
// 							"jobs": 57000,
// 		"jobsDensity" : 0.56
// 		}, 
// 					"geometry": 
// 							{"type": "Polygon",              
// 							"coordinates":[[ [0.152614, 51.5636],
// 		[0.162614, 51.5636],
// 		[0.162614, 51.5736],
// 		[0.152614, 51.5736]]]
// 		}
// 		}
// 		]
// 		}
  //////////////////////////////

  
// map.addLayer({
//         'id': 'extrusion',
//         'type': 'fill-extrusion',        
//         // 'source': 'data',
//         'source' : "https://api.mapbox.com/datasets/v1/arunkoshy18/cjt4107q10x2a33qsgwxt34mp/features?access_token=pk.eyJ1IjoiYXJ1bmtvc2h5MTgiLCJhIjoiY2pxejNqMTl2MDdseTQ4cGNpdXN6OXE2ZiJ9.C9NoJtuiT9pDw5pyhYZxhQ" ,
//         'paint': {          
//             'fill-extrusion-height': ['/', ['number', ['get', 'jobs'],0], 1000],
//             'fill-extrusion-base': 0,
//             'fill-extrusion-color': '#3887be',
//             'fill-extrusion-opacity': 1
            
//         }
//     }); 



   // var doc = JSON.parse(geojson);
   // print(doc);
  
  
//    var		geojson2 =  {
// 		"type": "FeatureCollection", 
// 		"features": 
// 					[
// 		{"id": 1,
// 		"type": "Feature", 
// 					"properties": 
// 							{"year": 2012, 
// 							"jobs": 361000,
// 		"jobsDensity" : 67.1
// 		}, 
// 					"geometry": 
// 							{"type": "Polygon",              
// 							"coordinates":[[ [-0.0919444, 51.5161],
// 		[-0.0819444, 51.5161],
// 		[-0.0819444, 51.5261],
// 		[-0.0919444, 51.5261]                             
// 		]]
// 		}
// 		}, 
// 					{"id": 2, 
// 					"type": "Feature", 
// 					"properties": 
// 							{"year": 2012, 
// 							"jobs": 57000,
// 		"jobsDensity" : 0.56
// 		}, 
// 					"geometry": 
// 							{"type": "Polygon",              
// 							"coordinates":[[ [0.152614, 51.5636],
// 		[0.162614, 51.5636],
// 		[0.162614, 51.5736],
// 		[0.152614, 51.5736]]]
// 		}
// 		}
// 		]
