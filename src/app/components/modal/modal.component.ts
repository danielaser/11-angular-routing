import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() closeEvent = new EventEmitter<void>();
  @Output() submitEvent = new EventEmitter<void>();


  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  title?: string;
  buttonName?: string;

  close() {
    this.closeEvent.emit();
  }

  submit() {
    this.submitEvent.emit();
  }
}
