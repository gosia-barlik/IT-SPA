import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import {footer, main, header} from './common';
import {navigation} from './navigation/navigation';
import {signUp} from './sign-up/sign-up';
import {cart} from'./cart/cart'

const body = $(document.body);

body.append(navigation(), header(), main(), cart(), footer());
//                                  
