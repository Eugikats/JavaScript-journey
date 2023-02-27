function laptop(name, color, size, os, model, brand){
this.name = name;
this.color =color;
this.size = size;
this.os = os;
this.model = model;
this.brand = brand;
this.work = ()=> {
    return `This laptop ${this.name} works fine`;
 }
}

let add = (a, b) =>{
return a+b
}
console.log(add(4,5))