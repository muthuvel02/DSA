class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    // console.log("hash_value", hash);
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }
  key() {
    const keyValueParis = this.data
    const keyValue =[];
    for (let i = 0; i <keyValueParis.length; i++) {
      if (keyValueParis[i]) {
        for(let j= 0; j<keyValueParis[i].length; j++)
        {
         keyValue.push(keyValueParis[i][j][0])
        }
      }
    }
    return console.log('allKeys',keyValue);
  }
}

const hashTable = new myHashTable(50);
console.log(hashTable);
// hashTable._hash('apple');
hashTable.set("orange", 1000);
hashTable.set("apple", 300);
hashTable.set("Fig", 300);
hashTable.set("Almond", 300);

hashTable.key();
// console.log(hashTable.get("orange"));
