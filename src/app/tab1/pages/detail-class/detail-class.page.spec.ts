import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailClassPage } from './detail-class.page';

describe('DetailClassPage', () => {
  let component: DetailClassPage;
  let fixture: ComponentFixture<DetailClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
