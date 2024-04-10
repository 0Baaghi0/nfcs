import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-add-employee',
  templateUrl: './bulk-add-employee.component.html',
  styleUrls: ['./bulk-add-employee.component.css'],
})
export class BulkAddEmployeeComponent implements OnInit{

  bulkAddUrl="http://127.0.0.1:5000/uplodeexcel"
constructor(
private _http:HttpClient
){}
  ngOnInit(): void {}

  file:any;
  selectFile(event: any) {
    this.file=event.target.files[0];
    console.log(this.file);
  }

  uploadFile() {
    let formData = new FormData();
    formData.append("hllo",this.file);

    this._http.post<any>(this.bulkAddUrl, formData ).subscribe(
      (response)=>{
        alert("Success")
        console.log("File is uploaded",response)
      },
    (error)=>{
      alert("Failure")
      alert(error)
    })
  
    }

}
