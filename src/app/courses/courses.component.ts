import { Component} from '@angular/core';
import {objectLiteralExpression} from "codelyzer/util/astQuery";
import {CoursesService} from "./courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  staticCourses;
  dynamicCourses;
  name ='';
  courseTitle= '';
  email ="@gmail.com";
  status = '';
  button = true;

  constructor(course : CoursesService) {
    this.staticCourses = course.getStaticCourses();
    this.dynamicCourses = course.getDynaminCourses();
  }

  onRegButton(){
    return this.status = this.name + ' has registered to ' + this.courseTitle + ' successfully..!!. Your details has sent to the ' + this.email + ' Thank you';
    return this.button = false;
  }




}
