import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}

export default function ProfissionalScreen() {
  const { experiencias } = dadosLocais;
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="briefcase" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Experiência Profissional</Text>
        </View>
        <View style={styles.content}>
          {experiencias.map((exp, index) => (
            <View key={exp.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[styles.dot, { backgroundColor: exp.atual ? Colors.cream : Colors.blueLight }]} />
                {index < experiencias.length - 1 && <View style={styles.line} />}
              </View>
              <View style={styles.card}>
                {exp.atual && <View style={styles.badge}><Text style={styles.badgeText}>ATUAL</Text></View>}
                <Text style={styles.empresa}>{exp.empresa}</Text>
                <Text style={styles.cargo}>{exp.cargo}</Text>
                <View style={styles.periodo}>
                  <MaterialCommunityIcons name="calendar" size={12} color={Colors.gray} />
                  <Text style={styles.periodoText}>{formatDate(exp.data_inicio)} — {exp.atual ? 'Presente' : formatDate(exp.data_fim)}</Text>
                </View>
                <Text style={styles.descricao}>{exp.descricao}</Text>
              </View>
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
  timelineItem: { flexDirection: 'row', gap: 12, marginBottom: 8 },
  timelineLeft: { alignItems: 'center', width: 20, paddingTop: 18 },
  dot: { width: 14, height: 14, borderRadius: 7, borderWidth: 2, borderColor: Colors.blue, zIndex: 1 },
  line: { width: 2, flex: 1, backgroundColor: '#d1dde8', marginTop: 4 },
  card: { flex: 1, backgroundColor: Colors.white, borderRadius: 14, padding: 16, marginBottom: 12, elevation: 2 },
  badge: { alignSelf: 'flex-start', backgroundColor: Colors.blue, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, marginBottom: 8 },
  badgeText: { color: Colors.cream, fontSize: 9, fontWeight: '800', letterSpacing: 1.5 },
  empresa: { fontSize: 15, fontWeight: '800', color: Colors.blue, marginBottom: 2 },
  cargo: { fontSize: 13, fontWeight: '600', color: Colors.blueLight, marginBottom: 6 },
  periodo: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  periodoText: { fontSize: 11, color: Colors.gray },
  descricao: { fontSize: 13, lineHeight: 20, color: Colors.gray },
});