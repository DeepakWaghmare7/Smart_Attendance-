import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {
  updateSubject() {
    throw new Error('Method not implemented.');
    }
    
      subject: any;
    
      constructor(private subjectService: SubjectService, private activatedRoute: ActivatedRoute) {
        let id = activatedRoute.snapshot.paramMap.get('subjectid');
        this.getSubject(id)
      }
    
    
      getSubject(id: any) {
        this.subjectService.getSubject(id).subscribe((res) => {
          this.subject=res;
        })
      }
}
