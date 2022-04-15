class pizza {
    constructor(nombre,id,precio, ingredientes){
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.ingredientes = ingredientes
    }

    
}





const pizza_muzarella = new pizza("muzarella",1,500,["quesomuzarrella", "salsa", "oregano", "aceituna"])
  
const pizza_fuggazeta = new pizza("fuggazeta",2,550,["queso", "cebolla", "oregano", "aceituna"] )
 
const pizza_rucula = new pizza("rucula",3,630,["queso", "rucula", "tomate", "aceituna"] )
   
const pizza_jamon = new pizza("jamon",4, 620,["queso", "jamon", "oregano", "aceituna"])
  
const pizza_roquefort = new pizza("roquefort",5, 540, ["quesoroquefort","oregano", "aceituna"])
  
const pizza_calabresa = new pizza("calabresa",6, 570, ["quesomuzarrella", "salsa", "calabreza","provenzal", "oregano", "aceituna"] )


pizzas = [pizza_muzarella,pizza_fuggazeta,pizza_rucula, pizza_jamon, pizza_roquefort, pizza_calabresa]

console.log("las pizzas con id impares son:")
for (i=0;i < pizzas.length; i++)
    if (pizzas[i].id % 2 !== 0)
        console.log(pizzas[i].nombre)
    else
        continue

var verdadero = 0

for (i=0;i < pizzas.length; i++)
    if (pizzas[i].precio < 600)
       verdadero = 1        
    else
        continue

if (verdadero === 1)
    console.log("hay pizzas con un precio menor a 600 pesos")
    


console.log("los nombres de todas las pizzas son: ")
for (i=0;i < pizzas.length; i++)
        console.log(pizzas[i].nombre)

console.log("el precio de cada pizza es:")
for (i=0;i < pizzas.length; i++)
        console.log(pizzas[i].nombre, ": ",pizzas[i].precio)

 
    

 