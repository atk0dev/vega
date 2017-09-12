import { ToastyService } from 'ng2-toasty';
import { ErrorHandler, Inject, isDevMode } from '@angular/core';
import { NgZone } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    constructor(
        //private zone: NgZone,
        @Inject(ToastyService) private toastyService: ToastyService) {
      }

    handleError(error: any): void {
            this.toastyService.error({
              title: 'Error',
              msg: 'An unexpected error happened.',
              theme: 'bootstrap',
              showClose: true,
              timeout: 5000
            });
        
        if (isDevMode()) {
            throw error;
        }

        console.log("Error!", error);
    }

}