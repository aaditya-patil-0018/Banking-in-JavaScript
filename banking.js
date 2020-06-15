//Interest
function interest(p, r, n, mv){
  var principal = p;
  var rate = r;
  var month = n * 12;
  var maturityValue = mv;
  if(maturityValue === undefined){
    var inter = principal * rate * month * (month + 1);
    var finalInter = inter / 2400;
    return "Interest = " + finalInter;
  }
  else{
    var inter = maturityValue - (principal * month);
    return "Interest = " + inter;
  }

}

//Write given between the parentheis after interest
console.log(interest());

//Maturity Value
function maturityValue(p, r, n, int){
  var principal = p;
  var rate = r;
  var month = n * 12;
  var interest = int;
  if(interest === undefined){
    var inter = principal * rate * month * (month + 1);
    var finalInter = inter / 2400;
    var mv = (principal * month) + finalInter;
    return "Maturity Value = " + mv;
  }
  else{
    var mv = (principal * month) + interest;
    return "Maturity Value = " + mv;
  }
}

//Write given between the parentheis after maturityValue
console.log(maturityValue());


//Principal
function principal(r, n, int, mv){
  var rate = r;
  var month = n * 12;
  var interest = int;
  var maturityValue = mv;

  if(maturityValue === undefined ){
    var prin = interest * 2400;
    var princi = prin / (rate * month * (month + 1));
    return "Principal = " + princi;
  }
  else{
    var prin = maturityValue - interest;
    var princi = prin / month;
    return "Principal = " + princi;
  }
}

//Write given between the parentheis after principal
console.log(principal());


//Rate
function rate(p, n, inte, mv){
  var principal = p;
  var month = n * 12;
  var interest = inte;
  var rat = interest * 2400;
  var finalRate = rat / (principal * month * (month + 1));
  return "Rate = " + finalRate;
}


//Write given between the parentheis after rate 
console.log(rate());
ss