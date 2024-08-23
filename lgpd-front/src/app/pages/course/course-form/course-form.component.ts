import { Component } from '@angular/core';

//add esses imports

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../teacher/teacher.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  course: any = {};
  form = new FormGroup({});
  model: any = {};
  
  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do Curso',
            required: true,
          },
        }
      ]
    }
  ];

}

