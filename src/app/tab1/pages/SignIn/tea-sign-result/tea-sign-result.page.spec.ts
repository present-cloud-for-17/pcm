import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaSignResultPage } from './tea-sign-result.page';

describe('TeaSignResultPage', () => {
  let component: TeaSignResultPage;
  let fixture: ComponentFixture<TeaSignResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaSignResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaSignResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
