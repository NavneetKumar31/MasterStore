import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import { LocalService } from "../shared/services/local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  assetsPath = environment.assetsPath + "Icons/";
  isLoggedIn: boolean;
  loginModal = false;
  modalContent = "login";

  constructor(private local: LocalService, private router: Router) {}

  ngOnInit() {
    this.local.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }

  toggleModal(): void {
    this.loginModal = !this.loginModal;
  }

  signOut(): void {
    this.local.isLoggedIn.next(false);
  }

  routeTo(path: string): void {
    this.router.navigate([path.toLowerCase()]);
  }
}
