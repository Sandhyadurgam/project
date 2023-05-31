import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";




@Injectable()

export class AdminGuard implements CanActivate {
    constructor(private _router: Router, private _authService: AuthService, private auth: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.displayName && this._authService.isAdmin) {
            return true;
        }
        else {
            this._router.navigate(['/un-authorized']);
            return false;
        }

    }
}