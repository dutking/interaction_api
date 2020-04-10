static sendStmt(stmt) {
    if (this.testMode === false) {
        ADL.XAPIWrapper.sendStatement(stmt)
    } else if (this.testMode === true) {
        console.log(stmt)
    }
}

static configure() {
    let queryString = window.location.search
    let queryParams = {}
    let pairs = (queryString[0] === '?'
        ? queryString.substr(1)
        : queryString
    ).split('&')
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=')
        query[decodeURIComponent(pair[0])] = decodeURIComponent(
            pair[1] || ''
        )
    }
    this.activityId = queryParams.activity_id
    this.actor = JSON.parse(queryParams.actor)
    this.configurationData = {
        endpoint: queryParams.endpoint,
        auth: queryParams.auth,
        actor: JSON.parse(queryParams.actor),
        grouping: activityId,
        registration: queryParams.registration,
        context: {
            registration: queryParams.registration,
            contextActivities: {
                grouping: activityId
            }
        }
    }

    if (Array.isArray(configurationData.actor.account)) {
        configurationData.actor.account = configurationData.actor.account[0]
    }
    if (Array.isArray(configurationData.actor.name)) {
        configurationData.actor.name = configurationData.actor.name[0]
    }
    if (
        configurationData.actor.account &&
        configurationData.actor.account.accountServiceHomePage
    ) {
        configurationData.actor.account.homePage =
            configurationData.actor.account.accountServiceHomePage
        configurationData.actor.account.name =
            configurationData.actor.account.accountName
        delete configurationData.actor.account.accountServiceHomePage
        delete configurationData.actor.account.accountName
    }

    if (this.testMode === false) {
        ADL.XAPIWrapper.changeConfig(this.configurationData)
    }
}