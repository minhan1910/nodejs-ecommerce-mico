'use strict'

class ApiResult {
    static of(res) {
        ApiResult.res = res;
        return this;
    }

    static send(result) {
        return this.res.status(result.statusCode).json(result);
    }
}

module.exports = ApiResult;