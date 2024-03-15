// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getUsersUsingnFetch } from './src/js/getUsers';

const getUsers = async ()=>{
    const users = await getUsersUsingnFetch("https://reqres.in/api/users?page=2");
    console.log( users );
}

getUsers();