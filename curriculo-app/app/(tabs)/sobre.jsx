
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';

const tecnologias = [
  { nome: 'React Native', desc: 'Framework mobile cross-platform', icon: 'react' },
  { nome: 'Expo + Expo Router', desc: 'Plataforma e navegação baseada em arquivos', icon: 'cube-outline' },
  { nome: 'React Native Paper', desc: 'Componentes Material Design', icon: 'material-design' },
  { nome: 'Express.js', desc: 'Framework back-end para API REST', icon: 'server' },
  { nome: 'PostgreSQL + NeonDB', desc: 'Banco de dados relacional na nuvem', icon: 'database' },
  { nome: 'Vercel', desc: 'Deploy do back-end', icon: 'cloud-upload' },
];

const funcionalidades = [
  { nome: 'Home / Perfil', desc: 'Informações pessoais, habilidades e certificações', icon: 'home' },
  { nome: 'Exp. Profissional', desc: 'Timeline de experiências de trabalho', icon: 'briefcase' },
  { nome: 'Exp. Acadêmica', desc: 'Formações e progresso de habilidades', icon: 'school' },
  { nome: 'Projetos', desc: 'Portfólio de projetos desenvolvidos', icon: 'rocket-launch' },
  { nome: 'Formulário de Contato ⭐', desc: 'Funcionalidade extra: envio de mensagem', icon: 'email' },
  { nome: 'Integração com API', desc: 'Conexão com back-end Express + PostgreSQL', icon: 'api' },
];

export default function SobreScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);

  const enviarContato = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setNome('');
      setEmail('');
      setMensagem('');
      Alert.alert('✅ Mensagem enviada!', 'Obrigado pelo contato, ' + nome + '! Responderei em breve.');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="information" size={28} color={Colors.cream} />
          <Text style={styles.pageTitle}>Sobre o App</Text>
        </View>
        <View style={styles.content}>

          <View style={styles.card}>
            <Text style={styles.appNome}>📱 Currículo App</Text>
            <Text style={styles.appDesc}>Aplicativo de portfólio desenvolvido com React Native + Expo para a disciplina de Dispositivos Móveis da UNICAP.</Text>
            <View style={styles.divider} />
            <View style={styles.infoRow}><Text style={styles.infoLabel}>Versão</Text><Text style={styles.infoValue}>1.0.0</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLabel}>Desenvolvedor</Text><Text style={styles.infoValue}>Vinicius Miranda</Text></View>
            <View style={styles.infoRow}><Text style={styles.infoLabel}>Disciplina</Text><Text style={styles.infoValue}>Dispositivos Móveis</Text></View>
          </View>

          {/* Formulário de Contato */}
          <Text style={styles.sectionTitle}>⭐ ENTRE EM CONTATO</Text>
          <View style={styles.card}>
            <Text style={styles.formDesc}>Tem alguma proposta ou dúvida? Me manda uma mensagem!</Text>
            <View style={styles.divider} />
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor={Colors.gray}
              value={nome}
              onChangeText={setNome}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor={Colors.gray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.label}>Mensagem</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Escreva sua mensagem..."
              placeholderTextColor={Colors.gray}
              value={mensagem}
              onChangeText={setMensagem}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity
              style={[styles.btnEnviar, enviando && { opacity: 0.7 }]}
              onPress={enviarContato}
              disabled={enviando}
            >
              <MaterialCommunityIcons name="send" size={18} color={Colors.cream} />
              <Text style={styles.btnText}>{enviando ? 'Enviando...' : 'Enviar mensagem'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>TECNOLOGIAS UTILIZADAS</Text>
          <View style={styles.card}>
            {tecnologias.map((t, i) => (
              <View key={t.nome}>
                <View style={styles.techRow}>
                  <View style={styles.techIcon}><MaterialCommunityIcons name={t.icon} size={16} color={Colors.cream} /></View>
                  <View style={styles.techInfo}>
                    <Text style={styles.techNome}>{t.nome}</Text>
                    <Text style={styles.techDesc}>{t.desc}</Text>
                  </View>
                </View>
                {i < tecnologias.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>FUNCIONALIDADES</Text>
          <View style={styles.card}>
            {funcionalidades.map((f, i) => (
              <View key={f.nome}>
                <View style={styles.techRow}>
                  <View style={styles.techIcon}><MaterialCommunityIcons name={f.icon} size={16} color={Colors.cream} /></View>
                  <View style={styles.techInfo}>
                    <Text style={styles.techNome}>{f.nome}</Text>
                    <Text style={styles.techDesc}>{f.desc}</Text>
                  </View>
                </View>
                {i < funcionalidades.length - 1 && <View style={styles.divider} />}
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
  card: { backgroundColor: Colors.white, borderRadius: 14, padding: 16, marginBottom: 14, elevation: 2 },
  appNome: { fontSize: 20, fontWeight: '800', color: Colors.blue, marginBottom: 8 },
  appDesc: { fontSize: 13, lineHeight: 21, color: Colors.gray },
  divider: { height: 1, backgroundColor: '#f0f0f0', marginVertical: 10 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  infoLabel: { fontSize: 13, color: Colors.gray },
  infoValue: { fontSize: 13, fontWeight: '700', color: Colors.blue },
  sectionTitle: { fontSize: 11, fontWeight: '800', letterSpacing: 2, color: Colors.blue, marginBottom: 10, marginTop: 4 },
  formDesc: { fontSize: 13, color: Colors.gray, lineHeight: 20 },
  label: { fontSize: 12, fontWeight: '700', color: Colors.blue, marginBottom: 6, marginTop: 4 },
  input: { borderWidth: 1.5, borderColor: '#d1dde8', borderRadius: 10, padding: 12, fontSize: 14, color: Colors.black, marginBottom: 12, backgroundColor: Colors.creamLight },
  textarea: { height: 100, textAlignVertical: 'top' },
  btnEnviar: { backgroundColor: Colors.blue, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 14, marginTop: 4 },
  btnText: { color: Colors.cream, fontSize: 15, fontWeight: '700' },
  techRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  techIcon: { width: 32, height: 32, borderRadius: 10, backgroundColor: Colors.blue, justifyContent: 'center', alignItems: 'center', marginTop: 2 },
  techInfo: { flex: 1 },
  techNome: { fontSize: 13, fontWeight: '700', color: Colors.blue, marginBottom: 2 },
  techDesc: { fontSize: 12, lineHeight: 17, color: Colors.gray },
});
