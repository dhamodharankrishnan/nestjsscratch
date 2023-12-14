import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

    @Get('hello')
    getRootRoute() {
        return 'Hi Dhamo';
    }

    @Get("/bye")
    getByeThere() {
        return 'Bye Dhamo';
    }
}