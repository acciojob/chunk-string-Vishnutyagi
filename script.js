function stringChop(str, n) {
	   if (str === null) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < str.length; i += n) {
        chunks.push(str.substring(i, i + n));
    }
    return chunks;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

alert(stringChop(str, size));
