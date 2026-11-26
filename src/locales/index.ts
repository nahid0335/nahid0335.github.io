import en from './en.json'
import ja from './ja.json'

export type LocaleData = typeof en
export type LangCode = 'en' | 'ja'

export const locales: Record<LangCode, LocaleData> = {
  en,
  ja,
}

export const availableLanguages: { code: LangCode; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
]
