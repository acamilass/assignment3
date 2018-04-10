import { Injectable } from '@angular/core';


export class HelperService {

  constructor() { }

  static getData(): String {
    const d = new Date();
    return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }



}




