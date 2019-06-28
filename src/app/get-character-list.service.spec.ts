import { TestBed } from '@angular/core/testing';

import { GetCharacterListService } from './get-character-list.service';

describe('GetCharacterListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCharacterListService = TestBed.get(GetCharacterListService);
    expect(service).toBeTruthy();
  });
});
