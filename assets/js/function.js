/**
 * Custom Alert Function 
 */

 const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}
