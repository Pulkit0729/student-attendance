class Student {
  constructor(name, rollNo, checkIn, checkOut) {
    this.name = name;
    this.rollNo = rollNo;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }
  setCheckout(checkOut) {
    this.checkOut = checkOut;
  }
}

export default Student;
