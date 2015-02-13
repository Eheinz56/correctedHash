//Eric Heinzma
//CMP 344
//2/12/15
//Example 8-5 is intended to get and add data to a hash table
//this fix will implement the get and put functions so the code will run


	load("HashTable.js");
	var hTable = new HashTable();
	hTable.buildChains();
	var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia",				 "Mike","Clayton", "Danny", "Jonathon"];
	for (var i = 0; i < someNames.length; ++i) {
		hTable.put(someNames[i]);
	}
	hTable.showDistro();

	function showDistro() {
		var n = 0;
		for (var i = 0; i < this.table.length; ++i){					if (this.table[i][0] != undefined) {
				print(i + ": " + this.table[i]);
			}
		}
	}

	function put(key, data) {
		var pos = this.betterHash(key);
		var index = 0;
		if (this.table[pos][index] == undefined) {
			this.table[pos][index+1] = data;
		}
//		++index;
		else {
			while (this.table[pos][index] != undefined) {
				++index;
			}
			this.table[pos][index] = data;
		}
	}

	function get(key) {
		var index = 0;
		var hash = this.betterHash(key);
		if (this.table[pos][index] = key) {
			return this.table[pos][index+1];
		}
//		index += 2;
		else {
			while (this.table[pos][index+1] != key) {
				index += 2;
			}
			return this.table[pos][index+1];
		}
		return undefined;
	}
	hTable.get("Jennifer");
