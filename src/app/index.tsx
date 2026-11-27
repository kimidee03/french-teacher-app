import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Markdown from 'react-native-markdown-display';

const API_URL = 'http://192.168.1.105:8000'; // <-- put YOUR IPv4 address here

type Msg = { role: 'user' | 'assistant'; content: string };
type Lang = 'en' | 'tl';

export default function ChatScreen() {
  const [lang, setLang] = useState<Lang>('en');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, explain_lang: lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        { role: 'assistant', content: '⚠️ Cannot reach the teacher. Is the server running?' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Prof de Français 🇫🇷</Text>

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

      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(_, i) => String(i)}
        ListEmptyComponent={
          <Text style={styles.hint}>
            Try: "Teach me how to introduce myself as a babysitter" or "Paano magsabi ng hello sa amo ko?"
          </Text>
        }
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.botBubble]}>
            {item.role === 'user' ? (
              <Text style={styles.userText}>{item.content}</Text>
            ) : (
              <Markdown style={markdownStyles}>{item.content}</Markdown>
            )}
          </View>
        )}
      />

      {loading && <ActivityIndicator style={{ margin: 8 }} />}

      <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Write here..."
            onSubmitEditing={send}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={send}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  list: { flex: 1 },
  hint: { color: '#6b7280', textAlign: 'center', marginTop: 40, paddingHorizontal: 20 },
  bubble: { padding: 10, borderRadius: 14, marginVertical: 4, maxWidth: '85%' },
  userBubble: { backgroundColor: '#2563eb', alignSelf: 'flex-end' },
  botBubble: { backgroundColor: '#f1f5f9', alignSelf: 'flex-start' },
  userText: { color: '#fff', fontSize: 16 },
  botText: { color: '#111827', fontSize: 16 },
  inputRow: { flexDirection: 'row', gap: 8, paddingTop: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, fontSize: 16 },
  sendBtn: { backgroundColor: '#2563eb', borderRadius: 20, paddingHorizontal: 18, justifyContent: 'center' },
  sendText: { color: '#fff', fontWeight: '700' },
});

const markdownStyles = StyleSheet.create({
  body: { color: '#111827', fontSize: 16 },
});