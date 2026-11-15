export const SITE_URL = 'https://kovex.com.br'
export const SITE_NAME = 'Kovex Tecnologia'
/**
 * Title e description com as palavras que as pessoas buscam (decisão de 2026-10-22).
 * Até ~60 e ~155 caracteres, para o Google não cortar.
 */
export const SITE_TITLE = 'Atendente de WhatsApp com IA, páginas web e apps · Kovex'
export const SITE_DESCRIPTION =
  'Atendente de WhatsApp com IA, páginas web (landing pages e sites), automações e apps sob medida. Páginas web a partir de R$ 200, valor fechado e código no seu nome.'

/**
 * Dados formais: aparecem no rodapé, na privacidade e no JSON-LD. Endereço e data
 * de abertura vieram da versão anterior do site, conferidos com o comprovante de
 * inscrição do CNPJ emitido em 23/09/2026.
 */
export const COMPANY_NAME = 'Kovex Tecnologia LTDA'
export const COMPANY_CNPJ = '68.036.280/0001-21'
export const COMPANY_CITY = 'Porto Alegre/RS'
export const COMPANY_FOUNDING_DATE = '2026-07-15'
export const COMPANY_ADDRESS = {
  street: 'Av. Cristóvão Colombo, 2144',
  complement: 'sala 408, 3º andar',
  district: 'Floresta',
  city: 'Porto Alegre',
  state: 'RS',
  postalCode: '90560-001',
  country: 'BR',
} as const

export const CONTACT_EMAIL = 'contato@kovex.com.br'

/**
 * WhatsApp oficial da Kovex (API oficial da Meta, atendente com IA). Desde 2026-11-14 não é mais o
 * (79) 98134-8819, que fica para o MakerDesk. A mensagem pronta diz que a pessoa veio pelo site.
 *
 * `WHATSAPP_NUMBER` é só dígitos com DDI, o formato que o `wa.me` exige; os outros formatos derivam
 * dele para não ficarem defasados. Aceita 12 dígitos (DDI + DDD + 8, como o número oficial, que o
 * WhatsApp Business mostra sem o nono dígito) ou 13 (com 9 dígitos depois do DDD).
 */
export const WHATSAPP_NUMBER = '557981222315'
const DDI = WHATSAPP_NUMBER.slice(0, 2)
const DDD = WHATSAPP_NUMBER.slice(2, 4)
const LOCAL = WHATSAPP_NUMBER.slice(4)
const LOCAL_COM_HIFEN = `${LOCAL.slice(0, -4)}-${LOCAL.slice(-4)}`
export const WHATSAPP_DISPLAY = `(${DDD}) ${LOCAL_COM_HIFEN}`
export const WHATSAPP_MESSAGE =
  'Olá, Kovex! Vim pelo site. Tenho uma ideia e quero entender por onde começar.'
/** Cada página de serviço tem a própria mensagem, que diz de onde a pessoa veio (decisão de 2026-10-22). */
export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
export const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGE)

/** Formato E.164 com hifens para o JSON-LD (+55-79-8122-2315). */
export const PHONE_E164 = `+${DDI}-${DDD}-${LOCAL_COM_HIFEN}`

export const MAKERDESK_URL = 'https://www.makerdesk.com.br'
export const MAKERDESK_TAGLINE = 'Gestão para negócios de impressão 3D'

/**
 * O WhatsApp é o mesmo do suporte do MakerDesk: quem já é cliente do produto é
 * levado ao canal de suporte dele (aviso que veio da versão anterior do site).
 */
export const MAKERDESK_SUPPORT_EMAIL = 'suporte@makerdesk.com.br'

/**
 * Links do app do MakerDesk nas lojas. Ficam nulos até o app ser publicado:
 * sem link, a seção MakerDesk não mostra nada no lugar.
 */
export const MAKERDESK_APP_STORE_URL: string | null = null
export const MAKERDESK_PLAY_STORE_URL: string | null = null

/** Prazo confirmado pelo Paulo: a resposta sai em menos de 24 horas. */
export const RESPONSE_TIME = 'Resposta em até 24 horas.'

/**
 * O botão principal tem o mesmo texto em todo lugar, cabeçalho incluído. "Conversar"
 * no lugar de "Contar", que soava como entregar a ideia (decisão de 2026-10-21).
 * O ícone já diz que é WhatsApp.
 */
export const CTA_LABEL = 'Conversar sobre minha ideia'

export const MENU = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#makerdesk', label: 'MakerDesk' },
  { href: '#perguntas', label: 'Perguntas' },
] as const
