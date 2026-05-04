import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Text, Surface, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

const projectIcons = ['rocket-launch', 'hand-wave', 'api', 'cpu-64-bit', 'web'];

export default function ProjetosScreen() {
  const { isDark } = useAppTheme();
  const { projetos } = dadosLocais;

  const bg = isDark ? '#0d1b2a' : Colors.creamLight;
  const cardBg = isDark ? '#1a2f42' : Colors.white;
  const textPrimary = isDark ? Colors.cream : Colors.blue;
  const textSecondary = isDark ? 'rgba(247,231,189,0.7)' : Colors.gray;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[styles.pageHeader, { backgroundColor: Colors.blue }]}>
          <MaterialCommunityIcons name="rocket-launch" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Projetos</Text>
        </View>

        <View style={styles.content}>
          <Text style={[styles.subtitle, { color: textSecondary }]}>
            Projetos desenvolvidos ao longo da carreira acadêmica e profissional.
          </Text>

          {projetos.map((proj, index) => (
            <Surface key={proj.id} style={[styles.card, { backgroundColor: cardBg }]} elevation={3}>
              {/* Ícone decorativo */}
              <View style={[styles.iconBox, { backgroundColor: Colors.blue }]}>
                <MaterialCommunityIcons
                  name={projectIcons[index % projectIcons.length]}
                  size={28}
                  color={Colors.cream}
                />
              </View>

              <Text style={[styles.projNome, { color: textPrimary }]}>{proj.nome}</Text>
              <Text style={[styles.projDesc, { color: textSecondary }]}>{proj.descricao}</Text>

              {/* Links */}
              <View style={styles.links}>
                {proj.repositorio && (
                  <Button
                    mode="outlined"
                    icon="github"
                    onPress={() => Linking.openURL('https://' + proj.repositorio)}
                    style={[styles.linkBtn, { borderColor: Colors.blue }]}
                    labelStyle={{ color: Colors.blue, fontSize: 12 }}
                    compact
                  >
                    Repositório
                  </Button>
                )}
                {proj.url && (
                  <Button
                    mode="contained"
                    icon="open-in-new"
                    onPress={() => Linking.openURL(proj.url)}
                    style={[styles.linkBtn, { backgroundColor: Colors.blue }]}
                    labelStyle={{ color: Colors.cream, fontSize: 12 }}
                    compact
                  >
                    Acessar
                  </Button>
                )}
              </View>
            </Surface>
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
  subtitle: { fontSize: 13, marginBottom: 16, lineHeight: 20 },
  card: { borderRadius: 16, padding: 20, marginBottom: 16 },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  projNome: { fontSize: 17, fontWeight: '800', marginBottom: 8 },
  projDesc: { fontSize: 13, lineHeight: 21, marginBottom: 14 },
  links: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  linkBtn: { borderRadius: 20 },
});
