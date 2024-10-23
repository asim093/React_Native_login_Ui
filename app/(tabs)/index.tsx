import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Seperator from "../../components/Seperator/Seperator.jsx";

const Index = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header_Content}>
        <Text style={styles.title}>Sign in</Text>
        <Text>
          New User?{" "}
          <Link style={styles.anchor} href="/Signup/Login">
            Create an account
          </Link>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="black"
          autoCapitalize="none"
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Seperator text={"or"} color={"#000"} />
      <View>
        <Image
          source={require("../../assets/images/ContinueGoogle.png")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/ContinueFacebook.png")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/ContinueApple.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.lastImageContainer}>
        <Image
          source={require("../../assets/images/pavlovvisuals.png")}
          style={styles.lastImage}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    // paddingBottom: 20,
  },
  header_Content: {
    width: "80%",
    marginBottom: "5%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "black",
  },
  footerContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 0,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 5,
    width: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  orContainer: {
    width: "80%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  hr: {
    height: 1,
    flex: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  orTextContainer: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -15 }],
    zIndex: 1,
  },
  orText: {
    color: "black",
  },
  anchor: {
    color: "#0098FF",
  },
  image: {
    marginTop: 10,
  },
  lastImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  lastImage: {
    height: 200,
    width: "80%",
    resizeMode: "contain",
  },
});

export default Index;
