import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: {label, path}[] = [];
  constructor(public router: Router) {
    this.navLinks = [
      { label: 'Números', path: '/#' },
      { label: 'Palavras', path: '/gerarLink' },
      { label: 'Sobre', path: '/links' },
      { label: 'Página do Facebook', path: '/' },
    ];

   }

   public changeTab(e) {
    console.log(e);
    const index = e.index;
    if (this.navLinks[index].path) {
        this.router.navigateByUrl(this.navLinks[index].path);
    } else {
      console.log('No url for tab ' + index);
    }
}

  ngOnInit() {
  }

}
