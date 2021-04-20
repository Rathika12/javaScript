class square{
    //let num =10;
    
    squ(num) {
        let sq = num*num;
        return sq;
    }
}
let num = 10;
let obj = new square();
let res=obj.squ(num);
console.log(res);
