import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContatosListagemComponent } from './app-contatos-listagem.component';

describe('AppContatosListagemComponent', () => {
  let component: AppContatosListagemComponent;
  let fixture: ComponentFixture<AppContatosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContatosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContatosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
