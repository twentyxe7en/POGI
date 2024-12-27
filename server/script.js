function show() {
	var pokemon = data.pokedex.pokemon[0];
	var lvl = data.pokedex.lvl[0];
	// document.getElementsByTagName("p")[0].innerHTML = pokemon + " Lv. " + lvl;
	console.log(pokemon + " Lv. " + lvl);
}

function login() {
	let usn = document.getElementsByTagName("input")[0].value;
	let psw = document.getElementsByTagName("input")[1].value;
	console.log("Username: " + usn + " Password: " + psw);
	let id = 0;
	for (var i = id; i < users.users.length; i++) {
		if (usn == users.users[i].username && psw == users.users[i].password) {
			id = i;
			console.log("Match found!");
			console.log(users.users[i].username + ", " + users.users[i].password);
			break;
		}
	}
}