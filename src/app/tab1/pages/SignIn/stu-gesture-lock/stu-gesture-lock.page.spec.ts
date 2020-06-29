import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuGestureLockPage } from './stu-gesture-lock.page';

describe('StuGestureLockPage', () => {
  let component: StuGestureLockPage;
  let fixture: ComponentFixture<StuGestureLockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuGestureLockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuGestureLockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
