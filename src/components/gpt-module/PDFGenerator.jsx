import React from "react";
import {
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
        
        <View >
          <Text style={styles.borderTitle}>Nombre</Text>
          <Text>{valuesForm?.name || 'Nombre...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>Teléfono</Text>
          <Text>{valuesForm?.phone || 'Teléfono...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>
            Correo electrónico (e-mail)
          </Text>
          <Text>{valuesForm?.email || 'Email...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>Perfil laboral</Text>
          <Text>{valuesForm?.profile || 'Tu perfil aquí...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>Experiencia Laboral</Text>
          <Text>{valuesForm?.job || 'Donde has trabajado...'}</Text>
        </View>
        <View >
          <Text style={styles.borderTitle}>Educación</Text>
          <Text>{valuesForm?.studys || 'Donde has estudiado...'}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
