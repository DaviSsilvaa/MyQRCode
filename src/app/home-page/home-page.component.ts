import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxQRCodeWrapperModule } from '../NgxQRCodeModule/ngx-qrcode-wrapper.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgxQRCodeWrapperModule, CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent {
  qrData: string = '';
  inputText: string = '';
  selectedType: string = 'text';

  generateQRCode() {
    switch (this.selectedType) {
      case 'text':
        this.qrData = this.inputText;
        break;
      case 'phone':
        this.qrData = `tel:${this.inputText}`;
        break;
      case 'image':
        this.qrData = this.inputText; // URL da imagem
        break;
      default:
        this.qrData = this.inputText;
        break;
    }
  }
}
