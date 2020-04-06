import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 getStaticCourses() {
   return ['Starter Course 1', 'Starter Course 2', 'Starter Course 3'];
 }

 getDynaminCourses(){
   return ['Advanced Angular Course 1', 'Advanced Angular Course 2', 'Advanced Angular Course 3' ] ;
 }



}
