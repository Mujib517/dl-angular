import { ProductDetailComponent } from './product-detail.component';
import { Observable } from 'rxjs';

describe("Product Component", () => {

  let comp;
  let svc;
  let route;

  beforeEach(() => {
    //arrange
    //fake
    let obs = new Observable(o => o.next({
      brand: 'Nokia',
      reviews: [1, 2, 3, 4]
    }));

    svc = jasmine.createSpyObj("ProductSvc", ["getById"]);
    svc.getById = jasmine.createSpy("getById").and.returnValue(obs);
    route = {
      snapshot: {
        params: { id: 10 }
      }
    };

    comp = new ProductDetailComponent(svc, route);
  });

  it("Should have product undefined", () => {
    expect(comp.product).toBeUndefined();
  });

  it("Should call productSvc.getById", () => {
    comp.ngOnInit();

    expect(svc.getById).toHaveBeenCalledWith(10);
    expect(comp.product).toBeDefined();

  });

  afterEach(() => {
    comp = null;
  });

});