import { Component, Input, OnInit } from '@angular/core';
import { Sudoku } from '../suduko';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() sudoku!: Sudoku; 

  constructor() { }

  ngOnInit(): void {
  }

}
