import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng-core';
  courses: Course[] = COURSES;
  txtSearched = ' ... ';

  onCourseSelected(course: Course){
    console.log("onCardClicked [APP]", course);
  }

  onTextChanged(txt: string){
    this.txtSearched = txt;
  }
}
