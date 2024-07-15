class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const last = this.data[this.length - 1]; // taking the reference
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }
  delete(index) {
    const element =  this.data[index];
    this.ShiftItem(index);
    return element;
  }
  get(index)
  {
    return this.data[index]
  }

  ShiftItem(value) {
    for (let i = value; i < this.length -1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1]
    this.length --;
  }

  insertElement(index, value) {
    console.log(`Inserting the ${value} at ${index}`)
    this.shiftRight(index); // fist we are shifting the value eg:[1,2,3,4,5,6] I =3 v = 34
    this.data[index] = value;
    this.length++;
    console.log(`After shifting`, this.data)
  }
   shiftRight(index)

   {
    for(let i=this.length; i>index;i--)
    {
      this.data[i] = this.data[i-1]
    }
    console.log(`After shifting the item to the right${index}`, this.data);

    }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("there");
myArray.push("its me");
console.log(myArray);
// myArray.delete(1);
myArray.insertElement(3,"joe")
// console.log(myArray.get(2));
console.log(myArray);


