import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule } from 'primeng/button'; 
import { TableModule } from 'primeng/table'; 

export const modulesList = [
    ButtonModule,
    TableModule
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      modulesList
    ],
    exports: [
      modulesList
    ]
})

export class PrimengModule { }