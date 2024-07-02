// models/Work.js

class Work {
    constructor(
        id,
        index,
        icon,
        title,
        company,
        description,
        price,
        bookmark,
        createdAt = new Date() // Date when the user was created
    ) {
        this.id = id,
            this.index = index,
            this.icon = icon,
            this.title = title,
            this.company = company,
            this.description = description,
            this.price = price,
            this.bookmark = bookmark,
            this.createdAt = createdAt;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Work(
            snapshot.id,
            data.index,
            data.icon,
            data.title,
            data.company,
            data.description,
            data.price,
            data.bookmark,
            data.createdAt
        );
    }

    // Add a method to serialize the user data for JSON responses
    toJSON() {
        return {
            id: this.id,
            index: this.index,
            icon: this.icon,
            title: this.title,
            company: this.company,
            description: this.description,
            price: this.price,
            bookmark: this.bookmark,
            createdAt: this.createdAt.toISOString(),
        };
    }
}

module.exports = Work;
