import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('f') createform: NgForm;
  res: string;
  constructor(private apiService: ApiService) { }

  create() {
    this.apiService.saveData(this.createform.value).subscribe((res) => {
      this.res = res['msg'];
    });
  }

  ngOnInit() {
  }

}
