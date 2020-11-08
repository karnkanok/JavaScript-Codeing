(()=>{

// ~~~~~~ 1. How to Asynchronous code 
// simulateAsyncAPsimulateAsyncAPI การเรียกใช้
   
    // function simulateAsyncAPI(text,timeout){
    //     setTimeout(()=> console.log(text),timeout);
    // }
    // //เรียกใช้ A
    // simulateAsyncAPI('A',2000);
    // simulateAsyncAPI('B',1000);
    // simulateAsyncAPI('C',500);
    // simulateAsyncAPI('D',100);


// ~~~~~~ 2. Callback

    // function simulateAsyncAPI(text,timeout,Callback){
    //     setTimeout(()=>{
    //         console.log(text)
    //         Callback();

    //         //ในการณีของ c ที่ไม่มี()=>{}
    //         if(Callback){
    //             Callback();
    //         }
    //     },timeout);
    // };
    //     //callback hell = ซ้อน f เยอะ
    // simulateAsyncAPI('A',1000,()=>{
    //     // console.log('callback')
    //     simulateAsyncAPI('B',500,()=>{
    //         simulateAsyncAPI('C',100);
    //     });
    // });

// ~~~~~~ 3. promise
    // //แก้ปัญหา    callback hell
    // function simulateAsyncAPI(text,timeout){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // กรณีมี error
    //             if( text === 'B') return reject('B got rejected');

    //             console.log(text);
    //             resolve();
    //         }, timeout);
    //     });
    // }
    // simulateAsyncAPI('A',1000)
    //     .then(()=>{
    //         return simulateAsyncAPI('B',500);
    //     })
    //     .then(()=>{
    //         return simulateAsyncAPI('C',100);
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     });


// ~~~~~~ 4. Async/Await
            //  เพื่อแก้กัารใช้ . เยอะๆ
    function simulateAsyncAPI(text,timeout){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // กรณีมี error
                // if( text === 'B') return reject('B got rejected');

                console.log(text);
                resolve();
            }, timeout);
        });
    }
   async function run() {
    try {
        await simulateAsyncAPI('A',1000);
        await simulateAsyncAPI('B',500);
        await simulateAsyncAPI('C',100);
    } catch(error){
        console.error(error);
    }
   }
    run();
})();