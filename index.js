var num = 0

function takeANumber(line) {
  num++
  line.push(num)
 return `Welcome. You are number ${num}.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
} else {
  return `Currently serving ${katzDeliLine.shift()}.`;
}
}

function currentLine(line) {
  if (line.length === 0) {
    return("The line is currently empty.");
} else {
  var newLine = [];
  for (var i = 0; i < line.length; i++) {
    newLine.push(` ${i + 1}. ${line[i]}`) }
    return `The line is currently:${newLine}`;
}
}

    
    
   