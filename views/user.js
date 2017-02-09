/**
 * The behaviour description for Users pages
 * @param params: params object used to load different user areas
 */
pages.User = (params) => {
    // add direct support for UserController functions
    with (UserController) {
        // if some param passed, verifies
        if (params) {
            if (params.user) {
                // single user, show it
                show(params.user)
            } else if (params.users) {
                // many users, list then
                list(params.users)
            } else {
                // not specified user(s), so pass it 
                index(params)
            }
        } else {
            // no params, just go to index
            index()
        }
    }
}