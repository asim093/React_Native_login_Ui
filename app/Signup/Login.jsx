import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Seperator from "../../components/Seperator/Seperator";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.signupheader}>
          <Text style={styles.headerHeading}>Explore now </Text>
          <Text style={styles.headerPara}>Join SO Today.</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/signupGoogle.png")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/images/signupApple.png")}
            style={styles.image}
          />
        </View>
        <Seperator text={"Or"} color={"#000"} />
        <View style={styles.buttonDiv}>
          <TouchableOpacity style={styles.button}>
            <Link href="/Signup/Account" style={styles.buttonText}>
              Create account
            </Link>
          </TouchableOpacity>
        </View>

        <View style={styles.footercontent}>
          <Text style={styles.alreadypara}>Already Have An Account?</Text>
        </View>

        {/* Sign In Button with Border */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.footerlastpara}>
          By signing up, you agree to the
          <Text style={styles.underlineText}> Terms of Service </Text>
          and
          <Text style={styles.underlineText}> Privacy Policy </Text>, including
          <Text style={styles.underlineText}> Cookie Use </Text>.
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
    paddingBottom: 10,
  },
  image: {
    marginVertical: 5,
  },
  signupheader: {
    width: "80%",
    marginBottom: "5%",
  },
  headerHeading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  headerPara: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonDiv: {
    backgroundColor: "#0098FF",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footercontent: {
    width: "80%",
  },
  alreadypara: {
    fontWeight: "bold",
  },
  footerlastpara: {
    color: "#777777",
    textAlign: "center",
  },
  signInButton: {
    width: "80%",
    marginVertical: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  signInText: {
    color: "#0098FF",
    fontSize: 18,
    fontWeight: "bold",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});

export default Signup;
