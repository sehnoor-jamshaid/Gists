import AppAxios from '../../axios'
import axios from 'axios'
export const GETLIST = "/user/auth";

//Sending Access Token

export function getAllListUser(username) {
   console.log("axiossss")
   return AppAxios.get(`/users/${username}/gists`);
}
export function getForks(id) {
   console.log("axiossss")
   return AppAxios.get(`/gists/${id}`);
}
