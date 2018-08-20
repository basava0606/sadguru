import { BhajanModule } from './bhajan.module';

describe('BhajanModule', () => {
  let bhajanModule: BhajanModule;

  beforeEach(() => {
    bhajanModule = new BhajanModule();
  });

  it('should create an instance', () => {
    expect(bhajanModule).toBeTruthy();
  });
});
