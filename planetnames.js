var n1 = ["Var", "Buh", "Sep", "Ver", "Zim", "Xix", "Xeon", "Yuop", "Uwn", "Zop", "Burma", "Spira", "Sest", "Ik", "Gah", "Vul", "Gruh", "Boti", "Phita"]
var n2 = ["nope", "aliv", "yke", "eon", "ilia", "ea", "era", "wei", "ion", "orth"]

function randomString(length) {
    return Math.random().toString(36);
}

function generateName(){
	return n1[Math.floor(Math.random() * n1.length)] + n2[Math.floor(Math.random() * n2.length)] + Math.floor((Math.random() * 99) + 1);
}

//(Math.floor(Math.random() * 100) + 1)
