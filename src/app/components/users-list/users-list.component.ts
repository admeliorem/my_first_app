import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {
  Users,
  UsersApiService,
} from "../../services/users-api-service.service";

@Component({
  selector: "app-users-list",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
})
export class UsersListComponent {
  users: Users[] = [];

  constructor(public usersApiService: UsersApiService) {}

  ngOnInit(): void {
    this.usersApiService.getAll().subscribe((data: Users[]) => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.usersApiService.delete(id).subscribe((res) => {
      this.users = this.users.filter((item) => item.id !== id);
      alert("user deleted");
    });
  }
}
