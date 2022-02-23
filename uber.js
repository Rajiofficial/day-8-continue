class uber{
    constructor(price){
        this.price=price;
        console.log("enter amount")
        console.log(price)
    }
    uberprice(){
        let s=this.price*45
        return s
    }
    uber_amount(d){
        for(let i of d){
            console.log(i)
        }
    }
}
let c=new uber(30);
let n=c.uberprice()
console.log(n)
c.uber_amount(s)
