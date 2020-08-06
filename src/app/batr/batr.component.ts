import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BatrService } from './batr.service';

@Component({
  selector: 'app-batr',
  templateUrl: './batr.component.html',
  styleUrls: ['./batr.component.scss'],
  providers:[BatrService]
})
export class BatrComponent implements OnInit {
  createtest: FormGroup;
  isSubmitted=false
  post: any;
  constructor(private cs:BatrService) {
    this.createtest = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('^[789][0-9]{9}')]),
      email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
      city:new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }
  public PostData2(data: any) {
    this.isSubmitted=true;
    let msg="test ride booked";
    let errmsg="failed to book test ride";
    if(this.createtest.valid)
    {
    return this.cs.PostData(data).subscribe(
      req => { this.post = msg },
      err => { this.post = errmsg }
    )
    }
}
}
