import { imagesData } from "./imagesData";
import Icon from 'react-native-vector-icons/FontAwesome5';

export const imagesStore = {
    images: {},

    async initStore() {
        return await Promise.all(
            Object.entries(imagesData).map(([imageId, imageData]) => {
                console.log(imageId, imageData);
                return Icon.getImageSource(imageData.name, imageData.size, imageData.color)
                    .then(source => this.images[imageId] = source);
            })
        );
    },

    getImageSrc(id) {
        return this.images[id];
    }
};