import { ContactComponent } from './contact.component';

describe("Contact Component", () => {

  let comp;

  beforeEach(() => {
    //arrange
    comp = new ContactComponent();
  });

  it("Should have name defined", () => {
    expect(comp.name).toBeDefined();
    expect(comp.name).toBe("");
  });

  it('should have count undefined', () => {
    expect(comp.count).toBeUndefined();
  });



  afterEach(() => {
    comp = null;
  });
});