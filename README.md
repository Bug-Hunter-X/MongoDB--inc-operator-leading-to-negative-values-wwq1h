# MongoDB $inc operator leading to negative values
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator increments a numerical field by a specified value. If the field's value is zero and you attempt to decrement it, it will result in a negative value, which can cause unexpected behavior or errors in your application.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.