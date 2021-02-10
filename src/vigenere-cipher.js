const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value=true){
        if (value === undefined) {
          throw new Error();
        }
        this.value = value;
        this.alphaArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      }
  encrypt(msg, key) {
     if (msg === undefined || key === undefined) {
       throw new Error();
     }
        let keyArray = key.toUpperCase().split('');
        let keyPosition = 0;
        let retValue = msg.toUpperCase().split('').map( x => {
            if (this.alphaArray.indexOf(x) >= 0){
                let shift = this.alphaArray.indexOf(keyArray[keyPosition]);
                let newIdx = (shift + this.alphaArray.indexOf(x)) % this.alphaArray.length;
                keyPosition = ++keyPosition % keyArray.length;
                return this.alphaArray[newIdx];
            }
            return x;
        } );
        return this.value ? retValue.join('') : retValue.reverse().join('');
  }   
  decrypt(msg, key) {
      if (msg === undefined || key === undefined) {
        throw new Error();
      }
        let keyArray = key.toUpperCase().split('');
        let keyPosition = 0;
        let retValue = msg.toUpperCase().split('').map( x => {
            if (this.alphaArray.indexOf(x) >= 0){
                let shift = this.alphaArray.indexOf(keyArray[keyPosition]);
                let newIdx = (this.alphaArray.indexOf(x) - shift);
                if (newIdx < 0) newIdx += this.alphaArray.length;
                keyPosition = ++keyPosition % keyArray.length;
                return this.alphaArray[newIdx];
            }
            return x;
        });
        return this.value ? retValue.join('') : retValue.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
