import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function App() {

    let frontImg = 'https://popcat.click/twitter-card.jpg';
    let backImg = 'https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg'
    let [img, setImg] = useState([frontImg, backImg]);

    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <View>
                    <Image source={{ uri: '../assets/images/profile.png' }} style={styles.profile}/>
                </View>
                <View>
                    <Text style={styles.userName}>imthebest</Text>
                </View>
                <View>
                    <Text style={styles.articleTime}>30m</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={() => {
                    let copy = [...img];
                    let dum = copy[0];
                    copy[0] = copy[1];
                    copy[1] = dum;
                    setImg(copy);
                }}>
                    <ImageBackground source={{ uri: img[0] }} style={styles.articleLargeImage}>
                        <View>
                            <Image source={{ uri: img[1] }} style={styles.articleSmallImage} />
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
        </View>
    );
}

/* 393 x 852 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'lightgray',
        marginLeft: 10,
        marginRight: 10,
    },
    userName: {
        textAlign: 'center',
        fontWeight: '600',
        marginRight: 10,
    },
    articleTime: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#9d9d9d',
    },
    articleLargeImage: {
        alignSelf: 'stretch',
        height: 400,
    },
    articleSmallImage: {
        borderRadius: 4,
        width: 120,
        height: 120,
        marginLeft: 10,
        marginTop: 10,
    },
});
