function sayHi() {

	alert(this.name);

}

sayHi.test = 5;

alert(sayHi.test); // 5

var bound = sayHi.bind({

	name: "Вася"

});
alert(bound.test);