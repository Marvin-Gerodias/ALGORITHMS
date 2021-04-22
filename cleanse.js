var object = {a:1, b:null, c:{d:undefined, e:4, f:[5,6,null,undefined,7]}};

function cleanse(obj){
    for (key in obj){

        if (obj[key] === null || obj[key] === undefined){
            delete obj[key];
        }

        if (typeof obj[key] === "object"){
            if (obj[key] === null || obj[key] === undefined){
                delete obj[key];
            }
            for(key2 in obj[key]) {
                if (obj[key][key2] === null || obj[key][key2] === undefined){
                    delete obj[key][key2];
                }
                if (Array.isArray(obj[key][key2])){
                    var arr = obj[key][key2];
                    for(var i = arr.length; i >= 0; i--){
                        if (arr[i] === null || arr[i] === undefined){
                            arr.splice(i, 1);
                        }
                    }
                    console.log("clean array", obj[key][key2]);
                }
            }
        }
    }
    return (obj);
}

console.log(cleanse(object));