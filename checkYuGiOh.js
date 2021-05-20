function checkYuGiOh(n) {
    function checkYuGiOhRecursive(n) {
      if (typeof n == "string"){
      
      }
        var results = [];
      if (n === 1) {
        return '1';
      } 
      else {
        if (n % 2 === 0 && n % 3 === 0) {
          results.push('yu-gi');
        } else if (n % 2 === 0 && n % 5 === 0) {
            results.push('yu-oh');
        } else if (n % 3 === 0 && n % 5 === 0) {
            results.push('gi-oh');
        }else if (n % 2 === 0) {
                results.push('yu');
        }else if (n % 3 === 0) {
            results.push('gi');
    }else if (n % 5 === 0) {
        results.push('oh');
}

         else {
          results.push(''+ n);
        }
        return results.concat(checkYuGiOhRecursive(n - 1));
      }
     
    }
    
    return checkYuGiOhRecursive(n).reverse();
    
  };
  
  console.log(checkYuGiOh(10));
