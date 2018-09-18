import { imagesData } from "./imagesData";
import Icon from 'react-native-vector-icons/FontAwesome5';

class ImagesStore {
    constructor() {
        this.images = {};
    }

    async initStore() {
        for (let imageData in imagesData) {
            this.images[imageData] = await Icon.getImageSource(
                imagesData[imageData].name, imagesData[imageData].size, imagesData[imageData].color);

            console.log(imageData);
            console.log(imagesData[imageData]);
            console.log(this.images);
        }
    }

    getImageSrc(name) {
        return this.images[name];
    }
}

export const imagesStore = new ImagesStore();