import { BiographyModule } from './biography.module';

describe('BiographyModule', () => {
  let biographyModule: BiographyModule;

  beforeEach(() => {
    biographyModule = new BiographyModule();
  });

  it('should create an instance', () => {
    expect(biographyModule).toBeTruthy();
  });
});
