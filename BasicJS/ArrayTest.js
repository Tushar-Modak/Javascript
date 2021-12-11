function animal(name,breed)
{
  this.name=name;
  this.breed=breed;

  this.call=function(){
    console.log(name+"calling");
  };
}

dog=new animal("dog","african");
cat=new animal("cat","indian");

console.log(dog.name);
console.log(cat.name);
cat.call();
