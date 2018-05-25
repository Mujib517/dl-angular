import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";

//single line
//multi line
//separate file

//Data binding
// expression, property, event binding, class, style and two way
@Component({
    selector: 'app-home',
    templateUrl: './home.html'
})
export class HomeComponent {
    constructor(logger: ConsoleLogger) {
        logger.log("Inside home component");
    }
}

