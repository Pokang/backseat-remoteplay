import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  constructor() { }
  toggle:boolean[] = new Array(16);


  change(index:number){
    this.toggle[index] = !this.toggle[index];
  } //This needs to take into account that only one dial can be pressed at once

  ngOnInit(): void {
  }

}
