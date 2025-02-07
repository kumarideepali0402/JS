const str=`{"name":"yuv"}`;
try{
    const obj=JSON.parse(str);
    document.querySelector(".content").innerHTML="parsed well...";
}
catch (error) {
    console.log(error.name);
    console.log("*********");
    
        console.log(error.message);
        // document.querySelector(".content").innerHTML=error.name;
    
}