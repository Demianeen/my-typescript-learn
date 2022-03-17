"use strict";
class User1 {
    skills = [];
    addSkills(skills) {
        if (typeof skills === 'string') {
            this.skills.push(skills);
        }
        else {
            this.skills = this.skills.concat(skills);
        }
    }
}
let user1 = new User1();
user1.addSkills(['sdd', 'jsalkd']);
console.log(user1);
