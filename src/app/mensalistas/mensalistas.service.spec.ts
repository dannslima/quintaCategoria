/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensalistasService } from './mensalistas.service';

describe('Service: Mensalistas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensalistasService]
    });
  });

  it('should ...', inject([MensalistasService], (service: MensalistasService) => {
    expect(service).toBeTruthy();
  }));
});
