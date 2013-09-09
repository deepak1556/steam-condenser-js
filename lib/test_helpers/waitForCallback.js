function waitForCallback(test, expectation) {
    var args = null;
    var context = null;

    function callback() {
	context = this;
	args = arguments;
    }

    runs(function() {
	test(callback);
    });

    waitFor(function() {
	return args;
    }, 500);

    runs(function() {
	expectation.apply(context, args);
    });
}

module.exports = waitForCallback;
