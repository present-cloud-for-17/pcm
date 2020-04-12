import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityClassPage } from './activity-class.page';

describe('ActivityClassPage', () => {
  let component: ActivityClassPage;
  let fixture: ComponentFixture<ActivityClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
