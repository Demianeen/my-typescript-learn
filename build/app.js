"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserService = class UserService {
    users = 1000;
    getUsers() {
        return this.users;
    }
};
UserService = __decorate([
    createdAtAdvanced
], UserService);
function createdAt(target) {
    target.prototype.createdAt = new Date();
}
function createdAtAdvanced(constructor) {
    return class extends constructor {
        createdAt = new Date();
    };
}
function nullUsers(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    return (target) => {
        target.prototype.users = users;
    };
}
function setUsersAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            users = users;
        };
    };
}
function threeUsersAdvanced(constructor) {
    return class extends constructor {
        users = 3;
    };
}
// @tsignore
console.log(new UserService().createdAt);
