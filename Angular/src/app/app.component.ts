import { Component,  OnInit } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';


@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  
  styles: []
})






export class AppComponent implements OnInit {
  StudentList: Student[] = STUDENTS;
  studentSelected : Student|undefined;
  ngOnInit() : void {
    console.table(this.StudentList);
    console.table(this.StudentList[0].name);
  }
  
  selectStudent = (studentName: Student) =>{
    console.log(`Vous avez cliqué sur l'étudiant ${studentName}`);

  }
  selectId (event : MouseEvent ){
    const index:number =+(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur l'étudiant ${this.StudentList[index].name}`);
  }
  
  selectOneStudent(studentId :string){
    const student: Student|undefined = this.StudentList.find(
      student => student.id == +studentId
    );
    if (student) {
      console.log(`Vous avez cliqué sur l'étudiant ${student.name}`)
      this.studentSelected = student;
    }else {
      console.log("létudiant n'existe pas");
      this.studentSelected = student;
    }

  }
  

 
  
}
