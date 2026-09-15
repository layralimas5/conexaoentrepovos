import { ministry } from '@/content/site'

const defaultMessage =
  'Olá, Kamilly! Conheci o Conexão Entre os Povos pelo site e quero saber como participar.'

export function whatsappLink(message: string = defaultMessage): string {
  return `https://wa.me/${ministry.whatsapp}?text=${encodeURIComponent(message)}`
}
