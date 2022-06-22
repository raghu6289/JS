// finding length of uncommon letter

let name1="Raja".toLowerCase();
let name2="Rani".toLowerCase();
let len=0
let res=[];

for(let i=0;i<name1.length;i++){
    if(!(name2.includes(name1[i]))){
        len++;
        res.push(name1[i]);
    }
}
for(let j=0;j<name2.length;j++){
    if(!(name1.includes(name2[j]))){
        len++
        res.push(name2[j])
    }
}

// iterating through flames array to eliminate every len of number loop
let c=len;
let flames=["F","L","A","M","E","S"]
let count=1;
let idx=0;
while(flames.length>1){
    for(let i=0;i<flames.length;i++){
        if(c==count){
            flames.splice(idx,1)
            count=1
        }else{
            count+=1;
            idx+=1;
        }
        if(idx>flames.length-1){
            idx=0
        }
    }
}
// shwoing the fullString
let word=flames.toString()
switch(word){
    case("F"):
    console.log("Friend");
    break;
    case("L"):
    console.log("Love");
    break;
    case("A"):
    console.log("Affection");
    break;
    case("M"):
    console.log("Marriage");
    break;
    case("E"):
    console.log("Enemy");
    break;
    case("S"):
    console.log("Sister");
    break;
}