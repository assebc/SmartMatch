import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
} from "react-native";

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
import ButtonInput from "../../components/Button/button.js";
import api from "../../config.js";

import { COLORS } from "../../constants/constants.js";

export default function SignUp({ navigation }, props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const handleSignUp = async () => {
        try {
            const response = await api.post("signup", {
                id: email,
                pwd: password,
            });
            console.log(response);
            if (response.status == 200) {
                await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
                navigation.navigate("CreateProfile");
            }
        } catch (err) {
            setErrorMessage("Invalid sign up. Please try again!");
            console.log(err);
        }
    };

    return (
        <View style={styles.global}>
            <View style={styles.image_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.form_container}>
                <View style={styles.form}>
                    {errorMessage ? <Text>{errorMessage}</Text> : null}
                    <Input
                        placeholder="Email"
                        secureTextEntry={false}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Input placeholder="Password" secureTextEntry={true} />
                    <Input
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <ButtonInput
                        title="SIGN UP"
                        onPress={() => handleSignUp()}
                        wh={250}
                    />
                </View>
                <View style={styles.relink}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    image_container: {
        flex: 3,
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 450,
        height: 450,
    },
    form_container: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        borderRadius: 20,
    },
    relink: {
        width: 250,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        bottom: 0,
        width: "100%",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
