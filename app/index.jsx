import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <View style={styles.profile}></View>
                <View><Text style={styles.userName}>imthebest</Text></View>
                <View><Text style={styles.articleTime}>30m</Text></View>
            </View>
            <View>
                <ImageBackground source={{ uri: 'https://popcat.click/twitter-card.jpg'}} style={styles.articleLargeImage}>
                    <View>
                        <Image source={{ uri: 'https://content.imageresizer.com/images/memes/Pop-Cat-meme-5.jpg' }} style={styles.articleSmallImage} />
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

/* 393 x 852 */

const styles = StyleSheet.create({
    container: {
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
        marginLeft: 20,
        marginRight: 12,
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
