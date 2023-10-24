import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  selector: 'app-home',
  template: `
    <mat-toolbar color="accent">
      <span>Bienvenido - Sky Practice </span>

      <button mat-flat-button (click)="logOut()">Log out</button>
    </mat-toolbar>
    <div style="text-align: center;">
    <div style="text-align: left;">
  <p style="font-size: 20px;">Por favor seleccione su opción</p>
  <div class="botones-container">
  <button mat-raised-button (click)="logOut()">Botón 1</button>
  <button mat-raised-button (click)="logOut()">Botón 2</button>
  <button mat-raised-button (click)="logOut()">Botón 3</button>
  <button mat-raised-button (click)="logOut()">Botón 4</button>
  <button mat-raised-button (click)="logOut()">Botón 5</button>
</div>
</div>
<div style="text-align: center;">
 <img src="https://i.postimg.cc/dt3GVvV2/avion.jpg">
</div>
  `,
  styles: [
    `
      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export default class HomeComponent {
  private _router = inject(Router);

  private authservice = inject(AuthService);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/log-in');
    } catch (error) {
      console.log(error);
    }
  }
}
