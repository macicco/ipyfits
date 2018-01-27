// This file contains the javascript that is run when the notebook is loaded.
// It contains some requirejs configuration and the `load_ipython_extension`
// which is required for any notebook extension.

// Configure requirejs
if ((<any>window).require) {
    (<any>window).require.config({
        map: {
            "*" : {
                "ipyfits": "nbextensions/ipyfits/index",
            }
        }
    });
}

// Export the required load_ipython_extension
module.exports = {
    load_ipython_extension: function() {}
};
