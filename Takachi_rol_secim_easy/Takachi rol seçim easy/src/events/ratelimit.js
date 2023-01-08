module.exports = async function(RateLimitData) {
    console.log("[Takachi] Rate Limit Warn!", RateLimitData)
}

module.exports.conf = {
    name: "rateLimit"
}
