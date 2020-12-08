 import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
 
 
@Injectable({providedIn: "root"})
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router) {
 
    }
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {

        const token = localStorage.getItem('token');
        if (token) {

            return true;
        }

        this.router.navigate(["login"]);
        return false;
        
    }
}
 