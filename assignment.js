// Problem Number 1
function feetToMile(feet){
    var Mile = feet * 0.000189393939;

    return Mile;
}
var feet = feetToMile(50)
console.log("Mile = ", feet);

// Problem Number 2
function woodCalculator(chair, table, bed){
    var chairWood = chair * 2;
    var tableWood = table * 5;
    var bedWood = bed * 10;

    var TotalWoodNeed = chairWood + tableWood + bedWood;

    return TotalWoodNeed;
}
var Wood = woodCalculator(2, 3, 2);
console.log("Total Wood Need = ", Wood);

// Problem Number 3


// Problem Number 4
function tinyFriend(frnd_name) {
    var min = frnd_name[0].length;
    frnd_name.map(v => min = Math.min(min, v.length));
    result = frnd_name.filter(v => v.length == min);

    return result;
  }
console.log("Small Name = ",tinyFriend(['Syket', 'Mehedi', 'Solaiman', 'Mahtabur']));