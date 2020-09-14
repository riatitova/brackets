module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
 
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (stack.length == 0 && str[i] == bracketsConfig[j][0]) {
        stack.push(str[i]);
      } else if (stack.length != 0) {
        //if close bracket
        if (str[i] == bracketsConfig[j][1]) {        
          if (stack[stack.length - 1] == bracketsConfig[j][0]) {          
            stack.pop();
          } else if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
            return false;
          } else if (bracketsConfig[j][0] == bracketsConfig[j][1]){
            if (stack.includes(str[i])) {
              return false; 
            }else {
              stack.push(str[i]);
            }

          }
          //if open bracket
        } else if (str[i] == bracketsConfig[j][0]) {
            stack.push(str[i]);
          }  
        } else if (stack.length == 0 && str[i] == bracketsConfig[j][1]){
          return false;
        }

      }
    } 
  if (stack.length != 0) {
    return false;
  }

  return true;
}
