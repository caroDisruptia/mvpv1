import React from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 85,
    paddingHorizontal: 35,
  },
  borderTitle: {
    borderBottom: "1px solid rgb(31, 30, 30)",
    margin: "20px 0",
  },
});

function MyDocument({ valuesForm }) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page} wrap>
        <Text
          id="register"
          style={{
            color: "#6A1B9A",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Hoja de vida
        </Text>
        <View >
          <Text style={styles.borderTitle}>Escribe tu nombre completo</Text>
          <Text>{valuesForm?.name || 'Nombre...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>Escribe tu teléfono</Text>
          <Text>{valuesForm?.phone || 'Teléfono...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>
            Escribe tu correo electrónico (e-mail)
          </Text>
          <Text>{valuesForm?.email || 'Email...'}</Text>
        </View>

        <View >
          <Text style={styles.borderTitle}>Escribe Perfil laboral</Text>
          <Text>{valuesForm?.profile || 'Tu perfil aquí...'}</Text>
        </View>

        <View >
          <Text style={styles.borderTitle}>Escribe donde has trabajado</Text>
          <Text>{valuesForm?.job || 'Donde has trabajado...'}</Text>
        </View>

        <View >
          <Text style={styles.borderTitle}>Escribe donde has estudiado</Text>
          <Text>{valuesForm?.studys || 'Donde has estudiado...'}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
