/**
 * Users bootstrap area
 */
bootstrapUsers = () => {
    // full user
    new User({
        firstName: 'Test',
        lastName: 'Test',
        username: 'test',
        password: new Password({ value: 'test'}),
        email: 'test@test.com'
    }).save()

    // user without username
    new User({
        firstName: 'Test0',
        lastName: 'Test0',
        password: new Password({ value: 'test0'}),
        email: 'test0@test.com'
    }).save()

    // many others
    new Array(1,2,3,4,5,6,7,8,9).forEach((n) => {
        new User({
            firstName: 'Test' + n,
            lastName: 'Test' + n,
            username: 'test' + n,
            password: new Password({ value: 'test' + n}),
            email: 'test' + n + '@test.com'
        }).save()
    })
}



/**
 * Run all described bootratraps
 */
bootstrap = () => {
    bootstrapUsers()
}


// Run bootstrap
bootstrap()