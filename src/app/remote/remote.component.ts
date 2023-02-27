import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  constructor() { }
  rows:ElementRef[] = new Array(4);
  toggle:boolean[][] = Array.from(Array(4), () => new Array(4));


  change(row:number, index:number){
    for (let i=0;i<this.toggle[row].length;i++){
      this.toggle[row][i] = false;
    }
    this.toggle[row][index] = !this.toggle[row][index];
  }

  ngOnInit(): void {
  }

}
