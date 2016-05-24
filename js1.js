// loop practice #1

// 0 100 200 300 400 500
for (var i = 0; i < 501; i+= 100) {
	console.log(i);
}
console.log('===================');

// 1 2 4 8 16 32 64
for (var i = 1; i < 65; i*= 2) {
	console.log(i);
}
console.log('===================');

// 1 1 1 2 2 2 3 3 3
for (var i = 1; i < 4; i++) {
	for (var j = 1; j < 4; j++) {
		console.log(i);
	}
}
console.log('===================');

// 0 2 4 6 8 10
for (var i = 0; i < 11; i+= 2) {
	console.log(i);
}
console.log('===================');

// 3 6 9 12 15
for (var i = 3; i < 16; i+= 3) {
	console.log(i);
}

console.log('===================');

// 9 8 7 6 5 4 3 2 1 0
for (var i = 9; i > -1; i--) {
	console.log(i);
}

console.log('===================');

// 0 1 2 3 0 1 2 3 0 1 2 3
for (var i = 1; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		console.log(j);
	}
}