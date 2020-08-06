import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { BookTestRideService } from './book-test-ride.service';

@Component({
  selector: 'app-book-test-ride',
  templateUrl: './book-test-ride.component.html',
  styleUrls: ['./book-test-ride.component.scss'],
  providers:[BookTestRideService]
})
export class BookTestRideComponent implements OnInit {
  customer: FormGroup;
  crud: any;
  constructor(private cs: BookTestRideService) {
    this.customer = new FormGroup({
      name: new FormControl(),
      email: new FormControl()
    })
  }


  ngOnInit() {
  }
  public PostHttpData2(data: any) {
    return this.cs.PostHttpData(data).subscribe(
      req => { this.crud = req },
      err => { this.crud = err }
    )
  }
}
