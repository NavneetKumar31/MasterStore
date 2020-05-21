import { Component, OnInit, OnDestroy } from "@angular/core";
import { LocalService } from "../shared/services/local.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  get f() {
    return this.loginForm.controls;
  }

  login(): void {
    this.local.isLoggedIn.next(true);
    this.routeTo("/");
  }

  routeTo(path: string): void {
    this.router.navigate([path]);
  }
}
