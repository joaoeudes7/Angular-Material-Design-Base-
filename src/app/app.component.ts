import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  itensNav = [
    { icon: 'filter_9_plus', name: 'Números' },
    { icon: 'text_format', name: 'Palavras' }
  ];
 }
