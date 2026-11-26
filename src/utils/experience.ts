export function getJapanExperienceText(lang: 'en' | 'ja', startDateStr = '2022-12-01'): string {
  const start = new Date(startDateStr)
  const now = new Date()
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (now.getDate() < start.getDate()) {
    months -= 1
  }
  months = Math.max(0, months)
  const yrs = Math.floor(months / 12)
  const rem = months % 12

  if (lang === 'ja') {
    return rem === 0 ? `日本での実務経験 ${yrs}年` : `日本での実務経験 ${yrs}年${rem}ヶ月`
  }
  return rem === 0 ? `${yrs}Y Experience in Japan` : `${yrs}Y ${rem}M in Japan`
}
