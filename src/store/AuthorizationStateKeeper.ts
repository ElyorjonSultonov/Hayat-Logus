import { makeAutoObservable } from "mobx";

class AuthorizationStateKeeper {
  static _instance: AuthorizationStateKeeper;

  static get instance() {
    if (!AuthorizationStateKeeper._instance) {
      AuthorizationStateKeeper._instance = new AuthorizationStateKeeper();
    }
    return AuthorizationStateKeeper._instance;
  }

  private getRoleFromLocalStorage(): string {
    return localStorage.getItem("role") || "NoAuth";
  }

  private getTokensFromLocalStorage(): any {
    return localStorage.getItem("token") || {};
  }

  private getAccessFromLocalStorage(): any {
    return localStorage.getItem("access") || {};
  }
  private getRefreshFromLocalStorage(): any {
    return localStorage.getItem("refresh") || {};
  }

  token: any = this.getTokensFromLocalStorage();
  role: string = this.getRoleFromLocalStorage();
  access: any = this.getAccessFromLocalStorage();
  refresh: any = this.getRefreshFromLocalStorage();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setToken(data: any) {
    localStorage.setItem("token", data);
    this.token = data;
  }
  removeToken() {
    localStorage.removeItem("token");
    this.token = {};
  }
  setAccess(data: any) {
    localStorage.setItem("access", data);
    this.access = data;
  }
  removeAccess(){
    localStorage.removeItem("access");
    this.access={};

  }
  setRefresh(data: any) {
    localStorage.setItem("refresh", data);
    this.refresh = data;
  }
  removeRefresh(){
    localStorage.removeItem("refresh");
    this.refresh={};

  }

  removeRole() {
    localStorage.removeItem("role");
    this.role = "NoAuth";
  }
  setRole(data: string) {
    localStorage.setItem("role", data);
    this.role = data;
  }
}

export default AuthorizationStateKeeper;
