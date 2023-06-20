import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor() {}

  @Input({ required: true })
  course!: Course;

  @Output('courseSelected')
  courseEmitter= new EventEmitter<Course>();

  ngOnInit(): void {}

  onCourseViewed(){
    console.log('CLICK component LVL')
    this.courseEmitter.emit(this.course)
  }
}
