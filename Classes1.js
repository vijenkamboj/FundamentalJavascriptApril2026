module.exports=class Car {
    constructor(make,model,year){//scope of constructor is local to make it golabl use this
        this.make=make;
        this.model=model;
        this.year=year;//scope become global by using this
    }    
    
    fullname(){//method of a class  
        console.log(this.make + " " + this.model);
    }
}   