
function ticket1() {
    function result1(){
        let result = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
    
    for(let b=0;b<3;b++){
    for(let a=0;a<5;a++){
        
        if(b==0){
    let index=Math.floor(Math.random()*9)
        let random=Math.floor(Math.random()*90+1)
        result[b][index]=random
        while(result[0][index]<result[1][index] && result[1][index]>result[0][index] ){
            random=Math.floor(Math.random()*90+1)
           result[0][index]=random
       }
    }
    }
    if(b==1) {
        let index=Math.floor(Math.random()*9)
        let random=Math.floor(Math.random()*90+1)
        result[1][index]=random
    
        while(result[1][index]>result[0][index] && result[1][index]<result[2][index] ){
             random=Math.floor(Math.random()*90+1)
            result[1][index]=random
        }
    }
    
    if(b==2) {
        let index=Math.floor(Math.random()*9)
        let random=Math.floor(Math.random()*90+1)
        result[2][index]=random
        
        while(result[2][index]>result[0][index] &&  result[2][index]>result[1][index]){
             random=Math.floor(Math.random()*90+1)
            result[2][index]=random
        }
    }
    
    }
    
    
    
    let arrOcount=0
    
    let arrTcount=0
    
    let arrTHcount=0
    
    
    for(let a2=0;a2<9;a2++){
        if(result[0][a2]>0){
             arrOcount++
        }
        if(result[1][a2]>0) {
            arrTcount++
       }
        if(result[2][a2]>0){
            arrTHcount++
       }
    }
    
    if(arrOcount<5){
        while(arrOcount<5){
            let index= result[0].indexOf(0)
            let random=Math.floor(Math.random()*90+1)
            result[0][index]=random;
            // console.log(index,random,result[0][index])
            while(result[0][index] <result[1][index] && result[0][index]< result[2][index] ){
             random=Math.floor(Math.random()*90+1)
            result[0][index]=random;
            }
            arrOcount++ ;
        }
        }
    
        if(arrTcount<5){
            while(arrTcount<5){
                let index= result[1].indexOf(0)
                let random=Math.floor(Math.random()*90+1)
                result[1][index]=random;
                while(result[1][index] > result[0][index] && result[1][index] < result[2][index] ){
                 random=Math.floor(Math.random()*90+1)
                result[1][index]=random;
                }
                arrTcount++ ;
            }
            }
    
            if(arrTHcount<5){
                while(arrTHcount<5){
                    let index= result[2].indexOf(0)
                    let random=Math.floor(Math.random()*90+1)
                    result[2][index]=random;
                    while(result[2][index] >result[0][index] && result[2][index] > result[1][index] ){
                     random=Math.floor(Math.random()*90+1)
                    result[2][index]=random;
                    }
                    arrTHcount++ ;
                }
                }
                return result;
            }
           let ticket1=result1()
           let ticket2=result1()
           return ([ticket1,ticket2])
            }
    
    
