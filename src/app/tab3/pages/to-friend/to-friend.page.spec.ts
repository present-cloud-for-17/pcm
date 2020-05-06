import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToFriendPage } from './to-friend.page';

describe('ToFriendPage', () => {
  let component: ToFriendPage;
  let fixture: ComponentFixture<ToFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
