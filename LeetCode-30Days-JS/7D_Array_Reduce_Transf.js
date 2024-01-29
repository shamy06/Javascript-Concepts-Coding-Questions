/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let value = fn(init,nums[0])
   if(nums.length > 0){
       for(let i=1;i<nums.length;i++){
           value=fn(value,nums[i]);
       }
       return value;
   }
   else{
    return init;
   }
};