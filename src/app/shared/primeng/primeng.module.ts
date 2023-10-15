import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button'; 

export const modulesList = [
    ButtonModule
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