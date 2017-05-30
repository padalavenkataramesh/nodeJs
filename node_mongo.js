var http = require('http');

var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb://localhost:27017/ramesh";


MongoClient.connect(URL, function(err, db){
	
	if(err) throw err; 
	
	var query = {emp_number:"1"};
		
	var mysort ={ emp_name: 1 } // ascending
	var mysort ={ emp_name: -1 } // descending
	
	db.collection('collection1').find(query).sort(mysort).toArray(function(err,result){
		
		if(err) throw err; 
		
			console.log(result);
		
		
	});
	
	
});




