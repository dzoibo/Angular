import { User } from "../models/user.modele";
import { Subject } from "rxjs-compat/Subject";

export class userService {
    private users: User[] = [
        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];
    userSubject= new Subject<User[]>();
    emitUsers()
    {
        this.userSubject.next(this.users.slice());
    }
    addUser(user:User)
    {
        this.users.push(user);
        this.emitUsers();
    }
}