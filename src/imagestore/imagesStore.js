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
        }
    }

    getImageSrc(id) {
        return this.images[id];
    }
}

export const imagesStore = new ImagesStore();