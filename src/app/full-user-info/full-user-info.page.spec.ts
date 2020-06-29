import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullUserInfoPage } from './full-user-info.page';

describe('FullUserInfoPage', () => {
  let component: FullUserInfoPage;
  let fixture: ComponentFixture<FullUserInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullUserInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullUserInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
