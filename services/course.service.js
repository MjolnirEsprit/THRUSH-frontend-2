import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import axios from "axios";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/instruments`;

export const courseService = {
    getAll,
    getById,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
