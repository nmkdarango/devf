// get
// post
// delete
// put
// patch

const request = require('request');
/*
request.get("http://pokeapi.co/api/v2/pokemon/pikachu/", function(error, response, body){
    if(error){
        console.log(error);
    }else{
        console.log(JSON.parse(body));
    }
    console.log(this);
});
//*/
let urlPokemon = "http://pokeapi.co/api/v2/pokemon/";
//*
request.get(urlPokemon+"pikachu", (err,res,body)=>{
    if(res.statusCode===200){
        let json = JSON.parse(body);
        console.log(json.name);
    }else{
        console.log(err);
    }
    //console.log(this);
})
//*/

let urlGoodReads = "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";
/*
let user = {
    name: "Youtt",
    last_name: "Anon",
    nacionalidad: "MX",
    biography: ":)",
    gender: "M",
    age: 100,
    is_alive: false
}
request.post(urlGoodReads, {form:user}, (err,res,body)=>{
    console.log(res.statusCode);
    let json = JSON.parse(body);
    console.log(json);
});
//*/
/*
let user = {
    name: "Daniel"
}
request.patch(urlGoodReads+'3508/', {form:user}, (err,res,body)=>{
    console.log(res.statusCode);
    let json = JSON.parse(body);
    console.log(json);
});
//*/

/*
let user = {
    name: "Daniel 2",
    last_name: "Anon",
    nacionalidad: "MX",
    biography: ":)",
    gender: "M",
    age: 100,
    is_alive: false
}

request.put(urlGoodReads+'3508/', {form:user}, (err,res,body)=>{
    console.log(res.statusCode);
    let json = JSON.parse(body);
    console.log(json);
});
//*/
/*
request.delete(urlGoodReads+'3508/', (err,res,body)=>{
    console.log(res.statusCode);
    console.log(body);
});
//*/