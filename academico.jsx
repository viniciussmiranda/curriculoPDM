import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}

const nivelMap = { 'Básico': 0.25, 'Intermediário': 0.6, 'Avançado': 0.85, 'Especialista': 1 };

export default function AcademicoScreen() {
  const { isDark } = useAppTheme();
  const { formacoes, habilidades, certificados } = dadosLocais;

  const bg = isDark ? '#0d1b2a' : Colors.creamLight;
  const cardBg = isDark ? '#1a2f42' : Colors.white;
  const textPrimary = isDark ? Colors.cream : Colors.blue;
  const textSecondary = isDark ? 'rgba(247,231,189,0.7)' : Colors.gray;

  // Agrupa habilidades por categoria
  const categorias = [...new Set(habilidades.map((h) => h.categoria))];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[styles.pageHeader, { backgroundColor: Colors.blue }]}>
          <MaterialCommunityIcons name="school" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Experiência Acadêmica</Text>
        </View>

        <View style={styles.content}>

          {/* Formações */}
          <Text style={[styles.sectionTitle, { color: textPrimary }]}>Formações</Text>
          {formacoes.map((f) => (
            <Surface key={f.id} style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
              <View style={styles.formacaoHeader}>
                <View style={[styles.grauBadge, { backgroundColor: Colors.blue }]}>
                  <Text style={styles.grauText}>{f.grau}</Text>
                </View>
                {f.atual && (
                  <View style={[styles.atualBadge, { backgroundColor: Colors.cream }]}>
                    <Text style={[styles.atualText, { color: Colors.blue }]}>EM CURSO</Text>
                  </View>
                )}
              </View>
              <Text style={[styles.curso, { color: textPrimary }]}>{f.curso}</Text>
              <Text style={[styles.instituicao, { color: Colors.blueLight }]}>{f.instituicao}</Text>
              <View style={styles.periodo}>
                <MaterialCommunityIcons name="calendar-range" size={13} color={textSecondary} />
                <Text style={[styles.periodoText, { color: textSecondary }]}>
                  {formatDate(f.data_inicio)} → {f.atual ? 'Em andamento' : formatDate(f.data_fim)}
                </Text>
              </View>
            </Surface>
          ))}

          {/* Habilidades técnicas por categoria */}
          <Text style={[styles.sectionTitle, { color: textPrimary }]}>Habilidades Técnicas</Text>
          {categorias.map((cat) => (
            <Surface key={cat} style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
              <Text style={[styles.catTitle, { color: textPrimary }]}>{cat}</Text>
              {habilidades
                .filter((h) => h.categoria === cat)
                .map((h) => (
                  <View key={h.id} style={styles.habilidadeRow}>
                    <View style={styles.habilidadeInfo}>
                      <Text style={[styles.habilidadeNome, { color: textSecondary }]}>{h.nome}</Text>
                      <Text style={[styles.habilidadeNivel, { color: Colors.blueLight }]}>{h.nivel}</Text>
                    </View>
                    <ProgressBar
                      progress={nivelMap[h.nivel] || 0.5}
                      color={Colors.blue}
                      style={[styles.progressBar, { backgroundColor: isDark ? Colors.blueDark : '#d1dde8' }]}
                    />
                  </View>
                ))}
            </Surface>
          ))}

          {/* Certificações */}
          <Text style={[styles.sectionTitle, { color: textPrimary }]}>Certificações</Text>
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            {certificados.map((c) => (
              <View key={c.id} style={styles.certRow}>
                <View style={[styles.certIcon, { backgroundColor: Colors.blue }]}>
                  <MaterialCommunityIcons name="certificate" size={14} color={Colors.cream} />
                </View>
                <Text style={[styles.certNome, { color: textSecondary }]}>{c.nome}</Text>
              </View>
            ))}
          </Surface>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 24,
    paddingTop: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  pageTitle: { color: Colors.cream, fontSize: 20, fontWeight: '800' },
  content: { padding: 16, paddingTop: 20 },
  sectionTitle: { fontSize: 13, fontWeight: '800', letterSpacing: 2, marginBottom: 10, marginTop: 8 },
  card: { borderRadius: 14, padding: 16, marginBottom: 12 },
  formacaoHeader: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  grauBadge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  grauText: { color: Colors.cream, fontSize: 10, fontWeight: '700' },
  atualBadge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  atualText: { fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  curso: { fontSize: 16, fontWeight: '800', marginBottom: 4 },
  instituicao: { fontSize: 13, fontWeight: '600', marginBottom: 8 },
  periodo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  periodoText: { fontSize: 12 },
  catTitle: { fontSize: 13, fontWeight: '800', marginBottom: 12 },
  habilidadeRow: { marginBottom: 10 },
  habilidadeInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  habilidadeNome: { fontSize: 13 },
  habilidadeNivel: { fontSize: 11, fontWeight: '600' },
  progressBar: { height: 6, borderRadius: 3 },
  certRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  certIcon: {
    width: 26, height: 26, borderRadius: 13,
    justifyContent: 'center', alignItems: 'center', marginTop: 1,
  },
  certNome: { fontSize: 13, flex: 1, lineHeight: 20 },
});
