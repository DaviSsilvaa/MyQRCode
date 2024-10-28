// src/app/ngx-qrcode-wrapper.module.ts
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [QRCodeModule],
  exports: [QRCodeModule],
})
export class NgxQRCodeWrapperModule {}
