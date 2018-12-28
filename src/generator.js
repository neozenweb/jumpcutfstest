// factorial function that returns both the initial and then the subsequent next values
export var factorial = {
   init: function(){return 1;},
    next : function(val) {
     var finalval=1;
      for(var ctr=1;ctr<=val+1;ctr++)
      {
         finalval = finalval*ctr;
         
        }
         
    return finalval;
  }
  
};

// range function that takes in the start and step numeric values and returns the initial and subsequent next values.
export var range = {
   init: function(start){return start;},
    next : function(val,start,step) {
     var finalval;
       
         finalval = start + step*(val+1);
        return finalval;
  }
  
};

//fibonacci sequence returns the initial and the subsequent values from the series.

export var fibonacci = {
      init: function(){return 1;},
    arrval:function(nm){
                         var accum=[1];var prev=0;
                       
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
                            
                         
                        return accum;
                       },
            next : function(val) {
             var finalval=1;
                var accumarr= this.arrval(val);

      
             finalval=accumarr[accumarr.length-1];
       
        return finalval;
  }
  
};

//Prime function returns the prime numbers from the series

export var prime = {
      init: function(){return 2;},
    arrval:function(nm){
                        var arrprm=[2];
                        
                        var flg=0;
                       for(var itr=2;itr <= nm+20;itr++)
                           {
                               
                            var pval=itr;
                            flg=0;
                                for(var j=0;j<arrprm.length;j++)
                                {

                                    if(pval % arrprm[j] === 0)
                                        {
                                                flg=1;
                                                  break;
                                        }
                                    
                                }
                            if(flg===0)
                              arrprm.push(pval);
                              
                        }
                       
                         return arrprm;
                       },
            next : function(val) {
             var finalval=1;
                var accumarr= this.arrval(val);

      
             finalval=accumarr[val];
       
        return finalval;
  }
  
};

