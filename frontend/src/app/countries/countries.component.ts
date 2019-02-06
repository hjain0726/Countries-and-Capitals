import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries;
  constructor(private apiService: ApiService, private router: Router) { }

  edit(country) {
    this.apiService.setCountry(country);
    this.router.navigate(['/edit']);
  }

  delete(id){
    this.apiService.deletedata(id).subscribe((res)=>{
      console.log(res);
      this.initialize();
    });
  }

  initialize(){
    this.apiService.getData().subscribe((data) => {
      this.countries = data;
    });
  }
  ngOnInit() {
    this.initialize();
  }

}
