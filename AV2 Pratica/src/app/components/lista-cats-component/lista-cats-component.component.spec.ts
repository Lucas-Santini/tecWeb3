import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCatsComponentComponent } from './lista-cats-component.component';

describe('ListaCatsComponentComponent', () => {
  let component: ListaCatsComponentComponent;
  let fixture: ComponentFixture<ListaCatsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCatsComponentComponent]
    });

    fixture = TestBed.createComponent(ListaCatsComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
