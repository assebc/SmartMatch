import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Input from "../../components/Input/input.js";
import Footer from "../../components/Footer/footer.js";
import ButtonInput from "../../components/Button/button.js";

import { COLORS } from '../../constants/constants.js';

const ForgotPassword = ({ navigation }, props) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <View style = {styles.global}>
            <View style = {styles.image_container}>
                <Image
                    source = {require("../../assets/favicon_watermark_w.png")}
                    style = {styles.image}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.form_container}>
                    <View style={styles.form}>
                        <Input placeholder="Email" secureTextEntry={false} required/>
                        <Input placeholder="New Password" secureTextEntry={false} required/>
                        <Input placeholder="Confirm Password" secureTextEntry={true} required/>
                        <ButtonInput title="CHANGE PASSWORD" onclick={undefined}/>
                    </View>
                    <View style={styles.relink}>
                        <TouchableOpacity
                            style={styles.quizButton}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.footer}>
                    <Footer />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    image_container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 300,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    form_container: {
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        borderRadius: 20,
    },
    relink: {
        width: 250,
        alignItems: "center"
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        marginBottom: 10,
        width: '100%',
    }
})

export default ForgotPassword;