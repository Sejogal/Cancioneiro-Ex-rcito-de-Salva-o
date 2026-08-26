import { PixelRatio, StyleSheet } from "react-native";

const escala = PixelRatio.getFontScale();

export default StyleSheet.create({
  title: {
    color: '#0f172a',
    fontSize: 24 * escala,
    fontWeight: '700',
  },
  subTitle: {
    color: '#0f172a',
    fontSize: 15 * escala,
    fontWeight: '700',
    marginLeft: '2%',
  },
  fundoBtn: {
    backgroundColor: '#069',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16 * escala,
    color: '#fff',
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfe3ff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#0f172a',
    backgroundColor: '#fff',
  },
  jogoBtn: {
    borderWidth: 1,
    borderColor: '#dfe8f3',
    borderRadius: 12,
    width: '30%',
    padding: 10,
    margin: '1.5%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  kLink: {
    borderWidth: 1,
    borderColor: '#e5ecf5',
    borderRadius: 12,
    marginVertical: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#f8fbff',
  },
  link: {
    color: '#0a5db3',
    fontWeight: '600',
    fontSize: 16 * escala,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f6fb',
  },
  caixa: {
    borderRadius: 18,
    padding: 20,
    margin: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#edf2f7',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 2,
  },
  copyRight: {
    color: '#64748b',
    fontSize: 12 * escala,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});