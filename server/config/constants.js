
var sessions = "/api/sessions";

module.exports = {
  client: {
    web: "web",
    mobile: "mobile"
  },
  tokenHeader: "Secure-Token",
  display: {
    limit: 10,
  },
  routes = {

    // Public resources
    index: "/",
    login: "/login",
    userLogin: "/api/auth/login",
    userLogout: "/api/auth/logout",

    //sessions
    sessions: sessions,

    tokens: "/api/tokens",
    token: {
      all: "/",
      // Token - Permissions relationship
      permissions: "/permissions",
    },

    // Users
    users: "/api/users",
    user: {
      all: "/",
      specific: "/:userid"
    },

    // Roles
    roles: "/api/roles",
    role: {
      all: "/",
      specific: "/:id",
      // Roles - Permissions relationship
      permissions: "/:id/permissions",
    },

    // Permissions
    permissions: "/api/permissions",
    permission: {
      all: "/",
      specific: "/:id",
    }
  },

  publicResources =[
    { httpVerb: 'post', uri: sessions },
    { httpVerb: 'get', uri: sessions },
    { httpVerb: 'delete', uri: sessions }
  ]

};
