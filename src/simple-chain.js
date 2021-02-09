const CustomError = require("../extensions/custom-error");

const chainMaker = {
  actualChain: [],
  getLength() {
   return this.actualChain.length;
  },
  addLink(value) {
   this.actualChain.push(value === undefined ? '' : String(value));
    return this;
  },
  removeLink(position) {
   try{
      if (isNaN(position) || position < 1 || position > this.actualChain.length || Math.round(position) != position) {
          throw new Error();
        }
      this.actualChain.splice(position - 1, 1);
      return this;
    }
    catch(ex){
      this.actualChain = [];
      throw new Error();
    }
  },
  reverseChain() {
     this.actualChain.reverse();
     return this;
  },
  finishChain() {
     let totalValue = this.actualChain.map(x => '( ' + x + ' )').join('~~');
     this.actualChain = [];
    return totalValue;
  }
};

module.exports = chainMaker;
