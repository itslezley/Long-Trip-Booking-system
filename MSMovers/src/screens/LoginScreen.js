import React from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,Dimensions,KeyboardAvoidingView,ScrollView,Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Get device dimensions
const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo */}
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.loginSection}>
            {/* Email/Phone Input */}
            <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#ccc" style={styles.icon} />
            <TextInput
                placeholder="Email or Phone"
                placeholderTextColor="#ccc"
                style={styles.input}
            />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#ccc" style={styles.icon} />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                style={styles.input}
                />
            </View>
        </View>

        <View style={styles.buttomSection}>
            {/* Forgot Password */}
            <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn}>
            <LinearGradient colors={["#545454", "#535353"]} style={styles.gradientBtn}>
                <Text style={styles.loginText}>Login</Text>
            </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <Text style={styles.orText}>or</Text>

            {/* Create Account Button */}
            <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createText}>Create an account</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.06, // dynamic padding
  },
  image: {
    width: width * 0.6, // 60% of screen width
    height: height * 0.25, // 25% of screen height
    marginBottom: 2,
    top:160,
    position:"absolute"
  },
  title: {
    fontSize: width * 0.08, // scale with screen width
    fontWeight: "bold",
    color: "#f7b731",
  },
  subtitle: {
    fontSize: width * 0.04,
    letterSpacing: 1,
    color: "#000",
    marginBottom: 30,
  },
//   Login inp[uts]
    loginSection:{
        position:"absolute",
        top:400,
        left:30,
        right:30,
    },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    backgroundColor:"#000",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: "100%",
    height: height * 0.06, // scale with screen height
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#000",
  },
    /** Bottom White Section */
  buttomSection: {
    backgroundColor: "#000",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "113%", // little overflow for nice curve
    padding: 20,
    Top: 10,
    height:280,
    bottom:0,
    position:"absolute",
    alignItems: "center",
  },
  forgot: {
    color: "#ddd",
    fontSize: 12,
    marginVertical: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 10,
  },
  gradientBtn: {
    paddingVertical: height * 0.018,
    alignItems: "center",
    borderRadius: 25,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#fff",
    marginVertical: 10,
  },
  createBtn: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: height * 0.018,
    width: "80%",
    alignItems: "center",
  },
  createText: {
    color: "#000",
    fontSize: 16,
  },
});
