import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  dataTable=[];
  constructor(private httpClient: HttpClient) { }
  singleRow: any
  ngOnInit(): void {
    this.httpClient.get('/assets/listData.json').subscribe(res => {
      this.dataTable.push(res);
      
      // this.singleRow = this.dataTable["data"];
      console.log("DataTable-------->",[this.dataTable[0].data][0][0]);
    })
  }
  
  getHeaders() {
    // console.log("inside header",[[this.dataTable[0].data][0][0]);
    let headers: string[] = [];
    if([[this.dataTable[0].data][0][0]]) {
      [[this.dataTable[0].data][0][0]].forEach((value) => {
        Object.keys(value).forEach((key) => {
          console.log("keys",key)
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    } 
    return headers;

  }

}
