// map classes to DB
dataPool.map(
    User
)

// used to inter-object casting
Loki.lokify(
    User
)

// static page mappings (for Frgg pages)
pages.attachAll({
    'show_user': [
        'templates/pages/user/_show.frgg',
        'user-container'
    ],
    'list_users': [
        'templates/pages/user/_list.frgg',
        'user-container'
    ],
    'user_index': [
        'templates/pages/user/_index.frgg',
        'user-container'
    ]
})