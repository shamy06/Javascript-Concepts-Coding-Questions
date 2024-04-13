functionCount =(str)=>{
    const lowerCaseString=str.toLowerCase();
    const strObj ={}
   for (let char of lowerCaseString){
       if(/[a-z]/.test(char)){
           strObj[char]=(strObj[char] || 0) + 1;
       }
   }
    return strObj
    
}
str ="This is my new string with all counts"
const output = functionCount(str);
console.log(output)