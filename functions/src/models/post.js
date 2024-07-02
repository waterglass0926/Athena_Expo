// models/Post.js
const User = require('./user');

class Post {
    constructor(id, index, type, title, description, data, user, createdAt = new Date()) {
        this.id = id,
            this.index = index;
        this.type = type;
        this.title = title;
        this.description = description;
        this.data = data;
        this.user = user;
        this.createdAt = createdAt; // Date when the user was created
    }

    static fromSnapshot(snapshot, snap) {
        const data = snapshot.data();
        const user = snap.data();
        return new Post(
            snapshot.id,
            data.index,
            data.type,
            data.title,
            data.description,
            data.data,
            new User(
                snap.id,
                user.name,
                user.image,
                user.info,
                user.location,
                user.status,
                user.roles,
                user.createdAt
            ),
            data.createdAt
        );
    }

    // Add a method to serialize the user data for JSON responses
    toJSON() {
        return {
            id: this.id,
            index: this.index,
            type: this.type,
            title: this.title,
            description: this.description,
            data: this.data,
            user: this.user,
            createdAt: this.createdAt.toISOString(),
        };
    }
}

module.exports = Post;
