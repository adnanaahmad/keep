/**
 * catchAsync function is a try catch wrapper
 * it takes fn as a argument, wraps it in an another function, apply try catch at abstract level
 * and returns wrapper function
 * this leads to centralized api error handling
*/
export const catchAsync = fn => {
    return (...args) => {
        fn(...args).catch( error => {
            console.log(error.response.data);
        });
    };
}