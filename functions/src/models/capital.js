// models/Capital.js

class Capital {
    constructor(id, index, name, image, population, country, images) {
        this.id = id,
            this.index = index,
            this.name = name;
        this.image = image;
        this.population = population;
        this.country = country;
        this.images = images;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Capital(
            snapshot.id,
            data.index,
            data.name,
            data.image,
            data.population,
            data.country,
            data.images
        );
    }

    toJSON() {
        return {
            id: this.id,
            index: this.index,
            name: this.name,
            image: this.image,
            population: this.population,
            country: this.country,
            images: this.images
        };
    }
}

module.exports = Capital;
