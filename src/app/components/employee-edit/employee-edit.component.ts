import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  data:any;
  employee = new Employee();
  constructor(private route:ActivatedRoute, 
              private dataService: DataService,
              private router:Router
    ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getEmployeeById(this.id).subscribe(res=>{
      this.data=res;
      this.employee = this.data;
    })
  }
  updateEmloyee(){
    this.dataService.updateData(this.id,this.employee).subscribe(res=>{
      alert('updated succesfully');
      this.router.navigateByUrl('/');
    })
  }
}
