

const Plugin = {
    install(Vue, options = {}) {
        // adding an instance method
        Vue.prototype.$addLaravelErrors = addToErrorBag;
    },
};

/**
 * Adds errors to the vee-validate error bag
 *
 * @param   {obj}  errorResponse  [axios error.response]
 *
 * @return  {?string}                 [returns the first error message]
 */
function addToErrorBag(errorResponse) {
    // only allow this function to be run if the validator exists
    if (!hasProperty(this, '$validator')) return null;

    // check if there is data in the response
    if (!hasProperty(errorResponse, 'data')) return null;

    // clear errors
    this.$validator.errors.clear();

    // check if errors exist
    if (!hasProperty(errorResponse.data, 'errors')) return null;

    return loopThroughErrors(errorResponse.data.errors);
}

function hasProperty(obj, key) {
    if (!obj) return false;

    const has = Object.prototype.hasOwnProperty;

    return has.call(obj, key);
}

function loopThroughErrors(errors) {
    let firstError = '';

    Object.keys(errors).forEach((field) => {
        this.$validator.errors.add({
            field,
            msg: errors[field].join(', '),
        });

        // add the first error
        if (!firstError) firstError = errors[field].join(', ');
    });

    return firstError;
}


export default Plugin;
