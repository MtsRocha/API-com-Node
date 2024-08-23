import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../evaluation.service';


@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})

export class EvaluationFormComponent {
  
  evaluation: any = {};
  form = new FormGroup({});
  model: any = {};
  
  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'concept',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome da Avaliação',
            required: true,
          },
        }
      ]
    }
  ];
}
