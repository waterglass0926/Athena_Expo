// models/Workout.js

class Workout {
    constructor(
        id,
        index,
        title,
        type,
        percent,
        image,
        createdAt = new Date() // Date when the user was created
    ) {
        this.id = id,
            this.index = index,
            this.title = title,
            this.type = type,
            this.percent = percent,
            this.image = image,
            this.createdAt = createdAt;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Workout(
            snapshot.id,
            data.index,
            data.title,
            data.type,
            data.percent,
            data.image,
            data.createdAt
        );
    }

    // Add a method to serialize the user data for JSON responses
    toJSON() {
        return {
            id: this.id,
            index: this.index,
            title: this.title,
            type: this.type,
            percent: this.percent,
            image: this.image,
            createdAt: this.createdAt.toISOString(),
        };
    }
}

module.exports = Workout;
