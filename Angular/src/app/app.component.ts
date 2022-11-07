import { Component,  OnInit } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  template: `
   <h1>
      La liste des étudiants
   </h1>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  StudentList: Student[] = STUDENTS;
  ngOnInit() : void {
    console.table(this.StudentList);
    console.table(this.StudentList[0].name);
  }
  
  selectStudent = (studentName : string) =>{
    console.table(`Vous avez cliqué sur l'étudiant ${studentName}`)
  }
  
}
