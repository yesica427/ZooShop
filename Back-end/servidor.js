var express= require('express');
var bodyParser= require('body-parser');

//conexion
const {Pool}=require('pg');

const config ={
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'zooshop'
};




// getproductos();

// const { Client } = require('pg')
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) 
// await client.end()


// const { Client } = require('pg')
// const client = new Client()
// client.connect()
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) 
//   client.end()
// })


var app =express();









app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



// conexion//



//obtener producto
app.get('/productos',function(req,res){
    res.send("peticion recibida");
    const pool = new Pool(config);
const getproductos= async()=>{
    const res =await pool.query('select * from productos');
    console.log(res.rows);
}
getproductos()
});

//obtener usuarios
app.get('/usuarios',function(req,res){

})
//obtener categorias


app.get('/categorias',function(req,res){


})


//crear compra

app.post('/crearcompra',function(req,res){


});


//obtener compras

app.get('/compras',function(req,res){

});



app.listen(8888,function(){
    console.log("servidor levantado")
});