// Assignment 10 - ES6 Classes and ES Modules
// person.js
"use strict";

export class Person {
  constructor(name, dateOfBirth) {
    this._name = name;
    this._dateOfBirth = dateOfBirth;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    this._name = newName;
  }

  getDateOfBirth() {
    return this._dateOfBirth;
  }

  setDateOfBirth(newDateOfBirth) {
    this._dateOfBirth = newDateOfBirth;
  }

  toString() {
    const year = this._dateOfBirth.getFullYear();
    const month = this._dateOfBirth.getMonth() + 1;
    const day = this._dateOfBirth.getDate();

    return `{ Name: ${this._name}, DateOfBirth: ${year}-${
      month < 10 ? "0" : ""
    }${month}-${day < 10 ? "0" : ""}${day} }`;
  }
}

