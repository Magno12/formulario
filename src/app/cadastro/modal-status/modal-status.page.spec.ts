import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalStatusPage } from './modal-status.page';

describe('ModalStatusPage', () => {
  let component: ModalStatusPage;
  let fixture: ComponentFixture<ModalStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
