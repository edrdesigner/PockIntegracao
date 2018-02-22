import React, {Component} from 'react';
import {
    ActivityIndicator,
    CameraRoll,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    Dimensions,
    ScrollView,
    RefreshControl
} from 'react-native';

const { width } = Dimensions.get('window');

class GalleryRoll extends Component {

    static navigationOptions = {
        title: 'Camera Roll',
    };

    componentDidMount() {
        this.getPhotos(); 
    }

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            photos: [],
            index: null
        }
    }

    setIndex = (index) => {
        if (index === this.state.index) {
            index = null;
        }

        this.setState({index});
    }


    getPhotos = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos'
        })
        .then(r => this.setState({photos: r.edges}));
    }

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible})
    }

    renderPhotoGallery = () => {
        const {photos, index} = this.state;
        if (photos.length > 0) {
            return (
                <ScrollView contentContainerStyle={styles.scrollView}>
                {
                    photos.map((p, i) => {
                        return (
                            <TouchableHighlight
                                key={i}
                                underlayColor='transparent'
                                onPress={() => this.setIndex(i)}>
                                <Image
                                    style={{width: width/3, height: width/3}}
                                    source={{uri: p.node.image.uri}} />
                            </TouchableHighlight>
                        )
                    })
                }
                </ScrollView>
            );
        } else {
            return (
                <ActivityIndicator size="large" />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                 {this.renderPhotoGallery()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        paddingTop: 20,
        flex: 1
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    shareButton: {
        position: 'absolute',
        width,
        padding: 10,
        bottom: 0,
        left: 0
    }
});


export default GalleryRoll;