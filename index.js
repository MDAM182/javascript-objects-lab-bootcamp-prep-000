var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return recipes ;
}
function updateObjectWithKeyAndValue(object, key, value) {
  const recipes = { prop:"1" , prop2:"2"} ;
  return recipes ;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = "1";
  return recipes;
}
