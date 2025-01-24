import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

const App = () => {
    const frontImg = 'https://e0.pxfuel.com/wallpapers/415/250/desktop-wallpaper-pop-cat-popcat.jpg';
    const backImg = 'https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg';
    const name = 'uos_gungong';
    const time = '30m';
    const likes = 1000;

    const [images, setImages] = useState([frontImg, backImg]);


    const changeImg = () => {
        setImages(prevImages => [
            prevImages[1],
            prevImages[0]
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <View>
                    <Image source={require('../assets/images/profile.png')} style={styles.profile} />
                </View>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.articleTime}>{time}</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={changeImg}>
                    <ImageBackground source={{ uri: images[0] }} style={styles.articleLargeImage}>
                        <View>
                            <Image source={{ uri: images[1] }} style={styles.articleSmallImage} />
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
            <View style={styles.fedAction}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/like.png')} style={styles.fedLikes} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/comment.png')} style={styles.fedComment} />
                </TouchableOpacity>
            </View>
            <Text style={styles.likesQuantity}>
                {likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Likes
            </Text>
            <View style={styles.fedContent}>
                <Text style={styles.fedUserName}>
                    {name}{' '}
                </Text>
                <Text style={styles.fedUserContent}>
                    미리보기에서는 텍스트 1줄까지만 지원한다.
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    userName: {
        paddingLeft: 10,
        fontWeight: '600',
        color: 'black',
    },
    articleTime: {
        paddingLeft: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: '#9d9d9d',
    },
    articleLargeImage: {
        alignSelf: 'stretch',
        height: 400,
        marginBottom: 8,
    },
    articleSmallImage: {
        borderRadius: 4,
        width: 120,
        height: 120,
        marginLeft: 10,
        marginTop: 10,
    },
    fedAction: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 8,
    },
    fedLikes: {
        width: 24,
        height: 24,
    },
    fedComment: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    likesQuantity: {
        fontWeight: '500',
        marginLeft: 15,
    },
    fedContent: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    fedUserName: {
        fontWeight: '600',
        color: 'black',
    },
    fedUserContent: {
        color: 'black',
    },
});

export default App;