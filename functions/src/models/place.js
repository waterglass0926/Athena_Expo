// models/Place.js

class Place {
    constructor(id, index, name, image) {
        this.id = id,
            this.index = index,
            this.name = name;
        this.image = image;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Place(
            snapshot.id,
            data.index,
            data.name,
            data.image
        );
    }

    toJSON() {
        return {
            id: this.id,
            index: this.index,
            name: this.name,
            image: this.image,
        };
    }
}

module.exports = Place;
