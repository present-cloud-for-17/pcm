import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnChanges {

  constructor(public localStorage: LocalStorageService) {}

  public pName: any = this.localStorage.getItem('person').peName;
  public pNumber: any = this.localStorage.getItem('person').peNumber;
  public person: any;

  ngOnChanges() {
    this.person = this.localStorage.getItem('person');
    this.pName = this.person.peName;
    this.pNumber = this.person.peNumber;
  }

}
