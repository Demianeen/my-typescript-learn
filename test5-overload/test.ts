class User1 {
	skills: string[] = [];

	addSkills(skill: string): void;	
	addSkills(skills: string[]) : void;
	addSkills(skills: string | string[]): void {
		if(typeof skills === 'string') {
			this.skills.push(skills);
		} else {
			this.skills = this.skills.concat(skills);
		}
	}
}

let user1 = new User1();
user1.addSkills(['sdd', 'jsalkd']);
console.log(user1);
