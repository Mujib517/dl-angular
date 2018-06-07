import { HomeComponent } from './home.component';

describe("Home Component", () => {

  let comp;
  let logger;

  beforeEach(() => {
    //arrange
    //fake
    logger = jasmine.createSpyObj("logger", ["log"]);
    comp = new HomeComponent(logger);
  });

  it("Should call logger.log", () => {
    comp.ngOnInit();

    expect(logger.log).toHaveBeenCalledWith("Inside home component");
  });

  afterEach(() => {
    comp = null;
  });

});