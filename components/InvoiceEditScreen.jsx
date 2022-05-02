import { View, Text, Alert, Modal, Button } from "react-native";
import React,{useState} from "react";
import styles from "../style";

export default function InvoiceEditScreen({navigation}) {
const [modalPaymentVisible, setModalPaymentVisible] = useState();
const [modalPrintVisible, setModalPrintVisible] = useState();

  return (
    <View style={styles.container}>
      <Text>Invoice Edit Screen</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPaymentVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modal}>
          <Text style={{ color: "#fff" }}>Payment popup</Text>
          <Button
            title="Hide modal"
            onPress={() => {
              setModalPaymentVisible(false);
            }}
          ></Button>
          <Button
            title="Go to Print"
            onPress={() => {
              setModalPaymentVisible(false);
              setModalPrintVisible(true);
            }}
          ></Button>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPrintVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modal}>
          <Text style={{ color: "#fff" }}>Print popup</Text>
          <Button
            title="Hide modal"
            onPress={() => {
              setModalPrintVisible(false);
              navigation.goBack();
            }}
          ></Button>
        </View>
      </Modal>
      <Button
        title="Show modal"
        onPress={() => {
          setModalPaymentVisible(true);
        }}
      ></Button>
    </View>
  );
}
