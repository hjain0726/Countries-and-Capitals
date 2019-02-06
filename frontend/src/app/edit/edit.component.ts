import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  country;
  @ViewChild('f') editForm: NgForm;
  constructor(private apiService: ApiService, private router: Router) { }

  edit() {
    this.apiService.editData(this.apiService.country._id, this.editForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/listing']);
    });
  }
  ngOnInit() {
    this.country = this.apiService.country;
  }
}