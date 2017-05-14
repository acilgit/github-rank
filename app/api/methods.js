/**
 * Created by 18953 on 2017/5/14.
 */
import axios from 'axios';

export function setToken(token) {
    if (token) {
        axios.default.headers.common['Authorization'] = `Bearer ${token}`;
    }else {
        delete axios.default.headers.common['Authorization'];
    }
}