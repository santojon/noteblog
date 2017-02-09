with (Sgfd.Base) {
    /**
     * The service that process and manage Users related data
     */
    var UserService = new Sgfd.Service({
        metaName: 'UserService',
        /**
         * Get all the users from DB
         */
        getAllUsers() {
            return User.findAll()
        }
    });
};