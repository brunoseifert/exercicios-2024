import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPerguntaComponent } from './main-pergunta.component';

describe('MainPerguntaComponent', () => {
  let component: MainPerguntaComponent;
  let fixture: ComponentFixture<MainPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
