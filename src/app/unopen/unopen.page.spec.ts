import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnopenPage } from './unopen.page';

describe('UnopenPage', () => {
  let component: UnopenPage;
  let fixture: ComponentFixture<UnopenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnopenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnopenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
