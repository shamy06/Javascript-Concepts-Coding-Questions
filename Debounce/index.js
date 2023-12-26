let counter = 0;
const saveInput=()=>{
    console.log("Function tiggered",counter++)
}

const debounce=function (func,timeout){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(this,args);
        },timeout);
    };
}

const Search=debounce(()=>saveInput(),300)
