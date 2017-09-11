import { ErrorHandler, isDevMode } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {

        if (isDevMode()) {
            throw error;
        }

        console.log("Error!", error);
    }

}