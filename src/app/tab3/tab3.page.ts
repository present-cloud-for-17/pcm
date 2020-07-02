import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public localStorage: LocalStorageService,) {}

  public pName: any;
  public pNumber: any;
  public person: any;
  ngOnInit() {
    this.person = this.localStorage.getItem('person');
    this.pName = this.person.peName;
    this.pNumber = this.person.peNumber;
  }

}
