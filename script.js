// 1.how to compare two json have the same properties without order

var obj1 = {
    "name" : "person1",
    "age" : 5
};
var obj2 = {
    "age" : 5,
    "name" : "person1"
};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

// 2.Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
	var data = request.response;
	//console.log(data);
    var result = JSON.parse(data);
	console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}

// 3.Use the same rest countries and print all countries names, regions, sub-region and popultions

//a.Names:

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
	var data1= request1.response;
	//console.log(data);
    var result1 = JSON.parse(data1);
	console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name);

    }
}

//b.Regions:

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload = function(){
	var data2= request2.response;
	//console.log(data);
    var result2 = JSON.parse(data2);
	console.log(result2);
    for(var i=0;i<result2.length;i++){
        console.log(result2[i].region);
        
    }
}

//c.sub-region:

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function(){
	var data3= request3.response;
	//console.log(data);
    var result3 = JSON.parse(data3);
	console.log(result3);
    for(var i=0;i<result3.length;i++){
        console.log(result3[i].region);
        
    }
}

//d.population

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload = function(){
	var data4= request4.response;
    var result4 = JSON.parse(data4);
	console.log(result4);
    for(var i=0;i<result4.length;i++){
        console.log(result4[i].population);
        
    }
}



