import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocalService } from "../shared/services/local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private local: LocalService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        email: ["", Validators.required],
        mobile: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.ConfirmedValidator("password", "confirmPassword"),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get("password");
    const { value: confirmPassword } = formGroup.get("confirmPassword");
    return password === confirmPassword
      ? { passwordNotMatch: false }
      : { passwordNotMatch: true };
  }

  register(): void {
    this.router.navigate(["/login"]);
  }

  routeTo(path: string): void {
    this.router.navigate([path]);
  }
}
