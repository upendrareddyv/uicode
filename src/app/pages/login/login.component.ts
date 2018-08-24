import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { UserContext } from '../../core/services/userContext';
import { Router } from '@angular/router';
import { SessionStorage } from '../../core/services/sessionStorage';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class Login {
    form: FormGroup;
    username: AbstractControl;
    password: AbstractControl;

    constructor(private fb: FormBuilder, private loginService: LoginService, private userContext: UserContext,
                private router: Router, private sessionStorage: SessionStorage) {
        this.form = this.fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.loginService.login(this.form.value).subscribe((res: any) => {
                const authInfo = {
                    authToken: res.authToken
                };
                this.userContext.setAuthToken(res.authToken);
                this.sessionStorage.setItem(authInfo);
                this.router.navigate(['pages/dashboard']);
            });
        }
    }
}
