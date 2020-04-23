import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.page.html',
  styleUrls: ['./detail-class.page.scss'],
})
export class DetailClassPage implements OnInit, OnChanges, AfterViewInit {

  private role: any;
  constructor(public localService: LocalStorageService) {
   }

  ngOnInit() {

  }

  ngOnChanges() {
    this.role = this.localService.getItem('user').role;
    console.log(this.role);
  }

  ngAfterViewInit() {
    
  }

}
