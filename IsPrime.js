function isPrime(num) {
    if (num <= 1) return false;
    if (num === 4) return false;
      for(i=2;2*i<num;i++) {
          if(num%i==0)
              return false;
      }
      return true;
  }