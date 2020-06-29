import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetupClassPage } from './setup-class.page';

describe('SetupClassPage', () => {
  let component: SetupClassPage;
  let fixture: ComponentFixture<SetupClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
