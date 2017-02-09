// 'imports'
with (UserService) {
    /**
     * Action functions for 'User' domain
     */
    var UserController = new Sgfd.Controller({
        metaName: 'UserController',

        /**
         * Home page for users
         * @param params: params from page
         */
        index(params) {
            pages.user_index()
        },

        /**
         * Show a list of users
         * @param users: An users list
         */
        list(users) {
            pages.list_users()
        },

        /**
         * Show details of a single instance of user
         * @param user: the user to show details from
         */
        show(user) {
            pages.show_user()
        }
    })
}