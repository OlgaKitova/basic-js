const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
members = members.map((item) => {
  if(typeof(item) == 'string') {
     return item.replace(/\s+/g,'').toUpperCase();
  }
});
members.sort();
let twoArray = [];
for(let i = 0; i < members.length; i++) {
if(typeof(members[i]) == 'string') {
  twoArray.push(members[i][0]);
}
}
return twoArray.join('');
};
