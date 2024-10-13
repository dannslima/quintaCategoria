import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mensalistaClick() {
      window.location.href = "/mensalistas";
  }

  sorteioClick() {
      window.location.href = "/sorteio";
  }

}
