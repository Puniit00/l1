function jump()
{
    console.log("jumping")
}

jump();

nums = [2,5,"puneet"];
console.log(nums);

emp = new Array()
console.log(emp);

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
    
}

lam = (x) => ( x*x )
console.log(lam);
console.log(lam(10));
console.info(lam(4));

list = [2,7,5,3,9]
console.log( list.filter( item => (item>5) ) );

list.forEach(element => {
    console.log(element);
});

a = {

    dance : function()
    {
        console.log("nacho");
    },

    arr : [34,78,67],

    name : "object"
}

console.log(a);