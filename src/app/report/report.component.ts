import { Component, OnInit, ViewChild } from "@angular/core";

// import Service
import { ApiService } from "./api.service";

// Paginator
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

// Sorting
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  users;

  displayedColumns: string[] = [
    "picture",
    "name.title",
    "name.first",
    "name.last",
    "gender",
    "email",
    "dob",
    "registered.date"
  ];

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.dataSource.data = data["results"];
      this.users = data["results"];
      console.log(this.users);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
// date picker
