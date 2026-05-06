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
  return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}

const nivelMap = { 'Básico': 0.25, 'Intermediário': 0.6, 'Avançado': 0.85, 'Especialista': 1 };

export default function AcademicoScreen() {
  const { formacoes, habilidades, certificados } = dadosLocais;
  const categorias = [...new Set(habilidades.map((h) => h.categoria))];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="school" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Experiência Acadêmica</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Formações</Text>
          {formacoes.map((f) => (
            <View key={f.id} style={styles.card}>
              <View style={styles.badgeRow}>
                <View style={styles.badge}><Text style={styles.badgeText}>{f.grau}</Text></View>
                {f.atual && <View style={styles.atualBadge}><Text style={styles.atualText}>EM CURSO</Text></View>}
              </View>
              <Text style={styles.curso}>{f.curso}</Text>
              <Text style={styles.instituicao}>{f.instituicao}</Text>
              <View style={styles.periodo}>
                <MaterialCommunityIcons name="calendar-range" size={13} color={Colors.gray} />
                <Text style={styles.periodoText}>{formatDate(f.data_inicio)} → {f.atual ? 'Em andamento' : formatDate(f.data_fim)}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          {categorias.map((cat) => (
            <View key={cat} style={styles.card}>
              <Text style={styles.catTitle}>{cat}</Text>
              {habilidades.filter((h) => h.categoria === cat).map((h) => (
                <View key={h.id} style={styles.habilidadeRow}>
                  <View style={styles.habilidadeInfo}>
                    <Text style={styles.habilidadeNome}>{h.nome}</Text>
                    <Text style={styles.habilidadeNivel}>{h.nivel}</Text>
                  </View>
                  <View style={styles.progressBg}>
                    <View style={[styles.progressFill, { width: `${(nivelMap[h.nivel] || 0.5) * 100}%` }]} />
                  </View>
                </View>
              ))}
            </View>
          ))}

          <Text style={styles.sectionTitle}>Certificações</Text>
          <View style={styles.card}>
            {certificados.map((c) => (
              <View key={c.id} style={styles.certRow}>
                <View style={styles.certIcon}><MaterialCommunityIcons name="certificate" size={14} color={Colors.cream} /></View>
                <Text style={styles.certNome}>{c.nome}</Text>
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
  header: { backgroundColor: Colors.blue, flexDirection: 'row', alignItems: 'center', gap: 12, padding: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  pageTitle: { color: Colors.cream, fontSize: 20, fontWeight: '800' },
  content: { padding: 16, paddingTop: 20 },
  sectionTitle: { fontSize: 11, fontWeight: '800', letterSpacing: 2, color: Colors.blue, marginBottom: 10, marginTop: 8 },
  card: { backgroundColor: Colors.white, borderRadius: 14, padding: 16, marginBottom: 12, elevation: 2 },
  badgeRow: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  badge: { backgroundColor: Colors.blue, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { color: Colors.cream, fontSize: 10, fontWeight: '700' },
  atualBadge: { backgroundColor: Colors.cream, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  atualText: { color: Colors.blue, fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  curso: { fontSize: 16, fontWeight: '800', color: Colors.blue, marginBottom: 4 },
  instituicao: { fontSize: 13, fontWeight: '600', color: Colors.blueLight, marginBottom: 8 },
  periodo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  periodoText: { fontSize: 12, color: Colors.gray },
  catTitle: { fontSize: 13, fontWeight: '800', color: Colors.blue, marginBottom: 12 },
  habilidadeRow: { marginBottom: 10 },
  habilidadeInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  habilidadeNome: { fontSize: 13, color: Colors.gray },
  habilidadeNivel: { fontSize: 11, fontWeight: '600', color: Colors.blueLight },
  progressBg: { height: 6, backgroundColor: '#d1dde8', borderRadius: 3 },
  progressFill: { height: 6, backgroundColor: Colors.blue, borderRadius: 3 },
  certRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  certIcon: { width: 26, height: 26, borderRadius: 13, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', marginTop: 1 },
  certNome: { fontSize: 13, flex: 1, lineHeight: 20, color: Colors.gray },
});
