import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuSignInPage } from './stu-sign-in.page';

describe('StuSignInPage', () => {
  let component: StuSignInPage;
  let fixture: ComponentFixture<StuSignInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuSignInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuSignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
