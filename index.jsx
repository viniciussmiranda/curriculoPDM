import React from 'react';
import { View, StyleSheet, ScrollView, Linking, Dimensions } from 'react-native';
import { Text, Chip, IconButton, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Colors } from '../../constants/theme';
import { dadosLocais } from '../../constants/api';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const { isDark, toggleTheme, theme } = useAppTheme();
  const { pessoa, habilidades, idiomas, certificados } = dadosLocais;

  const bg = isDark ? '#0d1b2a' : Colors.creamLight;
  const cardBg = isDark ? '#1a2f42' : Colors.white;
  const textPrimary = isDark ? Colors.cream : Colors.blue;
  const textSecondary = isDark ? 'rgba(247,231,189,0.7)' : Colors.gray;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={[styles.header, { backgroundColor: Colors.blue }]}>
          <View style={styles.headerTop}>
            <Text style={styles.headerLabel}>PORTFÓLIO</Text>
            <IconButton
              icon={isDark ? 'weather-sunny' : 'weather-night'}
              iconColor={Colors.cream}
              size={22}
              onPress={toggleTheme}
            />
          </View>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons name="account" size={60} color={Colors.blue} />
            </View>
          </View>

          <Text style={styles.nome}>{pessoa.nome}</Text>
          <Text style={styles.cargo}>{pessoa.cargo}</Text>

          {/* Contatos */}
          <View style={styles.contatos}>
            <IconButton
              icon="linkedin"
              iconColor={Colors.cream}
              size={22}
              onPress={() => Linking.openURL('https://' + pessoa.linkedin)}
            />
            <IconButton
              icon="github"
              iconColor={Colors.cream}
              size={22}
              onPress={() => Linking.openURL('https://' + pessoa.github)}
            />
            <IconButton
              icon="email"
              iconColor={Colors.cream}
              size={22}
              onPress={() => Linking.openURL('mailto:' + pessoa.email)}
            />
            <IconButton
              icon="phone"
              iconColor={Colors.cream}
              size={22}
              onPress={() => Linking.openURL('tel:' + pessoa.telefone)}
            />
          </View>
        </View>

        <View style={styles.content}>

          {/* Resumo */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="account-circle" size={20} color={Colors.blue} />
              <Text style={[styles.cardTitle, { color: textPrimary }]}>Sobre mim</Text>
            </View>
            <Text style={[styles.resumo, { color: textSecondary }]}>{pessoa.resumo}</Text>
          </Surface>

          {/* Habilidades */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="code-tags" size={20} color={Colors.blue} />
              <Text style={[styles.cardTitle, { color: textPrimary }]}>Habilidades</Text>
            </View>
            <View style={styles.chips}>
              {habilidades.map((h) => (
                <Chip
                  key={h.id}
                  style={[styles.chip, { backgroundColor: isDark ? Colors.blueDark : Colors.blue }]}
                  textStyle={{ color: Colors.cream, fontSize: 11 }}
                >
                  {h.nome}
                </Chip>
              ))}
            </View>
          </Surface>

          {/* Idiomas */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="translate" size={20} color={Colors.blue} />
              <Text style={[styles.cardTitle, { color: textPrimary }]}>Idiomas</Text>
            </View>
            {idiomas.map((i) => (
              <View key={i.id} style={styles.idiomaRow}>
                <Text style={[styles.idiomaName, { color: textPrimary }]}>{i.idioma}</Text>
                <Chip
                  style={[styles.nivelChip, { backgroundColor: Colors.cream }]}
                  textStyle={{ color: Colors.blue, fontSize: 10, fontWeight: '700' }}
                >
                  {i.nivel}
                </Chip>
              </View>
            ))}
          </Surface>

          {/* Certificados */}
          <Surface style={[styles.card, { backgroundColor: cardBg }]} elevation={2}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="certificate" size={20} color={Colors.blue} />
              <Text style={[styles.cardTitle, { color: textPrimary }]}>Certificações</Text>
            </View>
            {certificados.map((c) => (
              <View key={c.id} style={styles.certRow}>
                <MaterialCommunityIcons name="check-circle" size={16} color={Colors.blue} style={{ marginTop: 2 }} />
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
  header: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  headerLabel: {
    color: 'rgba(247,231,189,0.6)',
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: '700',
  },
  avatarContainer: { marginTop: 10, marginBottom: 14 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(247,231,189,0.5)',
  },
  nome: {
    color: Colors.cream,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cargo: {
    color: 'rgba(247,231,189,0.75)',
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  contatos: { flexDirection: 'row', marginTop: 10 },
  content: { padding: 16, gap: 14 },
  card: { borderRadius: 16, padding: 18 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  resumo: { fontSize: 14, lineHeight: 22 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderRadius: 20 },
  idiomaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  idiomaName: { fontSize: 14, fontWeight: '600' },
  nivelChip: { borderRadius: 20, height: 28 },
  certRow: { flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' },
  certNome: { fontSize: 13, flex: 1, lineHeight: 20 },
});
