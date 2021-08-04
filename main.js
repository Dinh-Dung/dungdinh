
/*
function User(firstName,lastName,avatar){
	this.firstName= firstName;
	this.lastName=lastName;
	this.avatar=avatar;
	this.getName =function(){
		return `${this.firstName} ${this.lastName}`
	}
}
User.prototype.className='F8';

User.prototype.method_name = function(){
	return this.className;
};
var authod =new User('Dung','Dinh','avatar');
var user=new User ('bye','hello','avatar');
authod.title='Vipp pro 123';
user.comment='hay qua bro';

//console.log(authod.getName());
//console.log(user.getName());
console.log(authod);
//console.log(authod.className);
//console.log(authod.className);

*/

//var date= new Date();
 // var year = date.getFullYear();
 // var month = date.getMonth()+1;
 // var day = date.getDate();
 // var hours= date.getHours();
 // console.log(`${year}/${month}/${day}`);
 

 //var course={
 //	name:'Javascript',
 //	coin: 0,
//};
 //var result=course.coin >0 ? `${course.coin} coin`:'Mien phi';
 //console.log(result);


 //for(var i=0;i<=1000;i++){
 //	console.log(i);
 //}

 //var myArray=[
 //'Javascript',
 //'Ruby',
 //'Python',
 //'Java',
 //];
 //var arrayLength=myArray.length;

 //for(var i=0;i<arrayLength;i++){
 	//console.log(myArray[i]);
 //}

/*var myArray=[
[1,2],
[3,4],
[5,6]
];
for(var i=0;i<myArray.length;i++){
	for(var j=0;j<myArray[i].length;j++){
		console.log(myArray[i][j]);
	}
}
*/
//for(var i=0;i<=100;i++)
//{
//	console.log(i);
//}



/*

var courses=[
{
	id:1,
	name:'Javascript',
	coin:1
},
{
	id:2,
	name:'PHP',
	coin:5
},
{
	id:3,
	name:'Java',
	coin:7
},
{
	id:4,
	name:'Ruby',
	coin:19
},
{
	id:5,
	name:'Python',
	coin:20
},
];
*/
	//function courseHandler(courses){
	//		return {
	//			id:courses.id,
	//			name:`'Khoa hoc' ${courses.name}`,
	//			coin: courses.coin,
	//			Textcoin: `'Gia'${courses.coin}`
	//		}
//	}


//var newCourses= courses.map(courseHandler);
//console.log(newCourses);


/*	var newCourses=courses.map(function(courses){
		return{
			id:courses.id,
				name:`'Khoa hoc' ${courses.name}`,
				coin: courses.coin,
				Textcoin: `'Gia'${courses.coin}`,

		};
		return newCourses;
	});
	console.log(newCourses);
	*/


//	 var totalCoin=0;
	// for(var course of courses )
	// 	totalCoin += courses.coin;
//	 }
//	 console.log(totalCoin);



//reduce
// var number = [1,[2,3,4],5,6,[7,8,9]];

// var flatnumber= number.reduce(function(acc,curr){
// 	return acc.concat(curr);
// },[]);
// console.log(flatnumber);


/*
Array.prototype.reduce2=(function(callback,result){
	i=0;
	if(arguments.length<2){
		i=1;
		result = this[0];
	}
	for(i<this.length;i++){	
		result = callback(result,this[i],i,this)
	}
})
*/

/*
var random =Math.floor(Math.random()*100);
if(random<50){
	console.log('ban da cuong hoa thanh cong');
}
*/


// Array.prototype.forEach2 = function(callback){
// 	for(var index in this){
// 	this.hasOwnProperty(index);
// 		if(this.hasOwnProperty(index)){
// 			callback(this[index],index,this);
// 		}
// 	}
// };




// filter
// Array.prototype.filter2 = function(callback){
// 	var outPut = [];
// 	for(var index in this){
// 		this.hasOwnProperty(index);
// 		if(this.hasOwnProperty(index)){
// 		var result  = callback(this[index],index,this);
// 		if(result){
// 			outPut.push(this[index])
// 		}
// 		}
// 	}
// 	return outPut;
// };



// var courses=[
// {
// 	id:1,
// 	name:'Javascript',
// 	coin:1
// },
// {
// 	id:2,
// 	name:'PHP',
// 	coin:5
// },
// {
// 	id:3,
// 	name:'Java',
// 	coin:7
// },
// {
// 	id:4,
// 	name:'Ruby',
// 	coin:19
// },
// {
// 	id:5,
// 	name:'Python',
// 	coin:20
// },
// ];

  
// var newCourses= courses.filter2(function(element,index,array) {
// 	return element.coin >=9;
// });
// console.log(newCourses);