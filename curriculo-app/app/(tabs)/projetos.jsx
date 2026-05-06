
import React from 'react';
import { View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

const projectIcons = ['rocket-launch', 'hand-wave', 'api', 'cpu-64-bit', 'web'];

export default function ProjetosScreen() {
  const { projetos } = dadosLocais;
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="rocket-launch" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Projetos</Text>
        </View>
        <View style={styles.content}>
          {projetos.map((proj, index) => (
            <View key={proj.id} style={styles.card}>
              <View style={styles.iconBox}>
                <MaterialCommunityIcons name={projectIcons[index % projectIcons.length]} size={28} color={Colors.cream} />
              </View>
              <Text style={styles.projNome}>{proj.nome}</Text>
              <Text style={styles.projDesc}>{proj.descricao}</Text>
              {proj.repositorio && (
                <TouchableOpacity style={styles.linkBtn} onPress={() => Linking.openURL('https://' + proj.repositorio)}>
                  <MaterialCommunityIcons name="github" size={16} color={Colors.cream} />
                  <Text style={styles.linkText}>Repositório</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.creamLight },
  header: { backgroundColor: Colors.blue, flexDirection: 'row', alignItems: 'center', gap: 12, padding: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  pageTitle: { color: Colors.cream, fontSize: 20, fontWeight: '800' },
  content: { padding: 16, paddingTop: 20 },
  card: { backgroundColor: Colors.white, borderRadius: 16, padding: 20, marginBottom: 16, elevation: 2 },
  iconBox: { width: 56, height: 56, borderRadius: 16, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  projNome: { fontSize: 17, fontWeight: '800', color: Colors.blue, marginBottom: 8 },
  projDesc: { fontSize: 13, lineHeight: 21, color: Colors.gray, marginBottom: 14 },
  linkBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: Colors.blue, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, alignSelf: 'flex-start' },
  linkText: { color: Colors.cream, fontSize: 13, fontWeight: '600' },
});
