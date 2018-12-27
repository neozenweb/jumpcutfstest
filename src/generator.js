export var factorial = {
   init: function(){alert("here");return 1;},
    next : function(val) {
     var finalval=1;
      for(var ctr=1;ctr<=val+1;ctr++)
      {
         finalval = finalval*ctr;
         
        }
         alert("factorial is "+finalval);
    return finalval;
  }
  
};

export var fibonacci = {
      init: function(){return 1;},
    arrval:function(nm){var accum=[1];var prev=0;
                        alert("nm is " + nm);
                       if(nm >=2)
                           {

                               for(var i=0;i<nm;i++)
                                {
                                    if(i<2)
                                        {
                                            prev = prev + accum[i];
                                            accum.push(prev);
                                        }
                                    else
                                        {
                                            prev = accum[i-1] + accum[i];
                                            accum.push(prev);
                                        }
                               }
                           }
                        else{
                            prev = prev+accum[accum.length-1];
                                accum.push(prev);
                        }
                            
                         alert("here in fibonacci " + accum);
                        return accum;
                       },
            next : function(val) {
             var finalval=1;
                var accumarr= this.arrval(val);

      
             finalval=accumarr[accumarr.length-1];
       
         alert("fibonacci is "+finalval);
    return finalval;
  }
  
};
export var prime = {
      init: function(){return 2;},
    arrval:function(nm){
                        var arrprm=[2];
                         var pval=nm+2;
                         var flg=0;
                        for(var j=0;j<arrprm.length;j++)
                        {
                            
                            if(pval % arrprm[j] === 0)
                                flg=1;
                            else
                                flg=0;
                              
                        }
                         if(flg===0)
                              arrprm.push(pval);
                        return arrprm;
                       },
            next : function(val) {
             var finalval=1;
                var accumarr= this.arrval(val);

      
             finalval=accumarr[accumarr.length-1];
       
         alert("prime is "+finalval);
    return finalval;
  }
  
};

/*

function factorialSeq () {S...} // 1, 1, 2, 6, 24, ...
function fibonacciSeq () {...} // 1,	1, 2, 3, 5, 8, 13, ... 
function rangeSeq (start, step) {...} // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
function primeSeq () {...} // 2,	3, 5, 7, 11, 13, ...
function partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end

*/