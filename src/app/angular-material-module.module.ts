import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// table
import { MatTableModule } from "@angular/material/table";

// Pagination
import { MatPaginatorModule } from "@angular/material";

// Sorting
import { MatSortModule } from "@angular/material";

// For Filtering (for inpur Form)
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AngularMaterialModuleModule {}
