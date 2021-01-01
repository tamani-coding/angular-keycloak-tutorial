import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-restricted-space',
  templateUrl: './restricted-space.component.html',
  styleUrls: ['./restricted-space.component.css']
})
export class RestrictedSpaceComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { 
    
  }

  ngOnInit(): void {
  }

  public username () : string {
    return this.keycloakService.getUsername()
  }

  public logout () {
    this.keycloakService.logout();
  }
}
