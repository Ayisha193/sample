const greetFn=(name)=>{
    console.log(`hello,${name}!`);
}
function processname(callback){
    const name="ishabbu";
    callback(name);
}
processname(greetFn);  