import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Seperator from "../../components/Seperator/Seperator";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Account = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to SO</Text>
        <Text style={styles.subtitle}>
          Login or Sign up to access your account
        </Text>
      </View>
      <View style={styles.loginSignupContainer}>
        <TouchableOpacity style={styles.firstbutton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/loginGoogle.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/loginApple.png")}
          style={styles.image}
        />

        <Seperator text={"or Continue with email"} color={"#000"} />
      </View>

      {/* Input Fields for Email and Password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="email" size={24} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={24} color="grey" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.forgetPassword}>
        <Text>Forget Password?</Text>
      </View>

      {/* Button for Continue */}
      <View style={styles.buttonDiv}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footerlastpara}>
          By signing up, you agree to the
          <Text style={styles.underlineText}> Terms of Service </Text>
          and
          <Text style={styles.underlineText}> Privacy Policy </Text>, including
          <Text style={styles.underlineText}> Cookie Use </Text>.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 70,
    paddingBottom: 20,
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#777777",
  },
  loginSignupContainer: {
    flexDirection: "row",
    justifyContent: "space-center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e6f5ff",
    marginTop: 20,
  },
  button: {
    width: "50%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  firstbutton: {
    borderRadius: 25,
    width: "50%",
    backgroundColor: "#e6f5ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    height: 200,
    backgroundColor: "#e6f5ff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  image: {
    marginTop: 10,
    width: "90%",
  },
  inputContainer: {
    backgroundColor: "#e6f5ff",
    paddingHorizontal: "5%",
    height: "30%",
    width: "100%",
    paddingVertical: 20,
    // marginVertical: 20,
  },
  forgetPassword: {
    backgroundColor: "#e6f5ff",
    width: "100%",
    paddingHorizontal: "8%",
  },
  inputWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#0098FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
   
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  buttonDiv:{
    justifyContent:"center",
    alignItems:"center",
    height:"20%",
    paddingHorizontal:"6%",
    width:"100%",
    backgroundColor: "#e6f5ff",
  },
  footerlastpara: {
    color: "#777777",
    textAlign: "center",
  },
});

export default Account;
