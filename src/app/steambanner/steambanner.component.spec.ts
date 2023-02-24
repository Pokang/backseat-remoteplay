import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteambannerComponent } from './steambanner.component';

describe('SteambannerComponent', () => {
  let component: SteambannerComponent;
  let fixture: ComponentFixture<SteambannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteambannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteambannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
