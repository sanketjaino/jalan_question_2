class coffee{
	constructor(name,milk, cream, latte){
		this.name = name;
		this.milk = milk;
		this.cream = cream;
		this.latte = latte;

	}
	getName(){
		return this.name;
	}
	getMilk(){
		return this.milk;
	}
	getCream(){
		return this.cream;
	}
	getLatte(){
		return this.latte;
	}
}

const Expresso = new coffee('Expresso',60,75,100 )
const Capuccino = new coffee('Capuccino',80, 90, 125)
const Latte = new coffee('Latte', 100, 125, 150)
let more = "yes";

while(more=="yes" || more == "Yes"){
alert("Enter 1 for Expresso \n 2 for Capuccino \n 3 for Latte")
const coffee = prompt("Enter the number for coffee");
alert("Enter 1 for Milk \n 2 for Cream \n 3 for Latte")
const addOn = prompt("Enter the number for add-On");
switch(coffee){
	case "1":{
		if(addOn === 1)
		alert("Amount to be paid" + Expresso.getMilk());
		if(addOn == 2)
		alert("Amount to be paid" + Expresso.getCream());
		if(addOn == 3)
		alert("Amount to be paid" + Expresso.getLatte());
        more = prompt("Do you want to order more coffee?")
		// more = prompt("Enter your choice");

		break;


	}
	case "2":{
		if(addOn === 1)
		alert("Amount to be paid" + Capuccino.getMilk());
		if(addOn == 2)
		alert("Amount to be paid" + Capuccino.getCream());
		if(addOn == 3)
		alert("Amount to be paid" + Capuccino.getLatte());
        more = prompt("Do you want to order more coffee?")
		// more = prompt("Enter your choice");

		break;
		

	}
	case "3":{
		if(addOn === 1)
		alert("Amount to be paid" + Latte.getMilk());
		if(addOn == 2)
		alert("Amount to be paid" + Latte.getCream());
		if(addOn == 3)
		alert("Amount to be paid" + Latte.getLatte());
        more = prompt("Do you want to order more coffee?")
        // console.log(more);
		// more = prompt("Enter your choice");
        break;
	}
	default:
		console.log("Enter valid Input");


		

}
}

