import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function formateDateDistanceToNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}

export function formatText(text: string, limitLength = 50) {
  if (!text) {
    return text
  }
  const textArr = text.split(' ')
  const newText = textArr
    .map((string, index) => {
      return index < limitLength ? string : ''
    })
    .filter((string) => string !== undefined)

  return `${newText.toString().replaceAll(',', ' ')}...`
}
