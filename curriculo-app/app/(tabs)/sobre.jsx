import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Switch, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Colors } from '../../constants/theme';

const tecnologias = [
  { nome: 'React Native', desc: 'Framework para desenvolvimento mobile cross-platform', icon: 'react' },
  { nome: 'Expo', desc: 'Plataforma e toolchain para apps React Native', icon: 'cube-outline' },
  { nome: 'Expo Router', desc: 'Navegação baseada em arquivos para Expo', icon: 'routes' },
  { nome: 'React Native Paper', desc: 'Biblioteca de componentes Material Design', icon: 'material-design' },
  { nome: 'Express.js', desc: 'Framework back-end para API REST', icon: 'server' },
  { nome: 'PostgreSQL + NeonDB', desc: 'Banco de dados relacional na nuvem', icon: 'database' },
  { nome: 'Vercel', desc: 'Plataforma de deploy do back-end', icon: 'cloud-upload' },
];

const funcionalidades = [
  { nome: 'Home / Perfil', desc: 'Informações pessoais, habilidades e certificações', icon: 'home' },
  { nome: 'Exp. Profissional', desc: 'Timeline de experiências de trabalho', icon: 'briefcase' },
  { nome: 'Exp. Acadêmica', desc: 'Formações e progresso de habilidades', icon: 'school' },
  { nome: 'Projetos', desc: 'Portfólio de projetos desenvolvidos', icon: 'rocket-launch' },
  { nome: 'Modo Escuro/Claro ⭐', desc: 'Funcionalidade extra: alternância de tema', icon: 'theme-light-dark' },
  { nome: 'Integração com API', desc: 'Conexão com back-end Express + PostgreSQL', icon: 'api' },
];

export default function SobreScreen() {
  const { isDark, toggleTheme } = useAppTheme();

  const bg = isDark ? '#0d1b2a' : Colors.creamLight;
  const cardBg = isDark ? '#1a2f42' : Colors.white;
  const textPrimary = isDark ? Colors.cream : Colors.blue;
  const textSecondary = isDark ? 'rgba(247,231,189,0.7)' : Colors.gray;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[styles.pageHeader, { backgroundColor: Colors.blue }]}>
          <MaterialCommunityIcons name="information" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Sobre o App</Text>
        </View>

        <View style={styles.content}>

          {/* Info do app */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <Text style={[styles.appNome, { color: textPrimary }]}>📱 Currículo App</Text>
            <Text style={[styles.appDesc, { color: textSecondary }]}>
              Aplicativo de portfólio desenvolvido com React Native + Expo como projeto da disciplina de
              Desenvolvimento de Aplicações para Dispositivos Móveis da UNICAP.
            </Text>
            <Divider style={{ marginVertical: 12 }} />
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: textSecondary }]}>Versão</Text>
              <Text style={[styles.infoValue, { color: textPrimary }]}>1.0.0</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: textSecondary }]}>Desenvolvedor</Text>
              <Text style={[styles.infoValue, { color: textPrimary }]}>Vinicius Miranda</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: textSecondary }]}>Disciplina</Text>
              <Text style={[styles.infoValue, { color: textPrimary }]}>Dispositivos Móveis</Text>
            </View>
          </Surface>

          {/* Funcionalidade extra - Tema */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="theme-light-dark" size={20} color={Colors.blue} />
              <Text style={[styles.cardTitle, { color: textPrimary }]}>Funcionalidade Extra</Text>
            </View>
            <View style={styles.themeRow}>
              <View style={styles.themeInfo}>
                <MaterialCommunityIcons
                  name={isDark ? 'weather-night' : 'weather-sunny'}
                  size={22}
                  color={isDark ? Colors.cream : Colors.blue}
                />
                <Text style={[styles.themeLabel, { color: textPrimary }]}>
                  Modo {isDark ? 'Escuro' : 'Claro'}
                </Text>
              </View>
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                color={Colors.blue}
              />
            </View>
            <Text style={[styles.themeDesc, { color: textSecondary }]}>
              O app suporta alternância entre tema claro e escuro, adaptando todas as telas e componentes.
            </Text>
          </Surface>

          {/* Tecnologias */}
          <Text style={[styles.sectionTitle, { color: textPrimary }]}>TECNOLOGIAS UTILIZADAS</Text>
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            {tecnologias.map((t, i) => (
              <View key={t.nome}>
                <View style={styles.techRow}>
                  <View style={[styles.techIcon, { backgroundColor: Colors.blue }]}>
                    <MaterialCommunityIcons name={t.icon} size={16} color={Colors.cream} />
                  </View>
                  <View style={styles.techInfo}>
                    <Text style={[styles.techNome, { color: textPrimary }]}>{t.nome}</Text>
                    <Text style={[styles.techDesc, { color: textSecondary }]}>{t.desc}</Text>
                  </View>
                </View>
                {i < tecnologias.length - 1 && <Divider style={{ marginVertical: 8 }} />}
              </View>
            ))}
          </Surface>

          {/* Funcionalidades */}
          <Text style={[styles.sectionTitle, { color: textPrimary }]}>FUNCIONALIDADES DO APP</Text>
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            {funcionalidades.map((f, i) => (
              <View key={f.nome}>
                <View style={styles.techRow}>
                  <View style={[styles.techIcon, { backgroundColor: Colors.blue }]}>
                    <MaterialCommunityIcons name={f.icon} size={16} color={Colors.cream} />
                  </View>
                  <View style={styles.techInfo}>
                    <Text style={[styles.techNome, { color: textPrimary }]}>{f.nome}</Text>
                    <Text style={[styles.techDesc, { color: textSecondary }]}>{f.desc}</Text>
                  </View>
                </View>
                {i < funcionalidades.length - 1 && <Divider style={{ marginVertical: 8 }} />}
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
  card: { borderRadius: 14, padding: 16, marginBottom: 14 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  appNome: { fontSize: 20, fontWeight: '800', marginBottom: 8 },
  appDesc: { fontSize: 13, lineHeight: 21 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  infoLabel: { fontSize: 13 },
  infoValue: { fontSize: 13, fontWeight: '700' },
  themeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  themeInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  themeLabel: { fontSize: 15, fontWeight: '600' },
  themeDesc: { fontSize: 12, lineHeight: 18 },
  sectionTitle: { fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 10, marginTop: 4 },
  techRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  techIcon: {
    width: 32, height: 32, borderRadius: 10,
    justifyContent: 'center', alignItems: 'center', marginTop: 2,
  },
  techInfo: { flex: 1 },
  techNome: { fontSize: 13, fontWeight: '700', marginBottom: 2 },
  techDesc: { fontSize: 12, lineHeight: 17 },
});
