import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}

export default function ProfissionalScreen() {
  const { isDark } = useAppTheme();
  const { experiencias } = dadosLocais;

  const bg = isDark ? '#0d1b2a' : Colors.creamLight;
  const cardBg = isDark ? '#1a2f42' : Colors.white;
  const textPrimary = isDark ? Colors.cream : Colors.blue;
  const textSecondary = isDark ? 'rgba(247,231,189,0.7)' : Colors.gray;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header da tela */}
        <View style={[styles.pageHeader, { backgroundColor: Colors.blue }]}>
          <MaterialCommunityIcons name="briefcase" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Experiência Profissional</Text>
        </View>

        <View style={styles.content}>
          {experiencias.map((exp, index) => (
            <View key={exp.id} style={styles.timelineItem}>
              {/* Linha do tempo */}
              <View style={styles.timelineLeft}>
                <View style={[styles.dot, { backgroundColor: exp.atual ? Colors.cream : Colors.blueLight, borderColor: Colors.blue }]} />
                {index < experiencias.length - 1 && (
                  <View style={[styles.line, { backgroundColor: isDark ? Colors.blueDark : '#d1dde8' }]} />
                )}
              </View>

              {/* Card */}
              <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
                {exp.atual && (
                  <View style={[styles.badge, { backgroundColor: Colors.blue }]}>
                    <Text style={styles.badgeText}>ATUAL</Text>
                  </View>
                )}
                <Text style={[styles.empresa, { color: textPrimary }]}>{exp.empresa}</Text>
                <Text style={[styles.cargo, { color: Colors.blueLight }]}>{exp.cargo}</Text>
                <View style={styles.periodo}>
                  <MaterialCommunityIcons name="calendar" size={12} color={textSecondary} />
                  <Text style={[styles.periodoText, { color: textSecondary }]}>
                    {formatDate(exp.data_inicio)} — {exp.atual ? 'Presente' : formatDate(exp.data_fim)}
                  </Text>
                </View>
                <Text style={[styles.descricao, { color: textSecondary }]}>{exp.descricao}</Text>
              </Surface>
            </View>
          ))}
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
  timelineItem: { flexDirection: 'row', gap: 12, marginBottom: 8 },
  timelineLeft: { alignItems: 'center', width: 20, paddingTop: 18 },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    zIndex: 1,
  },
  line: { width: 2, flex: 1, marginTop: 4 },
  card: { flex: 1, borderRadius: 14, padding: 16, marginBottom: 12 },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 8,
  },
  badgeText: { color: Colors.cream, fontSize: 9, fontWeight: '800', letterSpacing: 1.5 },
  empresa: { fontSize: 15, fontWeight: '800', marginBottom: 2 },
  cargo: { fontSize: 13, fontWeight: '600', marginBottom: 6 },
  periodo: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  periodoText: { fontSize: 11 },
  descricao: { fontSize: 13, lineHeight: 20 },
});
