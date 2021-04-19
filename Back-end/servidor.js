var express= require('express');
var bodyParser= require('body-parser');



//conexion

const { Pool } = require('pg');
const { json } = require('body-parser');
const pool = new Pool()

// This will be undefined since the property on pg is "Client" no "pgClient"


 const config ={
          user:'postgres',
  host:'localhost',
     password:'root',
     database:'zooshop'
 };



//query 



var app =express();




 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}))



// conexion//



//obtener producto

app.get('/productos',function(req,res){

 
     
     const pool = new Pool(config);
      const getproductos= async()=>{
          try{
     const resu =await pool.query('select * from productos');
     console.log(resu.rows);
     res.send(resu.rows);
  
 }
  
   catch(error){
       console.log(error);
   }
      }
 getproductos()
});


//obtener usuarios
app.get('/usuarios',function(req,res){
 
    const pool = new Pool(config);
    const getUsuarios=async()=>{
        try{
            const resultado= await pool.query('select * from usuarios');
            console.log(resultado.rows);
            res.send(resultado.rows);

        }
        catch(error){
            console.log(error);

        }
    }

  getUsuarios()
})
//obtener categorias


app.get('/categorias',function(req,res){
    const pool = new Pool(config);
    
    const getCategorias=async()=>{
        try{
            const resultado= await pool.query('select * from categorias');
            console.log(resultado.rows);
            res.send(resultado.rows);

        }
        catch(error){
            console.log(error);

        }
    }

  getCategorias()
})




//crear compra

app.post('/crearcompra',function(req,res){

    const pool = new Pool(config);
    const postCompras=async()=>{
        
           const {id_compra,descripcion,fk_idusuario,fk_idproducto} = req.body;
            const response = await pool.query('INSERT INTO compras (id_compra,descripcion,fk_idusuario,fk_idproducto) VALUES ($1,$2,$3,$4) ',[id_compra,descripcion,fk_idusuario,fk_idproducto] )
           console.log(response);
res.json({
    message:'compra exitosa',
    body:{
        compra:{
            id_compra,descripcion,fk_idusuario,fk_idproducto}
        
    }
})
            
           

        
    }

  postCompras()
})





//obtener compras

app.get('/compras',function(req,res){

    const pool = new Pool(config);
    const getCompras=async()=>{
        try{
            const resu= await pool.query('select * from compras');
            console.log(resu.rows);
            res.send(resu.rows);

        }
        catch(error){
            console.log(error);

        }
    }

  getCompras()


});



app.listen(8888,function(){
    console.log("servidor levantado")
});