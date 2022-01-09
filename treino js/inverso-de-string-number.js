function isString(val){
    return typeof val === "string";
}

function reverseString(s){
    
    try {
        isString(s)?"":console.log("aceitamos apenas strings");

        s = s.split("").reverse().join('');
    } catch (error){
        console.log(error.message);
    } finally{
        console.log(s);
    }
}
reverseString("1234");
