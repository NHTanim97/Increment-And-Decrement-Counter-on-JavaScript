
    // plus btn
    let plusBtn = document.getElementById('plusBtn');
    plusBtn.addEventListener('click', ()=>{

        /*functon call করা হয়েছে
        parameter true নেওয়া হয়েছে */
        productCount(true)
    })


    // Subtraction btn
    let subBtn = document.getElementById('subBtn');
    subBtn.addEventListener('click', ()=>{

        /*function call করা হয়েছে
        parameter true নেয়া হয়েছে */
        productCount(false)
        
    })

    // function call & parameter product
    function productCount(product){
        let inputBox = document.getElementById('inputBox').value;
        let newInputBtn = parseInt(inputBox);
        let totalProduct = newInputBtn;

        /*
          ওপরে function name true & false বলে call করা হয়েছে ।
          function parameter product যদি true হয় তাহলে ১ করে
          বারবে । আর যদি false হয় ১ করে কমবে ।
        */
        if (product === true){
            totalProduct = newInputBtn + 1;
        }

        /* এখানে ২ টা condition বলা হয়েছে একটা হল false
           আর একটা হল newInputBtn 0 থেকে বড় মানে - sub
           মান হতে পারবে না ।
        */
        if (product === false && newInputBtn > 0){
            totalProduct = newInputBtn -1;
        }

        document.getElementById('inputBox').value = totalProduct;

        /*
          total quantity বের করার জন্য ।
        */
        document.getElementById('totalQuantity').innerHTML = totalProduct;
    }


    // buy Now btn
    /*
        buy now btn এর ভিতরে 1st inputBox এর value number এ করা হয়েছে ।
        product এর price এর সাথে totalProduct মানে inputBox value * গুন করা হয়েছে ।
        গুন করে totalPrice innerHTML করে দেয়া হয়েছে totalProduct
    */
    let buyNow = document.getElementById('buyNow');
    buyNow.addEventListener('click', ()=>{
        let inputBox = document.getElementById('inputBox').value;
        let newInputBtn = parseInt(inputBox);
        let totalProduct = newInputBtn * 9000;

        document.getElementById('totalPrice').innerHTML = totalProduct;
    })

    