import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.greeting}>Hello 👋🏻</Text>
                    <Text style={styles.username}>Christie Doe</Text>
                </View>
                <Image source={require('./assets/avt.png')} style={styles.profileImage} />
            </View>
            <Text style={styles.insightsTitle}>Your Insights</Text>

            <View style={styles.row}>
                <Card title="Scan new" value="Scanned 483" image={require('./assets/scan.png')} />
                <Card title="Counterfeits" value="Counterfeited 32" image={require('./assets/counterfeit.png')} />
            </View>
            <View style={styles.row}>
                <Card title="Success" value="Checkouts 8" image={require('./assets/success.png')} />
                <Card title="Directory" value="History 26" image={require('./assets/directory.png')} />
            </View>
            <View style={styles.exploreMore}>
                <TouchableOpacity>
                    <Text style={styles.exploreText}>Explore More</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Notifications</Text>
        </View>
    );
};

const ScanScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Scan</Text>
        </View>
    );
};

const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>History</Text>
        </View>
    );
};

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Cart</Text>
        </View>
    );
};

const Card = ({ title, value, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        height: 70,
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    },
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/home_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Notification" 
                    component={NotificationScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/nofi_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Scan" 
                    component={ScanScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/scan_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="History" 
                    component={HistoryScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/history_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Cart" 
                    component={CartScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/cart_nav.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    headerText: {
        flexDirection: 'column',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greeting: {
        fontSize: 24,
        margin: 0,
    },
    username: {
        fontSize: 16,
        color: '#666',
    },
    insightsTitle: {
        fontSize: 20,
        color: '#333',
        marginLeft: 20,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: 158,
        height: 176,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 30,
        margin: 10,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        alignItems: 'center',
    },
    cardImage: {
        width: 55,
        height: 55,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 16,
    },
    exploreMore: {
        alignItems: 'center',
        marginTop: 20,
    },
    exploreText: {
        color: '#007bff',
        fontSize: 16,
    },
});

export default App;