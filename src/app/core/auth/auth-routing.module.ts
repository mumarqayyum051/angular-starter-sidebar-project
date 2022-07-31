import { LogggedInComponent } from './loggged-in/loggged-in.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: SignInComponent },
  { path: 'loggin', component: LogggedInComponent },
];
