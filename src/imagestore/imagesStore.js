import { imagesData } from "./imagesData";
import Icon from 'react-native-vector-icons/FontAwesome';

class ImagesStore {
    constructor() {
        this.images = {};
    }

    initStore = async () => {
        for (let imageData in imagesData) {
            console.log(imageData);
            try {
                this.images[imageData] = await Icon.getImageSource(
                    imagesData[imageData].name, imagesData[imageData].size, imagesData[imageData].color);
                console.log(imagesData[imageData]);
                console.log(this.images);
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    getImageSrc(name) {
        return this.images[name];
    }
}

export const imagesStore = new ImagesStore();