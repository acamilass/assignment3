import { Injectable } from '@angular/core';


export class HelperService {

  constructor() { }

  static getData(): String {
    const d = new Date();
    return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

  /**
   * 
   * @param pathImage : Caminho da imagem
   */
  static backgroundImage(pathImage: string) {

    if (pathImage) {
      document.body.style.backgroundImage = `url("${pathImage}")`
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundSize = "cover";
    }
  }



}




