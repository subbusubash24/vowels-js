const a=prompt("enter the name");
var b=a.length;
let count=0;


for(let i=0;i<b;i++){
    if(a[i]=="a"|| b[i]=="e"|| c[i]=="i"|| d[i]=="o"|| e[i]=="u"){
        count++;
    }
}
console.log(count);