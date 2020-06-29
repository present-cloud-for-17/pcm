import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatcodePage } from './creatcode.page';

describe('CreatcodePage', () => {
  let component: CreatcodePage;
  let fixture: ComponentFixture<CreatcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
