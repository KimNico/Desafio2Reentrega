let Contenedor = require("./contenedor");
let contenedor = new Contenedor("productos.txt");



const main = async()=>{
    let newProd= await contenedor.save({
        "title":"auto",
        "price":1354,
        "foto":"url"
    })   
    console.log(await contenedor.getAll());

    let num =3 ;
    await contenedor.deleteById(num);
    console.log(await contenedor.getById(num));

    console.log(await contenedor.getAll());
}

main();


