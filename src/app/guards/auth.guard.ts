import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
   
    constructor(
         private authService: AuthService,
         private router: Router
         ) {}
   
    canActivate(): Observable<boolean> {
       
        return  this.authService.isAutenticated()
                                .pipe(map(user => {
             if(user) {
               console.log(user)
               return true;
             }
             this.router.navigate(['/login']);
             return false;
         }))
    }
}
