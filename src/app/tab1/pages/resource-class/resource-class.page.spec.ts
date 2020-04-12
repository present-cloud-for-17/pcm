import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourceClassPage } from './resource-class.page';

describe('ResourceClassPage', () => {
  let component: ResourceClassPage;
  let fixture: ComponentFixture<ResourceClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
