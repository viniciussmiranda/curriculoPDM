
import React from 'react';
import { View, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

const { pessoa, habilidades, idiomas, certificados } = dadosLocais;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>PORTFÓLIO</Text>
          <Image source={require('../../assets/profile.jpg')} style={styles.avatar} />
          <Text style={styles.nome}>{pessoa.nome}</Text>
          <Text style={styles.cargo}>{pessoa.cargo}</Text>
          <View style={styles.contatos}>
            <MaterialCommunityIcons name="linkedin" size={28} color={Colors.cream} onPress={() => Linking.openURL('https://' + pessoa.linkedin)} style={styles.icon} />
            <MaterialCommunityIcons name="github" size={28} color={Colors.cream} onPress={() => Linking.openURL('https://' + pessoa.github)} style={styles.icon} />
            <MaterialCommunityIcons name="email" size={28} color={Colors.cream} onPress={() => Linking.openURL('mailto:' + pessoa.email)} style={styles.icon} />
            <MaterialCommunityIcons name="phone" size={28} color={Colors.cream} onPress={() => Linking.openURL('tel:' + pessoa.telefone)} style={styles.icon} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sobre mim</Text>
            <Text style={styles.cardText}>{pessoa.resumo}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Habilidades</Text>
            <View style={styles.chips}>
              {habilidades.map((h) => (
                <View key={h.id} style={styles.chip}>
                  <Text style={styles.chipText}>{h.nome}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Idiomas</Text>
            {idiomas.map((i) => (
              <View key={i.id} style={styles.row}>
                <Text style={styles.cardText}>{i.idioma}</Text>
                <View style={styles.nivelBadge}><Text style={styles.nivelText}>{i.nivel}</Text></View>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Certificações</Text>
            {certificados.map((c) => (
              <View key={c.id} style={styles.certRow}>
                <MaterialCommunityIcons name="check-circle" size={16} color={Colors.blue} />
                <Text style={[styles.cardText, { flex: 1 }]}>{c.nome}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.creamLight },
  header: { backgroundColor: Colors.blue, alignItems: 'center', paddingTop: 20, paddingBottom: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerLabel: { color: 'rgba(247,231,189,0.6)', fontSize: 11, letterSpacing: 3, fontWeight: '700', marginBottom: 12 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: Colors.cream, marginBottom: 12 },
  nome: { color: Colors.cream, fontSize: 24, fontWeight: '800' },
  cargo: { color: 'rgba(247,231,189,0.75)', fontSize: 13, marginTop: 4, textAlign: 'center', paddingHorizontal: 30 },
  contatos: { flexDirection: 'row', marginTop: 14, gap: 8 },
  icon: { padding: 6 },
  content: { padding: 16, gap: 14 },
  card: { backgroundColor: Colors.white, borderRadius: 16, padding: 18, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: Colors.blue, marginBottom: 12 },
  cardText: { fontSize: 14, lineHeight: 22, color: Colors.gray },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: Colors.blue, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5 },
  chipText: { color: Colors.cream, fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  nivelBadge: { backgroundColor: Colors.cream, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  nivelText: { color: Colors.blue, fontSize: 11, fontWeight: '700' },
  certRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
});