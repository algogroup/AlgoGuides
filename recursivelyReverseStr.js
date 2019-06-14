//PROBLEM: REVERSE A STRING USING RECURSION
//INPUT: "RADIO" => OUTPUT: "OIDAR"

function revStr(str) {
  let builder = "";
  if (str.length === 0) return "";
  builder += str[str.length - 1]; // add last char
  return builder + revStr(str.slice(0, -1)); //return builder str + recursive str -1 length
}
