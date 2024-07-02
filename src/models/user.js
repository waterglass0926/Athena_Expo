// models/User.js

class User {
    constructor(
        id,
        name, // firstname, lastname, username
        image, // avatar, cover
        info, // email, password, mobile, gender, title, detail
        location, // address, state, city, country, zipcode, coordinates: { latitude, longitude }
        status, // active = 'active, deactive, suspended, deleted', visible = 'private, public'
        roles = [], // An array of user roles, e.g., ['user', 'admin']
        createdAt = new Date() // Date when the user was created
    ) {
        this.id = id,
            this.image = image,
            this.name = name,
            this.info = info,
            this.location = location,
            this.status = status,
            this.roles = roles;
        this.createdAt = createdAt;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new User(
            snapshot.id,
            data.name,
            data.image,
            data.info,
            data.location,
            data.status,
            data.roles,
            data.createdAt
        );
    }

    // Add a method to check if the user has a specific role
    hasRole(role) {
        return this.roles.includes(role);
    }

    // Add a method to serialize the user data for JSON responses
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            info: this.info,
            location: this.location,
            status: this.status,
            roles: this.roles,
            createdAt: this.createdAt.toISOString(),
        };
    }
}

module.exports = User;
