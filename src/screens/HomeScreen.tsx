import { StyleSheet, FlatList, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from '@expo/vector-icons/MaterialIcons'
import MasonryList from 'reanimated-masonry-list';
import { TabStackScreenProps } from './TabsNavigator';


const categories = ["Clothing", "Shoes", "Accessories", "Beauty", "Jewellery", "Luggage"]

const HomeScreen = ({navigation}:TabStackScreenProps<"Home">) => {
    const [categoriesIndex, setCategoriesIndex] = useState(0);
    const data = [
        { id: 125, image: require("../images/mainimg1.jpg") },
        { id: 126, image: require("../images/mainimg2.jpg") },
        { id: 127, image: require("../images/mainimg3.jpg") },
        { id: 128, image: require("../images/mainimg4.jpg") },
        { id: 129, image: require("../images/mainimg5.jpg") },
        { id: 130, image: require("../images/mainimg6.jpg") },
    ];
    return (
        <ScrollView>
            <SafeAreaView>
                {/* header-section */}
                <View
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 25,
                        flexDirection: "row",
                        alignItems: 'center',
                        gap: 8
                    }}>
                    <Image source={require("../images/person.jpg")} style={{ width: 53, aspectRatio: 1, borderRadius: 50 }} resizeMode='cover'
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 7, color: 'black' }} numberOfLines={1}>Hi,Sophia 👋</Text>
                        <Text style={{ color: 'gray' }} numberOfLines={1}>Discover fashion that suit your style</Text>
                    </View>
                    <TouchableOpacity style={{ width: 53, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'black', borderWidth: 1, }}>
                        <Icons name="notifications" size={25}></Icons>
                    </TouchableOpacity>
                </View>
                {/* search-section */}
                <View style={{ flexDirection: "row", paddingHorizontal: 25, gap: 12 }}>
                    <TouchableOpacity style={styles.search}>
                        <Icons name="search" size={25} style={{ paddingLeft: 16 }}></Icons>
                        <Text style={{ fontSize: 18, color: 'gray', flex: 1 }}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 53, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'black', borderWidth: 1, backgroundColor: "black" }}>
                        <Icons name="tune" size={25} style={{ color: "white" }}></Icons>
                    </TouchableOpacity>
                </View>
                {/* Collection */}
                <View style={{ paddingHorizontal: 24, paddingVertical: 24 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, fontWeight: 600 }}>New Collections</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'gray' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.imageRow}>
                            <TouchableOpacity style={styles.imageContainer} onPress={()=>{
                                 navigation.navigate('Details', { id: '123' });
                            }}>
                                <Image source={require("../images/image1.jpg")} resizeMode="cover" style={styles.image}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageContainer} onPress={()=>{
                                 navigation.navigate('Details', { id: '124' });
                            }}>
                                <Image source={require("../images/image2.jpg")} resizeMode="cover" style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                {/* category */}
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const isSelected = categoriesIndex === index;
                        return (
                            <TouchableOpacity onPress={() => setCategoriesIndex(index)}>
                                <View style={[styles.item, isSelected && styles.selectedItem]}>
                                    <Text style={[styles.text, isSelected && styles.selectedText]}>
                                        {item}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />

                {/* masonary */}
                <MasonryList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={{ paddingHorizontal: 24 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 14 }}>
                            <TouchableOpacity onPress={()=>{
                                 navigation.navigate('Details', { id: item.id });
                            }}>
                            <Image
                                source={item.image}
                                resizeMode="cover"
                                style={{ height: 170, width: 160, borderRadius: 20 }}
                            />
                            </TouchableOpacity>
                        </View>
                    )}
                />



            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    search: {
        flex: 1,
        alignItems: "center",
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        gap: 12,
        borderColor: 'gray',
        flexDirection: "row",
    },
    item: {
        padding: 10,
        margin: 5,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    selectedItem: {
        backgroundColor: 'black',
    },
    text: {
        color: 'gray',
    },
    selectedText: {
        color: 'white',
    },
    container: {
        flex: 1,
        padding: 5,
        marginTop: 10
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        left: -5
    },
})

