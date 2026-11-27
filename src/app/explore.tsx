import { useState } from 'react';
import { View, Text, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { housekeepingPack } from '../data/lessons';

type Lang = 'en' | 'tl';

export default function LessonsScreen() {
  const [lang, setLang] = useState<Lang>('en');

  const sections = housekeepingPack.sections.map((s) => ({
    title: s.title,
    data: s.phrases,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{housekeepingPack.title}</Text>

      <View style={styles.langRow}>
        <TouchableOpacity
          style={[styles.langBtn, lang === 'en' && styles.langBtnActive]}
          onPress={() => setLang('en')}
        >
          <Text style={[styles.langText, lang === 'en' && styles.langTextActive]}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.langBtn, lang === 'tl' && styles.langBtnActive]}
          onPress={() => setLang('tl')}
        >
          <Text style={[styles.langText, lang === 'tl' && styles.langTextActive]}>Tagalog</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.fr}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.fr}>{item.fr}</Text>
            <Text style={styles.meaning}>{lang === 'en' ? item.en : item.tl}</Text>
            <Text style={styles.say}>🔊 {item.say}</Text>
            {item.note ? <Text style={styles.note}>💡 {item.note}</Text> : null}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 12 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  langRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 8 },
  langBtn: { paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, borderWidth: 1, borderColor: '#2563eb' },
  langBtnActive: { backgroundColor: '#2563eb' },
  langText: { color: '#2563eb', fontWeight: '600' },
  langTextActive: { color: '#fff' },
  sectionTitle: { fontSize: 17, fontWeight: '700', marginTop: 16, marginBottom: 6, color: '#1e3a8a' },
  card: { backgroundColor: '#f1f5f9', borderRadius: 12, padding: 12, marginBottom: 8 },
  fr: { fontSize: 18, fontWeight: '700', color: '#111827' },
  meaning: { fontSize: 16, color: '#374151', marginTop: 2 },
  say: { fontSize: 14, color: '#2563eb', marginTop: 4 },
  note: { fontSize: 13, color: '#6b7280', marginTop: 4 },
});