import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalContasPage } from './modal-contas.page';

describe('ModalContasPage', () => {
  let component: ModalContasPage;
  let fixture: ComponentFixture<ModalContasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
